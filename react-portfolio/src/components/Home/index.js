import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/DALL·E 2024-01-18 13.57.31 - Cool letter W (1).png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { LayerGroup } from 'react-leaflet';
import Logo from './Logo'
import Loader from 'react-loaders';
import backgroundImage from '../../assets/images/dalletoday.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e', 'l', 'c','o', 'm', 'e', ' ', 't', 'o']
    const jobArray = ['C', 'a', 'r', 'e', 'e', 'r', 'h', 'a', 'u', 's', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    
        // Return a cleanup function that clears the timeout
        return () => clearTimeout(timer);
    }, []);
    
    
    return (
        <>
        <div className="container home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-zone">
                <h1>
                <span className={`${letterClass} _13`}> </span>
                <span className={`${letterClass} _14`}>  </span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Landing dream jobs, one student at a time.</h2>
                <Link to="/contact" className='flat-button'>APPLY HERE</Link>
            </div>
            <Logo />
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    );
}

export default Home