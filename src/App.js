import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Extras from "./Components/Extras";
import Outro from "./Components/Outro";
import './App.scss'
import { useRef } from "react";

import { motion, useScroll, useSpring } from "framer-motion";




function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);
  const targetRef4 = useRef(null);
  return <>
  <motion.div className="progress-bar" style={{ scaleX }} />
    <Intro scrollRef={targetRef}/>
    <Education scrollRef={targetRef} scrollRef2={targetRef2}/>
    <Skills scrollRef2={targetRef2} scrollRef3={targetRef3}/>
    <Extras scrollRef3={targetRef3} scrollRef4={targetRef4}/>
    <Outro scrollRef4={targetRef4}/>
    </>
  
}

export default App;
