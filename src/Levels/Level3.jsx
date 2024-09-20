import React, { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert'; // Importing the CustomAlert component
import { useNavigate } from "react-router-dom";


const Level3 = ({ setCompletedLevels }) => {
  const navigate = useNavigate();

  const handleCompleteLevel3 = () => {
    // Mark level 3 as completed
    const completedLevels = { level1: true, level2: true, level3: true, level4: false };
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    setCompletedLevels(completedLevels);

    // Navigate to level 3
    navigate("/level4");
  };

  const initialDeck = [
    { id: 1, text: 'Secure Respiratory and Airway' },
    { id: 2, text: 'Admission' },
    { id: 3, text: 'Start IVF with NS/5D' },
    { id: 4, text: 'Inj. TT' },
    { id: 5, text: 'Secure Airway' },
    { id: 6, text: 'Avoid I/V cannula insertion in case of Haemotoxic bite' },
    { id: 7, text: 'Avoid any IM or IV injections' },
    { id: 8, text: 'Start Antibiotics immediately' },
    { id: 9, text: 'Sedate with Diazepam' }
  ];

  // Correct sequence of cards
  const correctSequence = [
    { id: 1, text: 'Secure Respiratory and Airway' },
    { id: 2, text: 'Admission' },
    { id: 3, text: 'Start IVF with NS/5D' },
    { id: 4, text: 'Inj. TT' }
  ];

  const [deck, setDeck] = useState({});
  const [selectedCards1, setSelectedCards1] = useState({});
  const [selectedCards2, setSelectedCards2] = useState({});
  const [selectedCards3, setSelectedCards3] = useState({});
  const [selectedCards4, setSelectedCards4] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showWrongPopup, setShowWrongPopup] = useState(false);
  const [result, SetResult] = useState([]);

  // Shuffle the deck when the component mounts
  useEffect(() => {
    const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(shuffledDeck);
  }, []);

  useEffect(() => {
    if (
      selectedCards1.text !== undefined &&
      selectedCards2.text !== undefined &&
      selectedCards3.text !== undefined &&
      selectedCards4.text !== undefined
    ) {
      res();
    }
  }, [selectedCards1, selectedCards2, selectedCards3, selectedCards4]);

  // Shuffle function
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  function getRandomObject() {
    const randomIndex = Math.floor(Math.random() * initialDeck.length);
    return initialDeck[randomIndex];
  }

  const initialfun = () => {
    setDeck(getRandomObject());
  };

  const getText1 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      
      setSelectedCards1(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(deck, setSelectedCards2, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText2 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards2(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards1, deck, setSelectedCards3, setSelectedCards4);
    }
  };

  const getText3 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards3(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards1, setSelectedCards2, deck, setSelectedCards4);
    }
  };

  const getText4 = () => {
    if (deck.text === undefined) {
      alert("Please select the card from the deck");
    } else {
      setSelectedCards4(deck);
      SetResult((prevResult) => [...prevResult, deck]);
      initialfun();
      // handleBoxClick(setSelectedCards1, setSelectedCards2, setSelectedCards3);
    }
  };

  const res = () => {
    // console.log('sdsds');
    console.log(selectedCards1);
    console.log(selectedCards2);
    console.log(selectedCards3);
    console.log(selectedCards4);

    if (
      selectedCards1.id === correctSequence[0].id &&
      selectedCards2.id === correctSequence[1].id &&
      selectedCards3.id === correctSequence[2].id &&
      selectedCards4.id === correctSequence[3].id
    ) {
      // console.log('correct');
      setShowSuccessPopup(true);
    } else {
      // console.log("incorrect");
      setShowWrongPopup(true); // Show wrong popup
    }

    // if(result.length>=3){
    //   console.log(result);

    // }
  };

  const handleBoxClick = () => {
    if (selectedCards1 && selectedCards2 && selectedCards3 && selectedCards4) {
      const userSequence = [selectedCards1, selectedCards2, selectedCards3, selectedCards4];
      const correctSequenceIds = correctSequence.map((card) => card.id);
      const userSequenceIds = userSequence.map((card) => card.id);
      if (userSequenceIds.join(',') === correctSequenceIds.join(',')) {
        setShowSuccessPopup(true); // Show success popup
      } else {
        setShowWrongPopup(true); // Show wrong popup
      }
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    handleCompleteLevel3();
  };

  const resetGame = () => {
    // Reset the selected cards
    setSelectedCards1({});
    setSelectedCards2({});
    setSelectedCards3({});
    setSelectedCards4({});
    
    // Reshuffle the deck
    const reshuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(reshuffledDeck);
  };

  // const handleWrongClose = () => {
  //   // setShowWrongPopup(false);
  //   // Optional: Reset the selected cards here if necessary
  // };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-center text-2xl font-bold text-blue-400">
            Initial Management
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-4 sm:mt-7 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-40 h-48 sm:w-64 sm:h-80 flex justify-center items-center">
              <div
                className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 rounded-lg"
                style={{ top: "0px", left: "0px", zIndex: 0 }}
              ></div>
              <div
                className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 rounded-lg top-2 left-2 sm:top-4 sm:left-4"
                style={{ zIndex: 1 }}
              ></div>
              <div
                className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 rounded-lg top-4 left-4 sm:top-8 sm:left-8"
                style={{ zIndex: 2 }}
              ></div>
              <div
                className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 rounded-lg top-6 left-6 sm:top-12 sm:left-12"
                style={{ zIndex: 3 }}
              ></div>
              <div
                className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 rounded-lg top-8 left-8 sm:top-16 sm:left-16"
                style={{ zIndex: 4 }}
                onClick={initialfun}
              >
                <p className="text-xs sm:text-sm">{deck.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl mb-8">
          <div>
          <h2 className="text-center text-lg font-bold mb-4">Select Correct Cards</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div
              className="border-2 border-lime-400 w-40 h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText1}
            >
              <p className="text-xs sm:text-sm">{selectedCards1.text}</p>
            </div>
            <div
              className="border-2 border-lime-400 w-40 h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText2}
            >
              <p className="text-xs sm:text-sm">{selectedCards2.text}</p>
            </div>
          
          
            <div
              className="border-2 border-lime-400 w-40 h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText3}
            >
              <p className="text-xs sm:text-sm">{selectedCards3.text}</p>
            </div>
            <div
              className="border-2 border-lime-400 w-40 h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
              onClick={getText4}
            >
              <p className="text-xs sm:text-sm">{selectedCards4.text}</p>
            </div>
          </div>
        </div>

        {/* Success Popup for Correct Sequence */}
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Correct!</h2>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleSuccessClose}
              >
                Proceed to the next level
              </button>
            </div>
          </div>
        )}

        {/* Wrong Popup for Incorrect Sequence */}
        {showWrongPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
              <h2 className="text-2xl font-bold text-red-400 mb-4">Incorrect!</h2>
              <p className="mb-6">You have selected the wrong sequence.</p>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setShowWrongPopup(false);
                  resetGame();
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level3;
