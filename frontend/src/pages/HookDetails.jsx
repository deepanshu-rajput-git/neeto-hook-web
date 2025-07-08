import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HookDetailsViewer from '../components/HookDetailsViewer';

const HookDetails = ({ activeInbox }) => {
  const { id } = useParams();
  const [hook, setHook] = useState(null);

  useEffect(() => {
    if (!activeInbox) return;

    const fetchHook = async () => {
      try {
        const response = await axios.get(`/api/hooks/${activeInbox.uuid}/requests/${id}`);
        setHook(response.data.webhook_request);
      } catch (error) {
        console.error(`Error fetching hook ${id}:`, error);
      }
    };

    fetchHook();
  }, [id, activeInbox]);

  return (
    <div>
      <HookDetailsViewer hook={hook} />
    </div>
  );
};

export default HookDetails;