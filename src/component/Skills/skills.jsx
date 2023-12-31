import React from 'react'
import './skills.css'
import Wordpress from "../../assets/WordPress.png";
import AppDesign from "../../assets/app-design.png";
import UIDesign from "../../assets/ui-design.png";
import reactIcn from "../../assets/React.png";
import Node from '../../assets/node.png'
import Mysql from '../../assets/MySQL-Logo.png'


const Skills = () => {

    const data = [
        {
            img: Wordpress,
            title: "Wordpress Developer",
            description: "This is a demo text, you can write your own content here"
        },
        {
            img: AppDesign,
            title: "App Developer",
            description: "This is a demo text, you can write your own content here"
        },
        {
            img: reactIcn,
            title: "React Js Developer",
            description: "This is a demo text, you can write your own content here"
        },
        {
            img: Node,
            title: "Node Js Developer",
            description: "This is a demo text, you can write your own content here"
        },
        {
            img: Mysql,
            title: "My SQL",
            description: "This is a demo text, you can write your own content here"
        },
    ]
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate Web Developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, React, Wordpress, Git, Core-Java as well as design software like Figma</span>
            <div className="skillBars">
                {data.map((item, index) => {return(
                    <div className="skillBar" key={index}>
                        <img src={item.img} alt="UIDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )})}
            </div>

        </section>
    )
}

export default Skills