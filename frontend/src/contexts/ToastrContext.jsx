import React, { createContext, useContext, useState, useCallback } from "react";
import CustomToastr from "../components/CustomToastr";

const ToastrContext = createContext();

export const useToastr = () => {
  const context = useContext(ToastrContext);
  if (!context) {
    throw new Error("useToastr must be used within a ToastrProvider");
  }
  return context;
};

export const ToastrProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({
      message,
      type = "success",
      duration = 5000,
      position = "bottom-right",
    }) => {
      const id = Date.now() + Math.random();
      const newToast = { id, message, type, duration, position, show: true };

      setToasts((prev) => [...prev, newToast]);

      // Auto remove after duration (plus animation time)
      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration + 300); // Add 300ms for exit animation
      }

      return id;
    },
    []
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showSuccess = useCallback(
    (message, duration = 5000) => {
      return addToast({ message, type: "success", duration });
    },
    [addToast]
  );

  const showError = useCallback(
    (message, duration = 7000) => {
      return addToast({ message, type: "error", duration });
    },
    [addToast]
  );

  const showWarning = useCallback(
    (message, duration = 6000) => {
      return addToast({ message, type: "warning", duration });
    },
    [addToast]
  );

  const showInfo = useCallback(
    (message, duration = 5000) => {
      return addToast({ message, type: "info", duration });
    },
    [addToast]
  );

  const value = {
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };

  // Group toasts by position for better stacking
  const groupedToasts = toasts.reduce((acc, toast) => {
    if (!acc[toast.position]) {
      acc[toast.position] = [];
    }
    acc[toast.position].push(toast);
    return acc;
  }, {});

  return (
    <ToastrContext.Provider value={value}>
      {children}
      {/* Render all toasts with staggered positioning */}
      {Object.entries(groupedToasts).map(([position, positionToasts]) =>
        positionToasts.map((toast, index) => (
          <div
            key={toast.id}
            style={{
              transform: `translateY(${index * 80}px)`,
              zIndex: 50 + index,
            }}
          >
            <CustomToastr
              message={toast.message}
              type={toast.type}
              show={toast.show}
              onClose={() => removeToast(toast.id)}
              duration={toast.duration}
              position={toast.position}
            />
          </div>
        ))
      )}
    </ToastrContext.Provider>
  );
};
