import './Hero.css';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import robotRiv from '../assets/images/16660-31346-robot.riv';

const Hero = () => {
    const { rive, RiveComponent } = useRive({
        src: robotRiv,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        onLoad: () => {
            // Log available animations and state machines for debugging
            if (rive) {
                console.log('Rive contents:', rive.contents);
                // Play all animations
                rive.play();
            }
        }
    });

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-subtitle">Welcome to Robotech Learning Center</p>
                    <h1 className="hero-title">
                        Where Young Minds<br />
                        Become Future Innovators
                    </h1>
                    <p className="hero-description">
                        Dive into fun, gamified lessons in robotics, coding, and ICT.
                        Build real projects, solve challenges, and level up your skills one
                        mission at a time.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">
                            Start Learning <span>→</span>
                        </button>
                        <button className="btn btn-outline">
                            Explore Courses <span>→</span>
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-rive-container">
                        <RiveComponent />
                    </div>
                </div>
            </div>

            {/* Wave Curve SVG */}
            <div className="hero-wave">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,80 C360,150 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,150 L0,150 Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;

