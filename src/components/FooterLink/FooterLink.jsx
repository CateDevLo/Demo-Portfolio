import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const FooterLink = ({ text, handle, className }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className={`flex items-center justify-between py-4 text-white border-b border-gray-700 hover:text-indigo-400 transition-colors duration-300 ${className}`}
    >
      <span className="uppercase font-semibold text-base">{text}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-300">{handle}</span>
        <FiArrowUpRight size={20} />
      </div>
    </motion.div>
  );
};

export default FooterLink;