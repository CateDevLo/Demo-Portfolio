import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import CtaBanner from "../../assets/images/Start Project Bg.png";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      data-scroll-section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12"
    >
      <motion.div
        className="relative bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <motion.img
          src={CtaBanner}
          alt="CTA Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
            className="text-4xl md:text-6xl font-bold uppercase text-white mb-6"
          >
            Bắt đầu dự án cùng Chúng Mình
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
            className="text-[#e0e0e0] text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8"
          >
            Tôi là Tùng - sẵn sàng đồng hành cùng bạn để biến ý tưởng thành hiện thực với chiến lược số đột phá.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } }}
          >
            <Button
              className="flex items-center mx-auto bg-white text-teal-600 font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-teal-100 transition-all duration-300"
            >
              <span className="mr-3 text-lg">Liên hệ ngay</span>
              <FiArrowUpRight size={26} />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;