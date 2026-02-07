import { useState } from 'react';
import './AboutPage.css';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/images/Butterfly on mechanical robot finger hand.json';

const AboutPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <p className="about-hero-subtitle">🛸✨ Welcome to the Future of Education</p>
                        <h1 className="about-hero-title">
                            About RoboTech<br />
                            Learning Center
                        </h1>
                        <p className="about-hero-description">
                            Join hundreds of schools already exploring the universe of robotics education!
                            Founded in 2025, we're an innovative e-learning platform designed to empower
                            students with the skills of the future.
                        </p>
                        <div className="hero-emojis">
                            <span>🎓</span>
                            <span>🌟</span>
                            <span>🚀</span>
                            <span>🤖</span>
                        </div>
                    </div>
                    <div className="about-hero-lottie">
                        <Lottie
                            animationData={robotAnimation}
                            loop={true}
                            className={`lottie-anim ${isLoaded ? 'loaded' : ''}`}
                            onDOMLoaded={() => setIsLoaded(true)}
                        />
                    </div>
                </div>

                <div className="about-hero-wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" preserveAspectRatio="none">
                        <path d="M0,80 C360,150 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,150 L0,150 Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* About Description Section */}
            <section className="about-description-section">
                <div className="about-description-container">
                    <div className="description-content">
                        <p className="description-text">
                            We offer engaging and interactive courses in <strong>robotics</strong>, <strong>coding</strong>,
                            <strong> ICT</strong>, and a wide range of <strong>ECA programs</strong> that inspire creativity,
                            curiosity, and confidence.
                        </p>
                        <p className="description-text">
                            At Robotech Learning Center, our mission is to make quality STEM and skill-based education
                            accessible, fun, and meaningful for every learner. Through gamified lessons, hands-on projects,
                            and real-world problem-solving, we help students unlock their potential and step into the
                            world of technology with excitement and readiness.
                        </p>
                    </div>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="about-innovation-section">
                <div className="innovation-container">
                    <div className="innovation-header">
                        <h2>Innovation in Education</h2>
                        <p>We use the coolest educational technologies and super fun methodologies to deliver the most amazing learning experience ever!</p>
                        <div className="innovation-emojis">
                            <span>🎯</span>
                            <span>🌟</span>
                            <span>🚀</span>
                            <span>💫</span>
                        </div>
                    </div>

                    <div className="mission-vision-grid">
                        <div className="mv-card mission-card-blue">
                            <div className="mv-icon">🎯</div>
                            <h3>Our Mission</h3>
                            <p>
                                Empower students through super fun project-based learning in robotics and technology!
                                We make learning robots the most exciting adventure ever!
                            </p>
                        </div>
                        <div className="mv-card vision-card-red">
                            <div className="mv-icon">🚀</div>
                            <h3>Our Vision</h3>
                            <p>
                                To become Nepal's leading STEM hub for schools and communities! We want to be the
                                coolest place where kids learn amazing technology!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="about-why-section">
                <div className="why-container">
                    <div className="why-header">
                        <div className="why-emojis">
                            <span>🌟</span>
                            <span>🚀</span>
                            <span>⭐</span>
                            <span>🎮</span>
                        </div>
                        <h2>Why Choose ROBO-TECH Learning Center?</h2>
                        <p>
                            We offer one of Nepal's most exciting and future-focused learning platforms, combining
                            Coding, Robotics, and ICT education to empower learners of all ages.
                        </p>
                    </div>

                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon">🎯</div>
                            <h4>Future-Ready Skills</h4>
                            <p>Coding, Robotics, ICT, AI & digital literacy</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🛠️</div>
                            <h4>Hands-on Learning</h4>
                            <p>Project-based learning that builds creativity and problem-solving skills</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🏫</div>
                            <h4>Trusted by Schools</h4>
                            <p>Structured, curriculum-aligned programs for schools & colleges</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">👨‍🏫</div>
                            <h4>Expert Instructors</h4>
                            <p>Trained in STEM education and real-world technologies</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🔬</div>
                            <h4>Complete Ecosystem</h4>
                            <p>Labs, workshops, teacher training & competitions</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">📈</div>
                            <h4>Proven Results</h4>
                            <p>Students develop confidence, innovation skills, and strong tech foundations</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">💻</div>
                            <h4>Flexible Learning</h4>
                            <p>Online + in-school programs for individuals and institutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section">
                <div className="about-stats-container">
                    <div className="about-stat">
                        <div className="stat-icon-wrapper"><span>🎓</span></div>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Happy Students</span>
                    </div>
                    <div className="about-stat">
                        <div className="stat-icon-wrapper"><span>🏫</span></div>
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Partner Schools</span>
                    </div>
                    <div className="about-stat">
                        <div className="stat-icon-wrapper"><span>📚</span></div>
                        <span className="stat-number">20+</span>
                        <span className="stat-label">Exciting Courses</span>
                    </div>
                    <div className="about-stat">
                        <div className="stat-icon-wrapper"><span>⭐</span></div>
                        <span className="stat-number">95%</span>
                        <span className="stat-label">Satisfaction Rate</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta-section">
                <div className="about-cta-container">
                    <h2>Want to Learn Coding, Robotics, or ICT the Fun Way?</h2>
                    <p>
                        Thousands of learners are leveling up their skills with our practical, engaging programs.
                        Your tech journey starts here!
                    </p>
                    <button className="btn btn-primary cta-btn">
                        Enroll Now <span>→</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
