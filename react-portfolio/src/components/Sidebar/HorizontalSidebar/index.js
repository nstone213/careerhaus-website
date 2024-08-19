import { Link } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/Careerhaus_Logo.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/' draggable="false">
            <img className="logophoto" src={LogoS} alt="logo" draggable="false" />
        </Link>
        <nav>
            <Link className="Program" to="program">Program</Link>
        </nav>
    </div>
);

export default Sidebar;