import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";
import { FaRocket, FaUsers, FaAward } from "react-icons/fa";

const Stats = () => {
  const { riseUpVariant, riseUpItem } = useContext(AnimationContext);

  const statsData = [
    { value: "1000+", label: "Dự án Code", icon: <FaRocket className="text-teal-400 text-3xl lg:text-5xl" /> },
    { value: "700+", label: "Doanh nghiệp tin cậy", icon: <FaUsers className="text-purple-400 text-3xl lg:text-5xl" /> },
    { value: "250+", label: "Giải thưởng công nghệ", icon: <FaAward className="text-orange-400 text-3xl lg:text-5xl" /> },
  ];

  return (
    <section className="py-16 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 text-white">
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={riseUpItem}
            className="flex flex-col items-center bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {stat.icon}
              <p className="ml-3 text-4xl lg:text-6xl font-bold text-white">{stat.value}</p>
            </div>
            <p className="text-lg font-medium text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;