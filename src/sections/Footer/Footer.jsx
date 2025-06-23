import { Link } from "react-scroll";
import Logo from "../../assets/images/Logo.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";
import { FaEnvelope, FaInstagram, FaTwitter, FaMedium, FaTelegram, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const { riseUpVariant2, riseUpItem } = useContext(AnimationContext);

  const socialLinks = [
    { text: "Email", handle: "xuantungofficial@gmail.com", icon: <FaEnvelope /> },
    { text: "Instagram", handle: "catehehe_", icon: <FaInstagram /> },
    { text: "Instagram", handle: "woat_05", icon: <FaInstagram /> },
    { text: "TikTok", handle: "@tunz2001", icon: <FaTiktok /> },
    { text: "Telegram", handle: "@WhoisCate", icon: <FaTelegram /> },
    { text: "Facebook", handle: "diepnuanekk21", icon: <FaFacebook /> },
    { text: "Facebook", handle: "whoiscatee", icon: <FaFacebook /> },
  ];

  return (
    <footer
      className=" text-[#e5e5e5] py-20 lg:w-[90%] max-w-[1400px] mx-auto px-6 md:px-12"
      data-scroll-section
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          variants={riseUpVariant2}
          initial="hidden"
          whileInView="visible"
          className="text-center md:text-left"
        >
          <Link to="home" className="cursor-pointer mb-6 inline-block">
            <motion.img variants={riseUpItem} src={Logo} alt="Logo Cate" className="h-12" />
          </Link>
          <motion.h2
            variants={riseUpItem}
            className="text-3xl lg:text-5xl font-bold uppercase mb-4"
          >
            Code by Cate
          </motion.h2>
          <motion.p
            variants={riseUpItem}
            className="text-[#b0b0b0] text-base lg:text-lg font-medium"
          >
            Hà Nội,Việt Nam
          </motion.p>
        </motion.div>
        <motion.div
          variants={riseUpVariant2}
          initial="hidden"
          whileInView="visible"
          className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={riseUpItem}
              href={`https://${link.text.toLowerCase()}.com/${link.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-indigo-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white text-xl">{link.icon}</span>
              <div>
                <p className="text-white text-base font-semibold">{link.text}</p>
                <p className="text-[#b0b0b0] text-sm">{link.handle}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
        className="mt-12 text-center text-[#b0b0b0] text-sm"
      >
        <p>© 2025 Code by Nguyễn Xuân Tùng. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;