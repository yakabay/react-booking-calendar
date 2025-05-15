import { motion, AnimatePresence } from "framer-motion";
import "./SuccessMessage.scss";

interface SuccessMessageProps {
  message: string;
  isVisible: boolean;
}

export const SuccessMessage = ({ message, isVisible }: SuccessMessageProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="success-message"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
