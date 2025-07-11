import React, { useState } from "react";
import { Button, Toastr } from "@bigbinary/neetoui";
import { fetchWebhooksForInbox } from "../utils/api";

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
      Toastr.success("Webhooks downloaded successfully!");
    } catch (error) {
      Toastr.error("Failed to download webhooks.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      label={isDownloading ? "Downloading..." : "Download webhooks"}
      variant='primary'
      size='small'
      onClick={handleDownload}
      disabled={isDownloading}
      loading={isDownloading}
    />
  );
};

export default DownloadWebhooksButton;
