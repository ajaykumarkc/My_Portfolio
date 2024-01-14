import React from 'react'
import './intro.scss'
import skin from '../Images/skin 1.png'
import { FaAnglesDown } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from 'framer-motion';

const Intro = ({ scrollRef }) => {
    const goToTop = () =>{
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
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
          delay: 0.5,
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
    <div className='intro-container'>
        <motion.div {...textOptions} className="intro-left">
           
            <div className="text-box">
               
                <div className="hi-box">
                    <h3>Hi There!</h3>
                </div>
              
                <div className="description">
                    <p> I'm Ajay, a passionate Web Developer who loves to build solutions that scale.  </p>
                    
                </div>

                <div className="social-icons">
                    <a className='social-icon' href="https://www.linkedin.com/in/ajay-kumar-koilathachetta-369675252/"><SlSocialLinkedin/></a>
                    <a className='social-icon' href="https://leetcode.com/ajaykumarkc03/"><SiLeetcode/></a>
                    <a className='social-icon' href="mailto:ajaykumarkc03@gmail.com"><SiGmail/></a>
                    <a className='social-icon' href="https://github.com/ajaykumarkc"><FaGithub/></a>
                </div>
                
                <motion.div {...imgOptions}className="scrolldown">
                    <FaAnglesDown onClick={goToTop}/>
                </motion.div>


            </div>

            


        </motion.div>

        <motion.div {...imgOptions} className="intro-right">

            <img src={skin} alt='sjin' />
            </motion.div>


    </div>

    
  )
}

export default Intro