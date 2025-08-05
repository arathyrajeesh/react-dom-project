import '../styles/Header.css';
import { Link } from "react-router-dom"



const Header = () => {
    return(
        <header className="site-header">
            <div className='container header-content'>
                <a href="#" className="logo-link">
                    <img src='/images/logo.svg'  />
                    <span>Nexcent</span>
                </a>
                <nav className='list-items'>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/features'}>Features</Link></li>
                        <li><Link to={'/community'}>Community</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><a href='#'>Pricing</a></li>
                    </ul>
                </nav>
                <button className="register-button">Register Now</button>
            </div>
        </header>
    );
};

export default Header;