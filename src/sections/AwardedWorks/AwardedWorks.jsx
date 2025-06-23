import AwardedWork from "../../components/Work/AwardedWork";
import ClassicBlueTag from "../../assets/images/Classic Blue Tag.png";
import OrangyWaveTag from "../../assets/images/Orangy Wave Tag.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const AwardedWorks = () => {
  const { riseUpVariant } = useContext(AnimationContext);

  const awards = [
    {
      labels: [
        { name: "AI", delay: 0 },
        { name: "Automation", delay: 0.2 },
        { name: "2050 Awards", delay: 0.4 },
      ],
      caption: "AI Nexus",
      title: "AI Nexus",
      icon: ClassicBlueTag,
      className: "bg-gradient-to-r from-blue-600 to-indigo-700",
    },
    {
      labels: [
        { name: "Blockchain", delay: 0 },
        { name: "2090 Awards", delay: 0.2 },
        { name: "Tech Innovation", delay: 0.4 },
      ],
      caption: "Cate",
      title: "Nguyễn Xuân Tùng",
      icon: OrangyWaveTag,
      className: "bg-gradient-to-r from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="services"
      data-scroll-section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 text-white"
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
          Thành tựu Code Chúng Tôi Lỏ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-2xl mx-auto"
        >
          Tôi là Tùng, dẫn dắt Code Chúng Tôi Lỏ chinh phục các giải thưởng công nghệ với những dự án đột phá.
        </motion.p>
      </motion.div>

      <div className="space-y-12">
        {awards.map((award, index) => (
          <AwardedWork
            key={index}
            labels={award.labels}
            caption={award.caption}
            title={award.title}
            icon={award.icon}
            className={award.className}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardedWorks;