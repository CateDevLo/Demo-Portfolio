import Stars from "../../assets/images/Client Star.png";
import { FaApple, FaAmazon, FaTiktok, FaMicrosoft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const Clients = () => {
  const { riseUpVariant } = useContext(AnimationContext);

  const clientLogos = [
    { icon: <FaApple />, name: "Apple" },
    { icon: <FaAmazon />, name: "Amazon" },
    { icon: <FaTiktok />, name: "TikTok" },
    { icon: <FaMicrosoft />, name: "Microsoft" },
  ];

  return (
    <section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 text-white rounded-3xl"
      data-scroll-section
    >
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="text-4xl lg:text-6xl font-bold uppercase tracking-wide"
        >
          Đối tác Code Chúng Tôi Lỏ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-2xl mx-auto"
        >
          Tôi là Tùng, cùng Code Chúng Tôi Lỏ hợp tác với các thương hiệu hàng đầu để tạo ra giá trị công nghệ vượt trội.
        </motion.p>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } }}
          src={Stars}
          alt="Stars"
          className="w-24 mx-auto mt-6"
        />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {clientLogos.map((client, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <span className="text-5xl text-white mb-4">{client.icon}</span>
            <p className="text-white text-base font-semibold">{client.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;