import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
    const [displayText, setDisplayText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    // Define stages with text and delays
    const stages = [
        { text: 'READ', delay: 0 },
        { text: 'LEARN', delay: 2000 }, // 2s delay after READ
        { text: 'GROW', delay: 2000 }, // 2s delay after LEARN
    ];

    const typingSpeed = 100; // Speed of typing (ms per character)
    const backspacingSpeed = 50; // Speed of backspacing (ms per character)
    const pauseDuration = 500; // Pause duration between stages (ms)

    useEffect(() => {
        const handleTyping = async () => {
            for (let i = 0; i < stages.length; i++) {
                const { text } = stages[i];
                await typeText(text);
                await backspaceText(text);
            }
            await typeText('READ LEARN GROW');
        };

        handleTyping();
    }, []);

    const typeText = async (text) => {
        for (let i = 0; i <= text.length; i++) {
            setDisplayText(text.substring(0, i));
            await sleep(typingSpeed);
        }
        await sleep(pauseDuration);
    };

    const backspaceText = async (text) => {
        for (let i = text.length; i >= 0; i--) {
            setDisplayText(text.substring(0, i));
            await sleep(backspacingSpeed);
        }
    };

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500); // Adjust blinking speed (milliseconds)

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <>
            <div className="typewriter-container">
                <h2 className="typewriter-text">
                    {displayText}
                    <span className={`cursor ${cursorVisible ? 'visible' : 'hidden'}`}></span>
                </h2>
            </div>
            <button className="btn btn-primary mt-3">Read</button>
        </>
    );
};

export default TypewriterEffect;
