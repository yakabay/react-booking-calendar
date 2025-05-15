import { useState, useCallback } from "react";

export const useSuccessMessage = (duration = 3000) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");

  const showSuccess = useCallback(
    (successMessage: string) => {
      setMessage(successMessage);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), duration);
    },
    [duration]
  );

  return {
    isVisible,
    message,
    showSuccess,
  };
};
