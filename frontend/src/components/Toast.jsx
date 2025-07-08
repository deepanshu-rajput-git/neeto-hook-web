import React, { useEffect } from 'react';

const Toast = ({ message, show, onHide }) => {
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
    <div className="fixed bottom-4 right-4 bg-lime-500 text-white py-2 px-4 rounded-lg shadow-lg animate-bounce">
      {message}
    </div>
  );
};

export default Toast;