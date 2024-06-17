import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const scaletxt = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const opa = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scaleup = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText ,scale:scaletxt}}>
        {type === "services" ? "My Expertise!!" : "My Works!!"}
      </motion.h1>
      <motion.div style={{scale:scaleup,opacity:opa }} className="mountains"></motion.div>
      
      <motion.div style={{scale:scaleBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
