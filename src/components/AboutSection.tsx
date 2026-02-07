import { useState, useEffect, useRef } from 'react';
import './AboutSection.css';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/images/Butterfly on mechanical robot finger hand.json';

const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Intersection Observer to trigger animations when scrolling into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            {/* Floating decorative elements */}
            <div className="about-floating-shapes">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
            </div>

            <div className="about-container">
                {/* Left side - Content */}
                <div className="about-content">
                    <div className="about-badge">
                        <span className="badge-icon">🎓</span>
                        <span className="badge-text">Est. 2025</span>
                    </div>

                    <h2 className="about-title">
                        About <span className="text-gradient">RoboTech</span>
                        <br />Learning Center
                    </h2>

                    <p className="about-tagline">
                        Join hundreds of schools already exploring the universe of robotics education! 🛸✨
                    </p>

                    <p className="about-description">
                        Robotech Learning Center is an innovative e-learning platform designed to empower
                        students with the skills of the future. We offer engaging and interactive courses
                        in <strong>robotics</strong>, <strong>coding</strong>, <strong>ICT</strong>, and
                        a wide range of ECA programs that inspire creativity, curiosity, and confidence.
                    </p>

                    <div className="about-mission">
                        <div className="mission-header">
                            <span className="mission-icon">🎯</span>
                            <h3>Our Mission</h3>
                        </div>
                        <p>
                            To make quality STEM and skill-based education accessible, fun, and meaningful
                            for every learner. Through gamified lessons, hands-on projects, and real-world
                            problem-solving, we help students unlock their potential and step into the
                            world of technology with excitement and readiness.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">🌟</span>
                            <div className="highlight-info">
                                <span className="highlight-number">500+</span>
                                <span className="highlight-label">Students</span>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">🚀</span>
                            <div className="highlight-info">
                                <span className="highlight-number">50+</span>
                                <span className="highlight-label">Schools</span>
                            </div>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">🤖</span>
                            <div className="highlight-info">
                                <span className="highlight-number">20+</span>
                                <span className="highlight-label">Courses</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Animation */}
                <div className="about-visual">
                    <div className="visual-glow"></div>
                    <div className="about-lottie-container">
                        <Lottie
                            animationData={robotAnimation}
                            loop={true}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="visual-caption">
                        <span>Where Technology Meets Nature</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
