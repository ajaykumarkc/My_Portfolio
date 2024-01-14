import React from 'react'
import './outro.scss'
import outro from '../Images/lastpage.png'


const Outro = ({scrollRef4}) => {
  const downloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/AJAY_KUMAR_KC.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ajay_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section ref={scrollRef4} className="outro-container">

        <div className="content-container">

            <div className="image-container">
                <img src={outro} alt="" />
            </div>

            <div className="scroll-top">
                <button onClick={downloadResume}> <span>Download My Resume</span>
  <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg></button>
            </div>

        </div>
    </section>
  )
}

export default Outro