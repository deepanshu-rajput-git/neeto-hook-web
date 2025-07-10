import React, { useEffect } from "react";

const LocalToast = ({ message, show, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        color: "white",
        fontSize: "0.875rem",
        fontWeight: "500",
        zIndex: 1000,
        background: "#22c55e", // green-500
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        border: "1px solid #16a34a", // green-600
      }}
    >
      {message}
    </div>
  );
};

export default LocalToast;
