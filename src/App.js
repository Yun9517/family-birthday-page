import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import PhotoWall from './PhotoWall';
import DynamicPenguinBackground from './DynamicPenguinBackground';
import PasscodeGate from './PasscodeGate';
import QuizGame from './QuizGame'; // Import QuizGame
import './App.css';

// For the top section birthday image
// import birthdayThemeImage from './assets/birthday-theme.jpg'; // User needs to provide this

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // New state for navigation
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
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (!isAuthenticated) {
    return (
      <>
        <DynamicPenguinBackground />
        <PasscodeGate onAuthenticate={handleAuthenticate} />
      </>
    );
  }

  // Render QuizGame if currentPage is 'quiz'
  if (currentPage === 'quiz') {
    return (
      <>
        <DynamicPenguinBackground />
        <QuizGame onGoHome={() => navigateTo('home')} />
      </>
    );
  }

  // Render Home Page
  return (
    <>
      <DynamicPenguinBackground />
      <main>
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          tweenDuration={10000}
        />
        <section className='main-container'>
          {/* Top Section: Birthday Themed Image */}
          <div className="top-birthday-section">
            {/* User needs to place a birthday-themed image in src/assets/birthday-theme.jpg */}
            {/* For now, using a placeholder or a simple message */}
            <img
              src="https://via.placeholder.com/500x200?text=Your+Birthday+Theme+Image"
              alt="Birthday Theme"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
            />
            {/* Or if using background image: */}
            {/* <div className="birthday-theme-background"></div> */}
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

          <hr style={{ margin: '2rem 0', borderColor: '#eee' }} />

          {/* Second Section: Photo Wall */}
          <PhotoWall />
        </section>
      </main>
    </>
  );
}

export default App;