import React, { useState } from "react";
import { fetchWebhooksForInbox } from "../utils/api";
import { useToastr } from "../contexts/ToastrContext";

const DownloadWebhooksButton = ({ inboxId }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { showSuccess, showError } = useToastr();

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const webhooks = await fetchWebhooksForInbox(inboxId);
      const json = JSON.stringify(webhooks, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "webhooks.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showSuccess("Webhooks downloaded successfully!");
    } catch (error) {
      showError("Failed to download webhooks.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className='bg-green-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm'
    >
      {isDownloading ? "Downloading..." : "Download webhooks"}
    </button>
  );
};

export default DownloadWebhooksButton;
