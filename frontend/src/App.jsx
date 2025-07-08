import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HeaderBar from './components/HeaderBar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import HookDetails from './pages/HookDetails';
import Transformations from './pages/Transformations';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeInbox, setActiveInbox] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let ignore = false;

    const initializeInbox = async () => {
      setLoading(true);
      let inboxUUID = localStorage.getItem('webhook_inbox_uuid');
      
      if (inboxUUID === 'null' || inboxUUID === 'undefined') {
        inboxUUID = null;
        localStorage.removeItem('webhook_inbox_uuid');
      }

      let currentInbox = null;

      if (inboxUUID) {
        try {
          const response = await axios.get(`/api/hooks/${inboxUUID}`);
          currentInbox = response.data.webhook_inbox;
        } catch (error) {
          if (error.response && error.response.status === 404) {
            localStorage.removeItem('webhook_inbox_uuid');
          } else {
            console.error('Error fetching inbox:', error);
            if (!ignore) setLoading(false);
            return;
          }
        }
      }

      if (!currentInbox) {
        try {
          const response = await axios.post('/api/hooks');
          currentInbox = response.data.webhook_inbox;
          localStorage.setItem('webhook_inbox_uuid', currentInbox.uuid);
        } catch (error) {
          console.error('Error creating new inbox:', error);
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

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <HeaderBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard activeInbox={activeInbox} loading={loading} />} />
              <Route path="/hooks/:id" element={<HookDetails activeInbox={activeInbox} />} />
              <Route path="/transformations" element={<Transformations />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
