import React from 'react'
import './skills.css'
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
import UIDesign from "../../assets/ui-design.png";


const Skills = () => {
  return (
   <section id="skills">
   <span className="skillTitle">What I do</span>
   <span className="skillDesc">I am a skilled and passionate Web Developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React, Wordpress, Git, Core-Java as well as design software like Figma</span>
   <div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Wordpress Developer</h2>
            <p>This is a demo text, you can write your own content here</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Website Developer</h2>
            <p>This is a demo text, you can write your own content here</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text, you can write your own content here</p>
        </div>
    </div>
   </div>
   
   </section>
  )
}

export default Skills