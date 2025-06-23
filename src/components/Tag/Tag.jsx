import { motion } from "framer-motion";

const Tag = ({ imgSrc, value, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
      whileHover={{ scale: 1.05 }}
      className={`flex items-center bg-gradient-to-r from-indigo-600 to-purple-700 py-2 lg:py-4 px-6 rounded-full shadow-md ${className}`}
    >
      <img src={imgSrc} alt="Tag" className="w-12 h-12 lg:w-16 lg:h-16 object-contain" />
      <span className="text-2xl lg:text-5xl font-bold text-white ml-4">{value}</span>
    </motion.div>
  );
};

export default Tag;