import React, { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert'; // Importing the CustomAlert component

const Level1 = ({ onNext }) => {
  const initialData = new Map([
    ['one', 'Reassure'],
    ['two', "Apply tourniquets"],
    ['three', "Apply Pressure Immobilisation Method"],
    ['four', "Immobilize like a fractured limb"],
    ['five', "Do suction at wound site"],
    ['six', "Apply turmeric/antiseptic ointment to local wound"],
    ['seven', "Make an incision at the bite site"],
    ['eight', "Traditional healers can be consulted because they are locally accessible"],
    ['nine', "Go directly to a large hospital"],
    ['ten', "Go to nearest hospital"],
    ['eleven', "Tell the doctor of any emergent sign"],
    ['twelve', "Try to capture the snake or take a picture of the snake"]
  ]);

  const correctSequence = ['one', 'four', 'ten', 'eleven'];
  const [data, setData] = useState(initialData);
  const [result, setResult] = useState([]);
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup

  useEffect(() => {
    const keysArray = shuffle(Array.from(data.keys()));
    setCards(keysArray);
  }, [data]);

  useEffect(() => {
    if (result.length === 4) {
      checkSequence(result);
    }
  }, [result]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const checkSequence = (selectedSequence) => {
    if (JSON.stringify(selectedSequence) === JSON.stringify(correctSequence)) {
      setShowSuccessPopup(true); // Show the success popup
    } else {
      setModalContent('Sorry, the sequence is incorrect. Please try again.');
      setShowModal(true);
    }
  };

  const handleCardClick = (key) => {
    if (result.includes(key)) {
      setAlertVisible(true);
      return;
    }
    if (result.length < 4) {
      setResult([...result, key]);
      const newData = new Map(data);
      newData.set(key, ''); // Empty the content of the clicked card
      setData(newData);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setResult([]); // Clear result for next attempt
    setData(initialData); // Reset data
    const keysArray = shuffle(Array.from(initialData.keys()));
    setCards(keysArray);
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    onNext(); // Proceed to the next level
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-center text-lg font-semibold mb-4">
        Select the correct cards and place them in the correct sequence
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {cards.map((item) => (
          <div
            key={item}
            className="relative w-40 h-48 flex justify-center items-center border border-gray-800 rounded-lg bg-blue-200 cursor-pointer"
            onClick={() => handleCardClick(item)}
          >
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="text-center text-s">{data.get(item)}</span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center text-lg font-semibold mb-4">
        Your selection and sequence
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {/* Creating four empty boxes to hold selected cards */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative w-40 h-48 flex justify-center items-center border border-gray-800 rounded-lg bg-gray-100 cursor-pointer"
          >
            {/* Display selected card content if available */}
            {result[index] ? (
              <span className="text-center text-s">{initialData.get(result[index])}</span>
            ) : (
              <span className="text-gray-400"></span>
            )}
          </div>
        ))}
      </div>

      {alertVisible && (
        <CustomAlert
          visible={alertVisible}
          message="Same card not allowed."
          onClose={() => setAlertVisible(false)}
        />
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm">
            <div className="border-b p-4">
              <h2 className="text-lg font-semibold">Result</h2>
              <button
                onClick={handleModalClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>
            <div className="p-4">{modalContent}</div>
            <div className="border-t p-4 text-right">
              <button
                onClick={handleModalClose}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup for Correct Sequence */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
            <h2 className="text-lg font-semibold text-green-600 mb-4">
              Congratulations, correct sequence!
            </h2>
            <p className="text-green-600">
              Go to the next level.
            </p>
            <button
              onClick={handleSuccessClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level1;
