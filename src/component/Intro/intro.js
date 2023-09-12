import React from 'react'
import './intro.css'
import bg from '../../assets/image2.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
import Resume from '../../assets/Files/DEEPANSHU_KAUSHIK.pdf'

const Intro = () => {
    
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I'm <span className="introName"> Deepanshu</span><br />Software Developer</span>
                <p className="introPara">I am a skilled and passionate web developer with experience
                    In creating <br />visually appealing and user-friendly websites.
                </p>
                
                {/* <Link> */}
                <button className="btn">
                    <img src={btnImg} alt="Hire" className='btnImg' />
                    <a className='aBtn' href={Resume}>Download CV</a>
                    </button>
                {/* </Link> */}

            </div>
            <img src={bg} alt="" className="bg" />

        </section>
    )
}

export default Intro