import React, { useContext } from "react";
import Stats from "./Stats";
import Tag1 from "../../assets/images/Deliver Wave Tag.png";
import Tag2 from "../../assets/images/Deliver Trump Circle.png";
import { motion } from "framer-motion";
import { AnimationContext } from "../../context/animation";

const Deliver = () => {
  const { riseUpVariant, riseUpItem } = useContext(AnimationContext);

  const deliverables = [
    "Giải pháp công nghệ tùy chỉnh để tối ưu hóa doanh nghiệp của bạn.",
    "Hệ thống minh bạch, giúp bạn theo dõi tiến độ và hiệu quả mọi lúc.",
    "Công nghệ tích hợp, cùng hướng tới sự phát triển bền vững.",
  ];

  return (
    <section
      id="about"
      data-scroll-section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 text-white"
    >
      <Stats />
      <motion.div variants={riseUpVariant} initial="hidden" whileInView="visible" className="mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <motion.h2
            variants={riseUpItem}
            className="text-4xl lg:text-6xl font-bold uppercase text-center lg:text-left lg:w-[40%]"
          >
            Giá trị Code Chúng Tôi Lỏ
          </motion.h2>
          <div className="flex gap-6 mt-6 lg:mt-0">
            <motion.img
              variants={riseUpItem}
              src={Tag1}
              alt="Wave Tag"
              className="w-24 lg:w-32 h-auto"
            />
            <motion.img
              variants={riseUpItem}
              src={Tag2}
              alt="Circle Tag"
              className="w-20 lg:w-28 h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={riseUpItem}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
              <p className="text-gray-300 text-lg font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Deliver;