import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { image } from '../../constant';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const [textIndex, setTextIndex] = useState(0);

  const textData = [

    'Nilakshi Jain',
    'EC Council Instructor',
    'CHFI EC Council',
    'Research Cell Chairman',
    'Professor',
    'Certified Ethical Hacker'
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [textData.length]);

  return(
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">{textData[textIndex]}</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Corporis voluptate in repudiandae officia dignissimos illo modi necessitatibus. 
          Blanditiis incidunt obcaecati at? Dignissimos tempora similique necessitatibus 
          libero fuga quo unde nostrum?</p>
          
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={image.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={image.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[image.robot, image.robot, image.robot].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
)};

export default Header;