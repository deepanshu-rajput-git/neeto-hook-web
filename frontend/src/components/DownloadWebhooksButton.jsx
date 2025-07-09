import React, { useState } from "react";
import { fetchWebhooksForInbox } from "../utils/api";
import { toast } from "react-toastify";

const DownloadWebhooksButton = ({ inboxId }) => {
  const [isDownloading, setIsDownloading] = useState(false);

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
      toast.success("Webhooks downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download webhooks.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
    >
      {isDownloading ? "Downloading..." : "Download Webhooks"}
    </button>
  );
};

export default DownloadWebhooksButton;
