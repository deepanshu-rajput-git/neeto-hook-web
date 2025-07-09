import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderBar from "./components/HeaderBar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import HookDetails from "./pages/HookDetails";
import Transformations from "./pages/Transformations";
import cable from "./services/cable";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeInbox, setActiveInbox] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hooks, setHooks] = useState([]);
  const [stats, setStats] = useState({
    total_hooks: 0,
    hooks_today: 0,
    successful_hooks: 0,
    failed_hooks: 0,
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
  }, [activeInbox]);

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

    const channel = cable.subscriptions.create(
      { channel: "WebhookChannel", uuid: activeInbox.uuid },
      {
        connected: () => {
          console.log("Successfully connected to Action Cable channel.");
        },
        disconnected: () => {
          console.log("Disconnected from Action Cable channel.");
          setToastMessage(
            "Real-time connection failed. Please check if your Redis server is running."
          );
          setShowToast(true);
        },
        received: (data) => {
          if (data.webhook_request) {
            const receivedAt = new Date(data.webhook_request.created_at);
            const now = new Date();
            const currentLatency = now - receivedAt;

            setHooks((prevHooks) => [data.webhook_request, ...prevHooks]);
            fetchStats();
            setToastMessage(
              `New webhook received: #${data.webhook_request.id} (Latency: ${currentLatency}ms)`
            );
            setShowToast(true);
          }
        },
      }
    );

    return () => {
      channel.unsubscribe();
    };
  }, [activeInbox, fetchStats]);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <ToastContainer />
        <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    activeInbox={activeInbox}
                    loading={loading}
                    hooks={hooks}
                    stats={stats}
                    toastMessage={toastMessage}
                    showToast={showToast}
                    setToastMessage={setToastMessage}
                    setShowToast={setShowToast}
                  />
                }
              />
              <Route
                path="/hooks/:id"
                element={<HookDetails activeInbox={activeInbox} />}
              />
              <Route
                path="/transformations"
                element={
                  <Transformations activeInbox={activeInbox} loading={loading} />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
