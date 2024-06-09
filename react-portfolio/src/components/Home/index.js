import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { LayerGroup } from 'react-leaflet';
import Loader from 'react-loaders';
import backgroundImage from '../../assets/images/dalletoday.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['w', 'e', 'l', 'c','o', 'm', 'e', ' ', 't', 'o', ' ']
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
                
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>landing dream jobs, one student at a time.</h2>
                <Link to="/contact" className='flat-button'>APPLY HERE</Link>
            </div>
            
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    );
}

export default Home