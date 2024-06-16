import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Portfolio",
    img: "/react.svg",
    desc: "This portfolio website is created using React JS with parallax animation and snap scroll effects.",
    button: "Repo Link",
    link: "https://github.com/Biswaranjan-Dash",
  }, 
  {
    id: 2,
    title: "Sudoko Game",
    img: "/sudoko.png",
    desc: "Developed a normal Sudoko Game using Html, Css, Javascript. It has 6 different modes of difficulty.",
    button: "Repo Link",
    link: "https://main--sudokobasic.netlify.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    img: "/ecommerce.jpg",
    desc: "Developing a e-commerce website using React Js, Express JS and Mongodb.",
    button: "In Progress",
    link: "null",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a href={item.link}><button>{item.button}</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
