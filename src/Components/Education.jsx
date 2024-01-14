import React from 'react'
import './education.scss'
import book from '../Images/Book.png'
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from 'framer-motion';


const Education = ({ scrollRef , scrollRef2 }) => {

    const goToTop = () =>{
      scrollRef2.current.scrollIntoView({ behavior: 'smooth' });
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
          delay: 0.7,
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
          delay: 0.3,
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

  return <section ref={scrollRef} className="education-container">

   

    <div className="info-container">

    <motion.div {...imgOptions}  className="education-left">

        <img src={book} alt="book" />



    </motion.div>


    <div className="education-right">

        <motion.div {...buttonOptions}className="edu-header">Education</motion.div>



        <div className="card">
           
            <div className="card-info">
            <h3>IIIT, NAYA RAIPUR</h3>
            <p>B.Tech Computer Science and Engineering</p>
            <span>GPA: 7.67  [5th sem]</span>
            </div>

            <div className="card-date">
                <h4>2021 - 2025</h4>
            </div>
            
        </div>

        <div className="card">

            <div className="card-info">
            <h3>FIITJEE, Saifabad</h3>
            <p>TSBIE (Class XII)</p>
            <span>GPA: 9.5 / 10</span>
            </div>

            <div className="card-date">
                <h4>2018 - 2020</h4>
            </div>

        </div>

        <div className="card">

            <div className="card-info">
            <h3>Delhi Public School, Nacharam</h3>
            <p>AISSE (Class X)</p>
            <span>GPA: 9.2 / 10</span>
            </div>

            <div className="card-date">
                <h4>2017 - 2018</h4>
            </div>

        </div>



    </div>


    </div>

   

    <motion.div {...imgOptions} className="scroll-down"><FaAnglesDown onClick={goToTop}/></motion.div>



  </section>
  
}

export default Education