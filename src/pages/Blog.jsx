import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css' 

const blogPosts = [
    {
        id: 1,
        image: '/images/blog-post-1.svg',
        title: 'The Future of Remote Work: What to Expect in 2025',
        excerpt: 'Remote work has evolved significantly. Discover the key trends, technologies, and strategies that will shape the future of how we work.',
        link: '#'
    },
    {
        id: 2,
        image: '/images/blog-post-2.svg',
        title: 'A Guide to Building a Thriving Online Community',
        excerpt: 'Creating a successful community isn t just about having members. Learn our proven strategies for fostering engagement and driving meaningful connections.',
        link: '#'
    },
    {
        id: 3,
        image: '/images/blog-post-3.svg',
        title: 'AI in Business: How to Leverage Automation for Growth',
        excerpt: 'Artificial intelligence is no longer a luxury. Explore practical ways businesses of all sizes can use AI to automate tasks and accelerate their growth.',
        link: '#'
    },
    {
        id: 4,
        image: '/images/blog-post-4.svg',
        title: 'Mastering the Art of Digital Marketing',
        excerpt: 'In a crowded digital landscape, standing out is a challenge. Our guide covers essential tips and tricks to help you master digital marketing and reach your audience.',
        link: '#'
    },
    {
        id: 5,
        image: '/images/blog-post-5.svg',
        title: 'Optimizing Your Workflow with Project Management Tools',
        excerpt: 'Effective project management is key to success. We dive into the best practices and tools to help your team stay organized and productive.',
        link: '#'
    },
    {
        id: 6,
        image: '/images/blog-post-6.svg',
        title: 'Cybersecurity Best Practices for Small Businesses',
        excerpt: 'Protecting your business from online threats is non-negotiable. Learn the fundamental cybersecurity practices every small business should implement.',
        link: '#'
    }
];

const Blog = () => {
    return (
        <>
            <main className="blog-main-content">
                <section className="blog-hero-section">
                    <div className="blog-container">
                        <h1>Nexcent Blog</h1>
                        <p className="hero-subtitle">
                            Insights and articles on modern business, technology, community, and innovation.
                        </p>
                    </div>
                </section>

                <section className="blog-posts-section">
                    <div className="blog-container">
                        <div className="blog-posts-grid">
                            {blogPosts.map(post => (
                                <div key={post.id} className="blog-post-card">
                                    <div className="post-image-container">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="post-content">
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <Link to={post.link} className="read-more-link">
                                            Read More &rarr;
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="blog-cta-section">
                    <div className="blog-container">
                        <h2>Don't Miss an Article!</h2>
                        <p>Subscribe to our newsletter to get the latest insights delivered straight to your inbox.</p>
                        <form className="subscription-form">
                            <input type="email" placeholder="Enter your email address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Blog;