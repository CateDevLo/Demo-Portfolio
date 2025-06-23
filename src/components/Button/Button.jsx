import { motion } from "framer-motion";

const Button = ({ children, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full py-3 px-6 font-semibold uppercase shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;