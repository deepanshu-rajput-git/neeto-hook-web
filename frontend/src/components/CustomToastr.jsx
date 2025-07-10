import React, { useEffect, useState } from "react";
import {
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const CustomToastr = ({
  message,
  type = "success",
  show,
  onClose,
  duration = 5000,
  position = "bottom-right",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsExiting(false);

      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }
  }, [show, duration]);

  const handleClose = () => {
    setIsExiting(true);
    // Wait for exit animation to complete before calling onClose
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300); // Match the exit animation duration
  };

  if (!show || !isVisible) {
    return null;
  }

  const getToastStyles = () => {
    const baseStyles =
      "fixed z-50 max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border transition-all duration-300 transform";

    const positionStyles = {
      "top-right": "top-4 right-4",
      "top-left": "top-4 left-4",
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "top-center": "top-4 left-1/2 transform -translate-x-1/2",
      "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
    };

    const typeStyles = {
      success: "border-green-200 dark:border-green-700",
      error: "border-red-200 dark:border-red-700",
      warning: "border-yellow-200 dark:border-yellow-700",
      info: "border-blue-200 dark:border-blue-700",
    };

    // Add animation classes based on position and state
    const animationStyles = isExiting
      ? "opacity-0 scale-95 translate-y-2"
      : "opacity-100 scale-100 translate-y-0";

    return `${baseStyles} ${positionStyles[position]} ${typeStyles[type]} ${animationStyles}`;
  };

  const getIcon = () => {
    const iconClasses = "h-5 w-5";

    switch (type) {
      case "success":
        return <CheckCircleIcon className={`${iconClasses} text-green-500`} />;
      case "error":
        return (
          <ExclamationTriangleIcon className={`${iconClasses} text-red-500`} />
        );
      case "warning":
        return (
          <ExclamationTriangleIcon
            className={`${iconClasses} text-yellow-500`}
          />
        );
      case "info":
        return (
          <InformationCircleIcon className={`${iconClasses} text-blue-500`} />
        );
      default:
        return <CheckCircleIcon className={`${iconClasses} text-green-500`} />;
    }
  };

  const getProgressBarColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <div className={getToastStyles()}>
      {/* Progress bar */}
      <div className='absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-t-lg overflow-hidden'>
        <div
          className={`h-full ${getProgressBarColor()} transition-all duration-300 ease-linear ${
            isExiting ? "w-0" : ""
          }`}
          style={{
            width: isExiting ? "0%" : "100%",
            animation: isExiting
              ? "none"
              : `shrink ${duration}ms linear forwards`,
          }}
        />
      </div>

      {/* Toast content */}
      <div className='flex items-start p-4'>
        <div className='flex-shrink-0 mr-3 mt-0.5'>{getIcon()}</div>
        <div className='flex-1 min-w-0'>
          <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
            {message}
          </p>
        </div>
        <div className='flex-shrink-0 ml-3'>
          <button
            onClick={handleClose}
            className='inline-flex text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300 transition-all duration-200 hover:scale-110 active:scale-95'
          >
            <XMarkIcon className='h-4 w-4' />
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes shrink {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomToastr;
