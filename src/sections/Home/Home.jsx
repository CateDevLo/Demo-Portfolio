import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../assets/images/Home Trump Banner.png";
import TrumpTag from "../../assets/images/Trump Tag.png";
import Button from "../../components/Button/Button";
import { FaTiktok, FaApple, FaAmazon } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import { motion } from "framer-motion";

const Home = () => {
  const { riseUpVariant, riseUpItem, fade } = useContext(AnimationContext);

  const socialIcons = [
    { icon: FaTiktok, link: "#" },
    { icon: FaApple, link: "#" },
    { icon: FaAmazon, link: "#" },
  ];

  return (
    <section id="home" data-scroll-section className="bg-gradient-to-b from-gray-900 to-indigo-900 rounded-b-[4rem] relative overflow-hidden">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 min-h-[90vh] flex items-center">
        <div className="flex flex-col lg:flex-row items-center lg:gap-16">
          <motion.div
            variants={riseUpVariant}
            initial="hidden"
            whileInView="visible"
            className="lg:w-[55%] text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={fade}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight text-white"
            >
              Định hình tương lai với <span className="text-indigo-400">Code Chúng Tôi Lỏ</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={fade}
              className="text-gray-300 text-lg lg:text-xl font-medium mt-6 max-w-lg mx-auto lg:mx-0"
            >
              Tôi là Tùng - Người sáng lập Code Chúng Tôi Lỏ, nơi chúng tôi kiến tạo công nghệ tiên phong để biến đổi cách doanh nghiệp vận hành.
            </motion.p>
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-6 mt-10">
              <motion.span initial={{ opacity: 0, y: 30 }} whileInView={fade}>
                <Button className="flex items-center py-4 px-8 text-lg">
                  <span className="mr-3">Khám phá Code Chúng Tôi Lỏ</span>
                  <FiArrowUpRight size={24} />
                </Button>
              </motion.span>
              <motion.div variants={riseUpVariant} initial="hidden" whileInView="visible" className="flex gap-4">
                {socialIcons.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={riseUpItem}
                    href={item.link}
                    className="bg-indigo-700 text-white p-3 rounded-full hover:bg-indigo-800 transition-all duration-300 shadow-md"
                  >
                    <item.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }}
            className="lg:w-[45%] relative"
          >
            <img src={HomeBanner} alt="Home Banner" className="w-full max-w-[700px] rounded-tl-[4rem]" />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 1 } }}
              src={TrumpTag}
              alt="Trump Tag"
              className="absolute top-4 right-4 w-16 lg:w-24"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;