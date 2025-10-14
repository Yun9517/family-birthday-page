import React, { useState, useEffect } from 'react';
import './DynamicPenguinBackground.css'; // For animations

const Penguin = ({ style }) => (
  <svg
    className="penguin"
    style={style}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Body */}
    <circle cx="50" cy="60" r="40" fill="#333" />
    {/* Belly */}
    <ellipse cx="50" cy="65" rx="25" ry="30" fill="white" />
    {/* Head */}
    <circle cx="50" cy="35" r="25" fill="#333" />
    {/* Eyes */}
    <circle cx="40" cy="30" r="5" fill="white" />
    <circle cx="60" cy="30" r="5" fill="white" />
    <circle cx="40" cy="30" r="2" fill="black" />
    <circle cx="60" cy="30" r="2" fill="black" />
    {/* Beak */}
    <polygon points="50,40 45,45 55,45" fill="orange" />
    {/* Wings (simplified) */}
    <ellipse cx="25" cy="60" rx="10" ry="25" fill="#333" transform="rotate(-20 25 60)" />
    <ellipse cx="75" cy="60" rx="10" ry="25" fill="#333" transform="rotate(20 75 60)" />
  </svg>
);

const PENGUIN_COUNT = 10; // Number of penguins to generate

const DynamicPenguinBackground = () => {
  const [penguins, setPenguins] = useState([]);

  useEffect(() => {
    const generatedPenguins = Array.from({ length: PENGUIN_COUNT }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      size: `${Math.random() * (100 - 50) + 50}px`, // Size between 50px and 100px
      animationDelay: `${Math.random() * 10}s`, // Delay up to 10 seconds
      animationDuration: `${Math.random() * (15 - 8) + 8}s`, // Duration between 8s and 15s
    }));
    setPenguins(generatedPenguins);
  }, []);

  return (
    <div className="dynamic-penguin-background">
      {penguins.map((p) => (
        <Penguin
          key={p.id}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicPenguinBackground;

