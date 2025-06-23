import SelectedWork from "../../components/Work/SelectedWork";
import WorksBanner from "../../assets/images/Selected Works Card Bg.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const SelectedWorks = () => {
  const { fade } = useContext(AnimationContext);

  const works = [
    {
      title: "Xuân Tùng",
      year: "2001",
      bg: "bg-gradient-to-br from-blue-700 to-cyan-500",
      description: "Nền tảng trí tuệ lượng tử kết nối vạn vật trong tương lai.",
    },
    {
      title: "Bích Diệp",
      year: "2005",
      bg: "bg-gradient-to-br from-purple-600 to-pink-500",
      description: "Hệ sinh thái AI tự học, tối ưu hóa cuộc sống thông minh.",
    },
    {
      title: "Cần Tuyển",
      year: "Design",
      bg: "bg-gradient-to-br from-orange-600 to-yellow-500",
      description: "Công nghệ vận chuyển không gian cho kỷ nguyên mới.",
    },
  ];
  return (
    <section
      id="project"
      data-scroll-section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 text-white"
    >
      <motion.div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="text-4xl lg:text-6xl font-bold uppercase tracking-wide"
        >
          Dự án Portfolio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-2xl mx-auto"
        >
          Dưới sự dẫn dắt của Cate, Code Chúng Tôi Lỏ tạo ra các giải pháp công nghệ đột phá để thay đổi cách thế giới hoạt động.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }}
            whileHover={{ scale: 1.03 }}
          >
            <SelectedWork
              title={<h3 className="text-2xl lg:text-4xl font-bold uppercase">{work.title}</h3>}
              year={work.year}
              className={work.bg}
              rotate={work.rotate}
            />
          </motion.div>
        ))}
      </div>

      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
        src={WorksBanner}
        alt="Dự án Code Tôi Lỏ"
        className="w-full mt-12 rounded-2xl shadow-2xl"
      />
    </section>
  );
};

export default SelectedWorks;