import '../styles/Home.css';



const Home = () => {
    return (
        <section className='home-section'>
            <div className='container'>
                <div className='home'>
                    <div className="home-banner">
                        <h1>Lessons and insights <span className="highlight-text">from 8 years</span></h1>
                        <p>Where to grow your business as a photographer: site or social media?</p>
                        <button className="register-button">Register</button>
                    </div>
                    <div className='home-logo'>
                        <img src='/images/Home.jpg'/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;