import React, { useState } from 'react';
import './PasscodeGate.css'; // We'll create this next

const PasscodeGate = ({ onAuthenticate }) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setPasscode(e.target.value);
    setError(false); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPasscode = process.env.REACT_APP_BIRTHDAY_PASSCODE;

    if (passcode === correctPasscode) {
      onAuthenticate(); // Call the parent's authentication function
    } else {
      setError(true);
    }
  };

  return (
    <div className="passcode-gate-container">
      <form onSubmit={handleSubmit} className="passcode-form">
        <h2>家庭專屬入口</h2>
        <p>請輸入密碼才能進入</p>
        <input
          type="password"
          value={passcode}
          onChange={handleInputChange}
          placeholder="輸入密碼"
          className={error ? 'error-input' : ''}
        />
        {error && <p className="error-message">密碼錯誤，請再試一次！</p>}
        <button type="submit">進入</button>
      </form>
    </div>
  );
};

export default PasscodeGate;
