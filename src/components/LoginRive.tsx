import { useRive, Layout, Fit, Alignment, StateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect, useRef } from 'react';
import riveSource from '../assets/images/2244-7248-animated-login-character.riv';
import './LoginRive.css';

export default function LoginRive() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Refs to hold the dynamically found inputs
    const lookInput = useRef<StateMachineInput | null>(null);
    const checkInput = useRef<StateMachineInput | null>(null);
    const handsUpInput = useRef<StateMachineInput | null>(null);
    const successInput = useRef<StateMachineInput | null>(null);
    const failInput = useRef<StateMachineInput | null>(null);

    const { rive, RiveComponent } = useRive({
        src: riveSource,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.BottomCenter,
        }),
        autoplay: true,
    });

    useEffect(() => {
        if (rive) {
            // 1. Find the first valid State Machine
            const stateMachineName = rive.stateMachineNames[0];
            if (!stateMachineName) {
                console.error("No state machine found in Rive file.");
                return;
            }

            console.log(`Detected State Machine: ${stateMachineName} `);

            // 2. Play the detected state machine
            rive.play(stateMachineName);

            // 3. Get all inputs for this machine
            const inputs = rive.stateMachineInputs(stateMachineName);
            console.log("Available Inputs:", inputs.map(i => i.name));

            // 4. Fuzzy match inputs to our logic (Case Insensitive)
            // We look for keywords like "Look", "Check", "Hand", "Success", "Fail"
            lookInput.current = inputs.find(i => i.name.toLowerCase().includes('look')) || null;
            checkInput.current = inputs.find(i => i.name.toLowerCase().includes('check')) || null;
            handsUpInput.current = inputs.find(i => i.name.toLowerCase().includes('hand')) || null;
            successInput.current = inputs.find(i => i.name.toLowerCase().includes('success') || i.name.toLowerCase().includes('trigsuccess')) || null;
            failInput.current = inputs.find(i => i.name.toLowerCase().includes('fail') || i.name.toLowerCase().includes('trigfail')) || null;

            console.log("Mapped Inputs:", {
                Look: lookInput.current?.name,
                Check: checkInput.current?.name,
                HandsUp: handsUpInput.current?.name,
                Success: successInput.current?.name,
                Fail: failInput.current?.name,
            });
        }
    }, [rive]);

    const handleEmailFocus = () => {
        if (checkInput.current) checkInput.current.value = true;
        if (handsUpInput.current) handsUpInput.current.value = false;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        if (lookInput.current) {
            // Assuming look input is 0-100 or similar number
            lookInput.current.value = Math.min(val.length * 5, 100);
        }
    };

    const handleEmailBlur = () => {
        if (checkInput.current) checkInput.current.value = false;
    };

    const handlePasswordFocus = () => {
        if (handsUpInput.current) handsUpInput.current.value = true;
        if (checkInput.current) checkInput.current.value = false;
    };

    const handlePasswordBlur = () => {
        if (handsUpInput.current) handsUpInput.current.value = false;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = email.includes('@') && password.length > 5;

        // Reset any previous triggers (optional, triggers usually reset themselves)
        // Fire appropriate trigger
        if (isValid) {
            if (successInput.current) successInput.current.fire();
        } else {
            if (failInput.current) failInput.current.fire();
        }
    };

    return (
        <div className="login-container">
            {/* Left Side: Login Form */}
            <div className="login-left-section">
                <div className="login-content-wrapper">
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="login-header">
                            <h2>WELCOME</h2>
                            <p>Enter your credentials to access the system</p>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="name@example.com"
                                    value={email}
                                    onFocus={handleEmailFocus}
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-wrapper">
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={handlePasswordFocus}
                                    onBlur={handlePasswordBlur}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            Access System
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side: Rive Animation */}
            <div className="login-right-section">
                <div className="rive-wrapper">
                    <div className="rive-overlay"></div>
                    <RiveComponent className="rive-canvas" />
                </div>
            </div>
        </div>
    );
}
