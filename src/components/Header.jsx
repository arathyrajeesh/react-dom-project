import '../styles/Header.css';

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
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Features</a></li>
                        <li><a href='#'>Community</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Pricing</a></li>
                    </ul>
                </nav>
                <button className="register-button">Register Now</button>
            </div>
        </header>
    );
};

export default Header;