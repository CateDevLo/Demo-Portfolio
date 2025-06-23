import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AnimationContext } from "../../context/animation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { riseUpVariant, riseUpItem, navVariants, itemVariants } = useContext(AnimationContext);

  const menuItems = [
    { to: "/", label: "Về Code Của Chúng Tôi" },
    { to: "/", label: "Dự án" },
    { to: "/", label: "Dịch vụ" },
    { to: "/", label: "Liên hệ" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <motion.div
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        className="flex justify-between items-center py-4 px-6 lg:px-12 max-w-[1400px] mx-auto"
      >
        <Link to="home" className="cursor-pointer">
          <motion.img variants={riseUpItem} src={Logo} alt="Logo" className="h-10 lg:h-12" />
        </Link>
        <div className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to} className="cursor-pointer">
              <motion.span
                variants={riseUpItem}
                whileHover={{ y: -2, color: "#a0a0ff" }}
                className="text-base lg:text-lg font-semibold"
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>
        <motion.div
          whileHover={{ rotate: 90 }}
          className="md:hidden cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          <FaBars size={28} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center"
          >
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="w-full text-center"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                className="absolute top-6 right-6"
                onClick={() => setNav(false)}
              >
                <FaTimes size={28} />
              </motion.div>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setNav(false)}
                  className="py-6 text-2xl lg:text-3xl font-bold"
                >
                  <motion.span variants={itemVariants} whileHover={{ scale: 1.1 }}>
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;