import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import PhotoWall from './PhotoWall';
import DynamicPenguinBackground from './DynamicPenguinBackground';
import PasscodeGate from './PasscodeGate';
import QuizGame from './QuizGame'; // Import QuizGame
import BackgroundMusic from './BackgroundMusic'; // Import BackgroundMusic
import './App.css';

// For the top section birthday image
// import birthdayThemeImage from './assets/birthday-theme.jpg'; // User needs to provide this

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // New state for navigation
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // State for music
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
    setIsMusicPlaying(true); // Start playing music on authentication
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (!isAuthenticated) {
    return (
      <>
        <DynamicPenguinBackground />
        <PasscodeGate onAuthenticate={handleAuthenticate} />
        <BackgroundMusic
          src="/Happy_Birthday_in_Toronto.mp3"
          isPlaying={isMusicPlaying}
          onTogglePlay={setIsMusicPlaying}
          visible={false} /* Hide button on passcode screen */
        />
      </>
    );
  }

  // After authentication, render a stable layout with persistent background and music player
  return (
    <>
      <DynamicPenguinBackground />
      <BackgroundMusic
        src="/Happy_Birthday_in_Toronto.mp3"
        isPlaying={isMusicPlaying}
        onTogglePlay={setIsMusicPlaying}
        visible={true} // Music button is visible after login
      />

      {/* Conditionally render the top part of the page */}
      {currentPage === 'home' ? (
        <section className="hero-section">
          <Confetti
            width={windowDimension.width}
            height={windowDimension.height}
            recycle={false}
            numberOfPieces={200}
            tweenDuration={10000}
          />
          <div className='main-container'>
            <div className="top-birthday-section">
              <h2 style={{ marginTop: '1rem', color: '#f0a04b' }}>生日快樂！</h2>
              <p style={{ color: '#555' }}>歡迎來到我們的家庭生日派對網站！</p>
              <button
                onClick={() => navigateTo('quiz')}
                style={{
                  backgroundColor: '#61dafb',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'background-color 0.3s ease',
                }}
              >
                開始企鵝小遊戲
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="quiz-section">
          <div className="main-container">
            <QuizGame onGoHome={() => navigateTo('home')} />
          </div>
        </section>
      )}

      {/* PhotoWall is now always visible after login */}
      <section className="photowall-section">
        <PhotoWall />
      </section>
    </>
  );
}

export default App;