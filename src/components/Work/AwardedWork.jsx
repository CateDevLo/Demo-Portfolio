import { motion } from "framer-motion";
import Label from "../Label/Label";

const AwardedWork = ({ labels, caption, title, icon, className }) => {
  return (
    <div className="mt-8 lg:mt-12">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          {labels.map((label, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: label.delay } }}
            >
              <Label>{label.name}</Label>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } }}
          className="text-lg lg:text-xl text-gray-300 font-semibold uppercase"
        >
          © {caption}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
        viewport={{ once: true }}
        className={`${className} w-full h-64 lg:h-80 rounded-3xl p-8 lg:p-12 bg-cover bg-center shadow-xl`}
      >
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <h3 className="text-4xl lg:text-6xl font-bold uppercase text-white">{title}</h3>
          <img src={icon} alt={title} className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
      </motion.div>
    </div>
  );
};

export default AwardedWork;