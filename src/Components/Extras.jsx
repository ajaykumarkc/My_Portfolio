import React from 'react'
import './extras.scss'
import emrald from '../Images/emrald.png'
import coop from '../Images/co-op.png'
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import ScrollToTopButton from './ScrollToTopButton';


const Extras = ({scrollRef3,scrollRef4}) => {
  const goToTop = () =>{
    scrollRef4.current.scrollIntoView({ behavior: 'smooth' });
  }


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
    <section ref={scrollRef3} className="extras-container">

        <ScrollToTopButton />

        <div className="extra-header">EXTRACURRICULARS</div>


        <div className="content-container">

        <motion.div {...imgOptions} className="extra-left"><img src={coop} alt="" /></motion.div>
        <div className="extra-right">

            <div className="info-container">

                <div className="card">
                    <div className="icon"><img src={emrald} alt="em" /></div>
                    <p className="description">Core Member of Music Club IIIT NR</p>
                </div>

                <div className="card">
                  <div className="icon"><img src={emrald} alt="em" /></div>
                    <p className="description">Part of the organizing team of Technovate 2022, IIIT NR's annual Cultural Fest </p>
                </div>

                <div className="card">
                  <div className="icon"><img src={emrald} alt="em" /></div>
                    <p className="description">Student Director Of Our Childeren Our Planet (<a href='https://ourchildrenourplanet.org/'> LINK </a>)</p>
                </div>

                <div className="card">
                  <div className="icon"><img src={emrald} alt="em" /></div>
                    <p className="description">Solved 250+ questions on Leetcode and rating of 1600+</p>
                </div>

            </div>

        </div>


        </div>

        


        <motion.div {...imgOptions} className="scrolldown"><FaAnglesDown onClick={goToTop}/></motion.div>



    </section>
  )
}

export default Extras