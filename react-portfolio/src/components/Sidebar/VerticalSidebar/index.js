import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Careerhaus_Logo.png';
import LogoSubtitle from '../../assets/images/Careerhaus (1).svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faPenToSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' draggable="false">
            <img src={LogoS} alt="logo" draggable="false"/>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" draggable="false"/>
        </Link>
        <nav>
            <NavLink to="/" exact="true" activeclassname="active" draggable="false">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" draggable="false"/>
            </NavLink>
            <NavLink to="/program" exact="true" activeclassname="active" className="program-link" draggable="false">
                <FontAwesomeIcon icon={faPaperPlane} color="#4d4d4e" draggable="false"/>
            </NavLink>
            <NavLink to="/about" exact="true" activeclassname="active" className="about-link" draggable="false">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" draggable="false"/>
            </NavLink>
            <NavLink to="/contact" exact="true" activeclassname="active" className="contact-link" draggable="false">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" draggable="false"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href='https://www.linkedin.com/company/careerhaus/' target="_blank" rel="noreferrer" draggable="false">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" draggable="false"/>
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
