import './MissionsSection.css';
import MissionCard from './MissionCard';

const missions = [
    {
        image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=300&fit=crop',
        badge: 'Free',
        category: 'Montserrat',
        title: 'Centrifuging Machine Mission',
        description: 'Dive into fun, gamified lessons and centrifuge with the kids ons and centrifuging machine mission.',
        tags: ['Class 6', 'Basic', 'Beginner'],
    },
    {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        badge: 'Free',
        category: 'Montserrat',
        title: 'Electric Diya Circuit Mission',
        description: 'Dive into fun, gamified lessons in robotics, coding, and ICT real projects, and diya lamps.',
        tags: ['Class 6', 'Basic', 'Beginner'],
    },
    {
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
        badge: 'Free',
        category: 'Robotics',
        title: 'Hydraulic Crane Challenge Mission',
        description: 'Build real kids projects for Hydraulic Crane challenge mission with kids sne crane.',
        tags: ['Class 6', 'Basic', 'Beginner'],
    },
    {
        image: 'https://images.unsplash.com/photo-1535378437337-5f1a2a78788f?w=400&h=300&fit=crop',
        badge: 'Premium',
        category: 'Robotics',
        title: 'Autonomous Rover Mission',
        description: 'Program a rover to navigate obstacles independently using sensors and basic AI logic.',
        tags: ['Class 8', 'Intermediate', 'Coding'],
    },
    {
        image: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=400&h=300&fit=crop',
        badge: 'Free',
        category: 'Automation',
        title: 'Robotic Arm Challenge',
        description: 'Construct and control a multi-axis robotic arm to perform precise pick-and-place tasks.',
        tags: ['Class 7', 'Mechanical', 'Hands-on'],
    },
    {
        image: 'https://images.unsplash.com/photo-1555664424-778a69f452d1?w=400&h=300&fit=crop',
        badge: 'New',
        category: 'Electronics',
        title: 'Smart Sensor Systems',
        description: 'Learn how sensors work by building a smart security system that detects motion and light.',
        tags: ['Class 9', 'IoT', 'Advanced'],
    },
];

const MissionsSection = () => {
    return (
        <section className="missions-section">
            <div className="missions-container">
                <h2 className="missions-title">Start Your Journey as a Young Innovator</h2>
                <div className="missions-grid">
                    {missions.map((mission, index) => (
                        <MissionCard key={index} {...mission} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionsSection;
