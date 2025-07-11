import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Toastr } from "@bigbinary/neetoui";
import { ToastContainer } from "react-toastify";
import axios from "axios";

// Simple debounce function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import HookDetails from "./pages/HookDetails";
import Transformations from "./pages/Transformations";
import HeaderBar from "./components/HeaderBar";
import Sidebar from "./components/Sidebar";
import cable from "./services/cable";

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false; // Default to light theme
  });
  const [activeInbox, setActiveInbox] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hooks, setHooks] = useState([]);
  const [stats, setStats] = useState({
    total_hooks: 0,
    hooks_today: 0,
    successful_hooks: 0,
    failed_hooks: 0,
  });

  const showSuccess = useCallback((message) => Toastr.success(message), []);
  const showError = useCallback((message) => Toastr.error(message), []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    let ignore = false;

    const initializeInbox = async () => {
      setLoading(true);
      let inboxUUID = localStorage.getItem("webhook_inbox_uuid");

      if (inboxUUID === "null" || inboxUUID === "undefined") {
        inboxUUID = null;
        localStorage.removeItem("webhook_inbox_uuid");
      }

      let currentInbox = null;

      if (inboxUUID) {
        try {
          const response = await axios.get(`/api/hooks/${inboxUUID}`);
          currentInbox = response.data.webhook_inbox;
        } catch (error) {
          if (error.response && error.response.status === 404) {
            localStorage.removeItem("webhook_inbox_uuid");
          } else {
            console.error("Error fetching inbox:", error);
            if (!ignore) setLoading(false);
            return;
          }
        }
      }

      if (!currentInbox) {
        try {
          const response = await axios.post("/api/hooks");
          currentInbox = response.data.webhook_inbox;
          localStorage.setItem("webhook_inbox_uuid", currentInbox.uuid);
        } catch (error) {
          console.error("Error creating new inbox:", error);
          if (!ignore) setLoading(false);
          return;
        }
      }

      if (!ignore) {
        setActiveInbox(currentInbox);
        setLoading(false);
      }
    };

    initializeInbox();

    return () => {
      ignore = true;
    };
  }, []);

  const fetchStats = useCallback(async () => {
    if (!activeInbox) return;
    try {
      const response = await axios.get(
        `/api/dashboard/stats?uuid=${activeInbox.uuid}`
      );
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  }, [activeInbox?.uuid]);

  // Debounced version of fetchStats to prevent excessive calls
  const debouncedFetchStats = useCallback(
    debounce(() => {
      fetchStats();
    }, 1000),
    [fetchStats]
  );

  // Initial data fetching when inbox changes
  useEffect(() => {
    if (!activeInbox) return;

    const fetchHooks = async () => {
      try {
        const response = await axios.get(
          `/api/webhook_inboxes/${activeInbox.uuid}/webhook_requests`
        );
        setHooks(response.data.webhook_requests);
      } catch (error) {
        console.error("Error fetching hooks:", error);
      }
    };

    fetchHooks();
    fetchStats();
  }, [activeInbox?.uuid, fetchStats]);

  // WebSocket connection setup
  useEffect(() => {
    if (!activeInbox) return;

    const channel = cable.subscriptions.create(
      { channel: "WebhookChannel", uuid: activeInbox.uuid },
      {
        connected: () => {
          console.log("Successfully connected to Action Cable channel.");
        },
        disconnected: () => {
          console.log("Disconnected from Action Cable channel.");
          showError(
            "Real-time connection failed. Please check if your Redis server is running."
          );
        },
        received: (data) => {
          if (data.webhook_request) {
            const receivedAt = new Date(data.webhook_request.created_at);
            const now = new Date();
            const currentLatency = now - receivedAt;

            setHooks((prevHooks) => [data.webhook_request, ...prevHooks]);
            debouncedFetchStats();
            showSuccess(
              `New webhook received: #${data.webhook_request.id} (Latency: ${currentLatency}ms)`
            );
          }
        },
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, [activeInbox?.uuid, debouncedFetchStats, showSuccess, showError]);

  const MainLayout = ({ children }) => (
    <div className='flex flex-col h-screen bg-white dark:bg-gray-900'>
      <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <main className='flex-1 p-6 overflow-y-auto'>{children}</main>
      </div>
    </div>
  );

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route
          path='/dashboard'
          render={() => (
            <MainLayout>
              <Dashboard
                activeInbox={activeInbox}
                loading={loading}
                hooks={hooks}
                stats={stats}
              />
            </MainLayout>
          )}
        />
        <Route
          path='/hooks/:id'
          render={(props) => (
            <MainLayout>
              <HookDetails {...props} activeInbox={activeInbox} />
            </MainLayout>
          )}
        />
        <Route
          path='/transformations'
          render={() => (
            <MainLayout>
              <Transformations />
            </MainLayout>
          )}
        />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <>
      <AppContent />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
