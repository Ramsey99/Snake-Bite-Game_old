// PNIa(13) -> Submit

import React, { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert'; // Importing the CustomAlert component

const Level13 = ({ onNext }) => {
  const initialDeck = new Map([
    ['one', 'Discharge only when no neuro-deficit present'],
    ['two', 'Discharge after 6 hours'],
    ['three', 'Discharge after 24 hours irrespective of improvement'],
    ['four', 'Transfer to referral hospital']
  ]);

  const correctSequence = ['one']; // Correct sequence for Level 7
  const [deck, setDeck] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedCard, setSelectedCard] = useState({}); // Change to 1 slot instead of 3
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [alertWrongVisible, setAlertWrongVisible] = useState(false);

  // Shuffle the deck when the component mounts
  useEffect(() => {
    const shuffledDeck = shuffle(Array.from(initialDeck.entries()));
    setDeck(shuffledDeck);
  }, []);

  // Shuffle function
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Check if the selected sequence is correct
  const checkSequence = (selectedSequence) => {
    if (JSON.stringify(selectedSequence) === JSON.stringify(correctSequence)) {
      setShowSuccessPopup(true);
    } else {
      setAlertWrongVisible(true);
    }
  };

  // Handle card selection
  const handleCardClick = (card) => {
    if (result.length >= 1 || result.includes(card[0])) return; // Prevent selecting more than 1 card or the same card twice

    const updatedResult = [card[0]];
    setResult(updatedResult);

    setSelectedCard({ text: card[1], key: card[0] }); // Store the selected card

    // Move selected card out and shuffle remaining cards
    const newDeck = deck.filter((c) => c[0] !== card[0]);
    setDeck(shuffle(newDeck));

    checkSequence(updatedResult);
  };

  // Reset game after incorrect attempt
  const resetGame = () => {
    setResult([]);
    setSelectedCard({}); // Reset to 1 empty slot
    setDeck(shuffle(Array.from(initialDeck.entries())));
  };

  // Handle success popup close and proceed to next level
  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    onNext(); // Proceed to the next level
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-center text-2xl font-bold text-blue-400">
            Improving:
          </h2>
          <h2 className="text-center text-lg font-bold mb-4">
            Select the correct card and place it in the correct sequence
          </h2>
          <div className="flex flex-wrap justify-center items-center mt-4 sm:mt-7 space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Display cards from the deck */}
            {deck.map((card, index) => (
              <div
                key={index}
                className="relative w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 m-2 flex items-center justify-center cursor-pointer"
                onClick={() => handleCardClick(card)}
              >
                <p className="text-sm font-semibold text-gray-800">{card[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Sequence Display */}
      <div className="text-xl mb-8">
        <h2 className="text-center text-lg font-bold mb-4">Selected Card</h2>
        <div className="flex justify-center">
          <div
            className="border-2 border-lime-400 w-40 h-24 flex items-center justify-center bg-gray-100 rounded-lg shadow-md text-gray-700 transition-transform transform hover:scale-105"
          >
            <p className="text-sm">{selectedCard.text}</p>
          </div>
        </div>
      </div>

      {/* Success Popup for Correct Sequence */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-4">Congratulations, correct sequence!</h2>
            <p className="text-green-600">Proceed to the next level.</p>
            <button
              onClick={handleSuccessClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Wrong Alert */}
      {alertWrongVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-red-600">Wrong!</h2>
            <p className="text-lg text-gray-700">You have selected the wrong card!</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => {
                setAlertWrongVisible(false);
                resetGame();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Level13;
