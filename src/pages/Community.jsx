import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Community.css'; 

const Community = () => {
    return (
        <>
            <main className="community-main-content">
                <section className="community-hero-section">
                    <div className="community-container">
                        <h1>Join the Nexcent Community</h1>
                        <p className="hero-subtitle">
                            Connect with thousands of professionals, innovators, and leaders. Learn, collaborate, and grow together in a vibrant and supportive environment.
                        </p>
                        <a href="#" className="cta-button">
                            Become a Member Today
                        </a>
                    </div>
                </section>

                <section className="community-benefits-section">
                    <div className="community-container">
                        <h2 className="section-title">What You'll Gain</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <img src="/images/networking.svg" alt="Networking Icon" />
                                <h3>Networking Opportunities</h3>
                                <p>Expand your professional network by connecting with peers and mentors from various industries and backgrounds.</p>
                            </div>
                            <div className="benefit-card">
                                <img src="/images/knowledge.svg" alt="Knowledge Icon" />
                                <h3>Exclusive Content & Resources</h3>
                                <p>Gain access to exclusive articles, webinars, and expert-led workshops to stay ahead in your field.</p>
                            </div>
                            <div className="benefit-card">
                                <img src="/images/support.svg" alt="Support Icon" />
                                <h3>Peer Support & Collaboration</h3>
                                <p>Share ideas, get feedback, and collaborate on exciting projects with a community that's always ready to help.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="community-cta-section">
                    <div className="community-container">
                        <div className="cta-content">
                            <h2>Ready to Elevate Your Professional Journey?</h2>
                            <p>
                                The Nexcent community is where tomorrow's leaders are connecting today. Don't miss out on the opportunity to learn, share, and grow.
                            </p>
                            <a href="#" className="cta-button-secondary">
                                Join Now!
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Community;