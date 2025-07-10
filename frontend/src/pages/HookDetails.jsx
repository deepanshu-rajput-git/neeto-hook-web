import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HookDetailsViewer from "../components/HookDetailsViewer";
import LocalToast from "../components/LocalToast";

const HookDetails = ({ activeInbox, setToastMessage, setShowToast }) => {
  const { id } = useParams();
  const [hook, setHook] = useState(null);
  const [localToastMessage, setLocalToastMessage] = useState("");
  const [showLocalToast, setShowLocalToast] = useState(false);

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

  const handleLocalToast = (message) => {
    setLocalToastMessage(message);
    setShowLocalToast(true);
  };

  const handleToastClose = () => {
    setShowLocalToast(false);
    setLocalToastMessage("");
  };

  return (
    <div>
      <LocalToast
        message={localToastMessage}
        show={showLocalToast}
        onClose={handleToastClose}
      />
      <HookDetailsViewer
        hook={hook}
        setToastMessage={handleLocalToast}
        setShowToast={setShowLocalToast}
      />
    </div>
  );
};

export default HookDetails;
