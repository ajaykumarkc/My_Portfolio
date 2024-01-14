import React from 'react'
import './skill.scss'
import { FaAnglesDown } from "react-icons/fa6";
import html from '../Images/HTML.png'
import css from '../Images/CSS.png'
import js from '../Images/JAVASCRIPT.png'
import cplus from '../Images/C++.png'
import python from '../Images/PYTHON.png'
import java from '../Images/JAVA.png'
import reactjs from '../Images/REACT.png'
import sql from '../Images/SQL.png'
import nodejs from '../Images/NODE JS.png'
import { motion } from 'framer-motion';

const Skills = ({ scrollRef2,scrollRef3 }) => {

  const goToTop = () =>{
    scrollRef3.current.scrollIntoView({ behavior: 'smooth' });
  }

  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.6,
    },
  };
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.4,
      ease: "easeIn",
    },
  };
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <section ref={scrollRef2} className="skills-container">

      

      <div className="content">

        <motion.div {...buttonOptions} className="skill-header"> SKILLS</motion.div>
        <div className="board-container">

          <motion.div {...textOptions} className="board">
            <div className="cell"><img src={html} alt="skill" /></div>
            <div className="cell"><img src={css} alt="skill" /></div>
            <div className="cell"><img src={js} alt="skill" /></div>
            <div className="cell"><img src={cplus} alt="skill" /></div>
            <div className="cell"><img src={python} alt="skill" /></div>
            <div className="cell"><img src={java} alt="skill" /></div>
            <div className="cell"><img src={reactjs} alt="skill" /></div>
            <div className="cell"><img src={nodejs} alt="skill" /></div>
            <div className="cell"><img src={sql} alt="skill" /></div>
          </motion.div>



        </div>



      </div>

      <motion.div {...imgOptions} className="scrolldown"><FaAnglesDown onClick={goToTop}/></motion.div>




    </section>

    
  )
}

export default Skills