import Button from "../../components/Button/Button";
import { FiArrowUpRight } from "react-icons/fi";
import TeamMember1 from "../../assets/images/Team Member 1.png";
import TeamMember2 from "../../assets/images/Team Member 2.png";
import TeamMember3 from "../../assets/images/Team Member 3.png";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import { motion } from "framer-motion";

const Team = () => {
  const { riseUpVariant2, riseUpVariant, tagVariant, riseUpItem } = useContext(AnimationContext);

  const teamMembers = [
    { img: TeamMember1, name: "Xuân Tùng", role: "Người sáng lập Code Chúng Tôi Lỏ" },
    { img: TeamMember2, name: "Bích Diệp", role: "Đồng sáng lập Code Chúng Tôi Lỏ" },
    { img: TeamMember3, name: "Hiếu Minh", role: "Cô Gái Sư Phạm nhưng mà thích Thiết Kế" },
  ];

  return (
    <section
      className="py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12 rounded-3xl text-white"
      data-scroll-section
    >
      <motion.div
        variants={riseUpVariant2}
        initial="hidden"
        whileInView="visible"
        className="text-center mb-12"
      >
        <motion.h2
          variants={riseUpItem}
          className="text-4xl lg:text-6xl font-bold uppercase tracking-wide mb-6"
        >
          Đội ngũ Code Chúng Tôi Lỏ
        </motion.h2>
        <motion.p
          variants={riseUpItem}
          className="text-gray-300 text-lg lg:text-xl font-medium max-w-2xl mx-auto"
        >
          Tôi là Tùng, cùng đội ngũ Code Chúng Tôi Lỏ, chúng tôi tiên phong trong công nghệ để định hình tương lai số hóa.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={riseUpVariant}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <motion.img
              variants={tagVariant}
              src={member.img}
              alt={member.name}
              className="w-36 lg:w-52 h-auto"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
              className="text-center"
            >
              <p className="text-xl lg:text-2xl font-semibold text-white">{member.name}</p>
              <span className="text-gray-300 text-sm lg:text-base">{member.role}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={riseUpItem} className="text-center mt-12">
        <Button className="flex items-center mx-auto py-3 px-8 text-lg">
          <span className="mr-3">Gặp đội ngũ</span>
          <FiArrowUpRight size={24} />
        </Button>
      </motion.div>
    </section>
  );
};

export default Team;
