import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import SidFace from '../../assets/images/Sid.png'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A','b','o','u','t',' ','u','s']}
                            idx={15}
                        />
                    </h1>
                    <p className="sidInformation">
                    Guided & spearheaded by Sid Balaga, The Careerhaus Fellowship stands as an 
                    esteemed program tailored for high school & early-college students, providing 
                    them with a pathway to enter illustrious careers and realize their professional 
                    goals. Sid, a young entrepreneur, holds a B.S.B.A Summa Cum Laude from Georgia 
                    Tech. Born & raised in Georgia, Sid was honored with the prestigious Georgia Outstanding 
                    Citizen awarded by Governor Brian Kemp & Sec. of State Brad Raffensperger for outstanding 
                    citizen-leadership. He wants to inspire and propel the next generation of ambitious students 
                    and founded Careerhaus. Having successfully navigated 300+ job interviews & secured multiple 
                    offers from Fortune 500 companies while in college, Sid uncovered the inside secrets of what 
                    it takes to break into the most sought-after industries like Finance, Tech, Sports & Consulting.  
                    </p>
                    <ul>
                        <li>
                            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/sidbalaga/'>
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sid-face">
                    <img
                        src={SidFace}
                        alt="Sid Balaga"
                    />
                </div>
            </div>
            <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default About
