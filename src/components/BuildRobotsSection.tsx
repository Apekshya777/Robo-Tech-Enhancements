import './BuildRobotsSection.css';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import robotRiv from '../assets/images/cute-robot.riv';

const BuildRobotsSection = () => {
    const { rive, RiveComponent } = useRive({
        src: robotRiv,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        onLoad: () => {
            if (rive) {
                rive.play();
            }
        }
    });

    return (
        <section className="build-robots-section">
            <div className="build-robots-container">
                <div className="build-robots-content">
                    <div className="robot-animation">
                        <RiveComponent />
                    </div>
                    <div className="text-content">
                        <h2 className="flag-heading">Build Robots With Us</h2>
                    </div>
                    {/* Description will be added later as per user request */}
                    {/* <p className="build-robots-description">
                        Welcome to ROBO-TECH Learning Centre! Join us on an exciting adventure where 
                        learning robotics is fun, hands-on, and full of amazing discoveries. Build, 
                        code, and create with us!
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default BuildRobotsSection;
