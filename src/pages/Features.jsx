import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Features.css'

const Features = () => {
    return (
        <>
            <main className="features-main-content">
                <section className="features-hero-section">
                    <div className="features-container">
                        <h1>Discover the Power of Nexcent</h1>
                        <p className="hero-subtitle">
                            Unlock your team's full potential with our suite of modern tools designed for collaboration, community management, and growth.
                        </p>
                        <Link to="/contact" className="cta-button">
                            Get Started for Free
                        </Link>
                    </div>
                </section>

                <section className="features-list-section">
                    <div className="features-container">
                        <h2 className="section-title">Core Features That Drive Success</h2>
                        
                        <div className="feature-item">
                            <div className="feature-text-content">
                                <h3>1. Collaborative Workspace</h3>
                                <p>
                                    Our powerful collaborative workspace is designed to be the central hub for all your team's activities. Share documents, create tasks, and communicate in real-time, all within a single, intuitive interface. Say goodbye to scattered conversations and siloed information—Nexcent brings everyone to the same page, ensuring your projects run smoothly and efficiently.
                                </p>
                                <ul>
                                    <li>Real-time document editing and comments</li>
                                    <li>Integrated chat and video conferencing</li>
                                    <li>Task assignment and progress tracking</li>
                                    <li>Centralized file storage with version control</li>
                                </ul>
                            </div>
                            <div className="feature-image-content">
                                <img src="/images/collaborative-workspace.svg" alt="Collaborative Workspace" />
                            </div>
                        </div>

                        <div className="feature-item reverse">
                            <div className="feature-image-content">
                                <img src="/images/community-management.svg" alt="Community Management" />
                            </div>
                            <div className="feature-text-content">
                                <h3>2. Community Management Tools</h3>
                                <p>
                                    Build, manage, and grow your community with ease. Nexcent provides a suite of tools that help you engage members, organize events, and foster a strong sense of belonging. From automated member onboarding to powerful analytics, our platform gives you everything you need to cultivate a thriving and active community.
                                </p>
                                <ul>
                                    <li>Member profiles and directories</li>
                                    <li>Event calendar and RSVPs</li>
                                    <li>Discussion forums and group chats</li>
                                    <li>Automated moderation and reporting</li>
                                </ul>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-text-content">
                                <h3>3. AI-Powered Insights & Analytics</h3>
                                <p>
                                    Make smarter decisions with data-driven insights. Our integrated AI-powered analytics engine analyzes your community and business data to provide actionable intelligence. Understand member engagement, identify key trends, and predict future needs to stay ahead of the curve. Nexcent turns raw data into a clear roadmap for success.
                                </p>
                                <ul>
                                    <li>Engagement metrics and heatmaps</li>
                                    <li>Predictive analytics for member retention</li>
                                    <li>Sentiment analysis of discussions</li>
                                    <li>Customizable dashboards and reports</li>
                                </ul>
                            </div>
                            <div className="feature-image-content">
                                <img src="/images/ai-analytics.svg" alt="AI-Powered Analytics" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Features;