import type { MouseEvent } from 'react';
import './FeaturesSection.css';
import {
    FaRobot,
    FaGamepad,
    FaTrophy,
    FaHeart,
    FaGlobeAmericas,
    FaShieldAlt
} from 'react-icons/fa';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    emoji: string;
}

const features: Feature[] = [
    {
        icon: <FaRobot />,
        title: "Fun Robot Building!",
        description: "Build amazing robots step by step with easy-to-follow instructions!",
        emoji: "🤖"
    },
    {
        icon: <FaGamepad />,
        title: "Learn Through Games!",
        description: "Turn learning into playtime with exciting games and challenges!",
        emoji: "🎮"
    },
    {
        icon: <FaTrophy />,
        title: "Earn Cool Badges!",
        description: "Get awesome certificates and badges when you complete courses!",
        emoji: "🏆"
    },
    {
        icon: <FaHeart />,
        title: "Learn at Your Speed!",
        description: "Take your time and learn whenever you want - no pressure!",
        emoji: "❤️"
    },
    {
        icon: <FaGlobeAmericas />,
        title: "Make New Friends!",
        description: "Meet kids from all over the world who love robots too!",
        emoji: "🌎"
    },
    {
        icon: <FaShieldAlt />,
        title: "Super Safe!",
        description: "Your learning space is completely safe and protected!",
        emoji: "🛡️"
    }
];

function FeaturesSection() {
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="features-section">
            <div className="features-header">
                <h2 className="features-title">Our Exciting Courses</h2>
                <p className="features-subtitle">
                    Check out all the amazing robot adventures waiting for you!
                    Pick your favorite and start building!
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="feature-card"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="feature-icon-wrapper">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">
                            {feature.title}
                            <span className="feature-emoji">{feature.emoji}</span>
                        </h3>
                        <p className="feature-description">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;
