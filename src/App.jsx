import React, { useState } from 'react';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Level4 from './Levels/Level4';
import Level5 from './Levels/Level5';
import Level6 from './Levels/Level6';
import Level7 from './Levels/Level7';
import Level8 from './Levels/Level8';
import Level9 from './Levels/Level9';
import Level10 from './Levels/Level10';
import Level11 from './Levels/Level11';
import Level12 from './Levels/Level12';
import Level13 from './Levels/Level13';
import Level14 from './Levels/Level14';
import Level15 from './Levels/Level15';
import Level16 from './Levels/Level16';
import CustomAlert from './Levels/CustomAlert';

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleAlertClose = () => setAlertMessage(null);

  const handleLevelChange = () => {
    setCurrentLevel(prevLevel => prevLevel + 1);
  };

  const handleAlert = (message) => {
    setAlertMessage(message);
  };

  return (
    <div className="App">
      {currentLevel === 1 && <Level1 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 2 && <Level2 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 3 && <Level3 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 4 && <Level4 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 5 && <Level5 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 6 && <Level6 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 7 && <Level7 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 8 && <Level8 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 9 && <Level9 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 10 && <Level10 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 11 && <Level11 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 12 && <Level12 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 13 && <Level13 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 14 && <Level14 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 15 && <Level15 onNext={handleLevelChange} onAlert={handleAlert} />}
      {currentLevel === 16 && <Level16 onNext={handleLevelChange} onAlert={handleAlert} />}
      {alertMessage && <CustomAlert message={alertMessage} onClose={handleAlertClose} />}
    </div>
  );
}

export default App;
