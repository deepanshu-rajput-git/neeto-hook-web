import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HookDetailsViewer from "../components/HookDetailsViewer";
import { useToastr } from "../contexts/ToastrContext";

const HookDetails = ({ activeInbox }) => {
  const { id } = useParams();
  const [hook, setHook] = useState(null);
  const { showSuccess } = useToastr();

  useEffect(() => {
    if (!activeInbox) return;

    const fetchHook = async () => {
      try {
        const response = await axios.get(
          `/api/webhook_inboxes/${activeInbox.uuid}/webhook_requests/${id}`
        );
        setHook(response.data.webhook_request);
      } catch (error) {
        console.error(`Error fetching hook ${id}:`, error);
      }
    };

    fetchHook();
  }, [id, activeInbox]);

  const handleToast = (message) => {
    showSuccess(message);
  };

  return (
    <div>
      <HookDetailsViewer
        hook={hook}
        setToastMessage={handleToast}
        setShowToast={() => {}} // No longer needed
      />
    </div>
  );
};

export default HookDetails;
