import React, { useState, useEffect } from 'react';
import CustomAlert from './CustomAlert'; // Importing the CustomAlert component

const Level2 = ({ onNext }) => {
    const [his, setHis] = useState({});
    const [exam, setExam] = useState({});
    const [hisTrigger, setHisTrigger] = useState(0);
    const [examTrigger, setExamTrigger] = useState(0);
    const [box1, setBox1] = useState({});
    const [box2, setBox2] = useState({});
    const [box3, setBox3] = useState({});
    const [box4, setBox4] = useState({});
    const [selectedseq, setSelectedseq] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup
    const [alertwrongVisible, setalertwrongVisible] = useState(false);
    const [sc, setsc] = useState(0);
    const [alertMessage, setAlertMessage] = useState("");
    const [abc, setAbc] = useState(false);

    const initialHistoryDeck = [
      {
        id: 1,
        text: "Painful Progressive Swelling",
        code: "H",
        type: "history",
      },
      {
        id: 2,
        text: "Continuous bleeding from bite site",
        code: "H",
        type: "history",
      },
      {
        id: 3,
        text: "Bleeding from the gum and other orifices",
        code: "H",
        type: "history",
      },
      { id: 4, text: "Epistaxis", code: "H", type: "history" },
      { id: 5, text: "Vomiting", code: "H", type: "history" },
      { id: 6, text: "Haematemesis", code: "H", type: "history" },
      { id: 7, text: "Haemoptysis", code: "H", type: "history" },
      { id: 8, text: "Acute abdominal Pain", code: "H", type: "history" },
      { id: 9, text: "Bleeding per rectum", code: "H", type: "history" },
      { id: 10, text: "Low back pain", code: "H", type: "history" },
      { id: 11, text: "Declining urine output", code: "H", type: "history" },
      {
        id: 12,
        text: "Difficulty in focusing with eyelids feeling heavy",
        code: "N",
        type: "history",
      },
      { id: 13, text: "Diplopia", code: "N", type: "history" },
      {
        id: 14,
        text: "Progressive swelling and local pain",
        code: "N",
        type: "history",
      },
      {
        id: 15,
        text: "Numbness around lips and mouth",
        code: "N",
        type: "history",
      },
      {
        id: 16,
        text: "Paralysis noted early in the morning",
        code: "N",
        type: "history",
      },
      { id: 17, text: "Dyspnea", code: "N", type: "history" },
      { id: 18, text: "Dysphonia", code: "N", type: "history" },
      { id: 19, text: "Dysphagia", code: "N", type: "history" },
      {
        id: 20,
        text: "Acute pain abdomen starting from early in the morning",
        code: "N",
        type: "history",
      },
      {
        id: 21,
        text: "Unexplained throat/chest/joint pain",
        code: "N",
        type: "history",
      },
    ];

    const initialExaminationDeck = [
      {
        id: 22,
        text: "Distinct bite mark with local swelling",
        code: "X",
        type: "exam",
      },
      {
        id: 23,
        text: "Local necrosis with rancid smell in a swollen limb with taught and shiny skin and skip lesions",
        code: "H",
        type: "exam",
      },
      {
        id: 24,
        text: "Significant Painful swelling involving the whole limb and extending onto the trunk",
        code: "H",
        type: "exam",
      },
      { id: 25, text: "Compartment Syndrome", code: "H", type: "exam" },
      {
        id: 26,
        text: "Tender enlargement of local lymph nodes",
        code: "H",
        type: "exam",
      },
      { id: 27, text: "Hypotension", code: "H", type: "exam" },
      {
        id: 28,
        text: "Petechiae, purpura and ecchymosis",
        code: "H",
        type: "exam",
      },
      { id: 29, text: "Asymmetrical pupil", code: "H", type: "exam" },
      {
        id: 30,
        text: "Parotid swelling, conjunctival edema, sub-conjunctival haemorrhage",
        code: "H",
        type: "exam",
      },
      { id: 31, text: "Ptosis", code: "N", type: "exam" },
      { id: 32, text: "Ophthalmoplegia", code: "N", type: "exam" },
      {
        id: 33,
        text: "Local necrosis and/or blistering",
        code: "N",
        type: "exam",
      },
      {
        id: 34,
        text: "Inability to swallow and aspiration of pooled secretions",
        code: "N",
        type: "exam",
      },
      {
        id: 35,
        text: "Cyanosis and altered sensorium",
        code: "N",
        type: "exam",
      },
      { id: 36, text: "Paradoxical respiration", code: "N", type: "exam" },
      { id: 37, text: "Dysarthria", code: "N", type: "exam" },
      {
        id: 38,
        text: "Ascending paralysis starting from early morning",
        code: "N",
        type: "exam",
      },
      {
        id: 39,
        text: "Unexplained respiratory distress in children in the presence of ptosis",
        code: "N",
        type: "exam",
      },
      {
        id: 40,
        text: "Sudden onset of Acute Flaccid Paralysis in a child",
        code: "N",
        type: "exam",
      },
      {
        id: 41,
        text: "Unexplained respiratory distress in children",
        code: "N",
        type: "exam",
      },
    ];
    function getRandomhistoryObject() {
      const randomIndex = Math.floor(Math.random() * initialHistoryDeck.length);
      return initialHistoryDeck[randomIndex];
    }

    const historyfun = () => {
      setExamTrigger(0);
      setHisTrigger(1);
      let temp = getRandomhistoryObject();

      setHis(getRandomhistoryObject());
    };
    
    function getRandomexamObject() {
      const randomIndex = Math.floor(
        Math.random() * initialExaminationDeck.length
      );
      return initialExaminationDeck[randomIndex];
    }
    const examfun = () => {
      setExamTrigger(1);
      setHisTrigger(0);
      setExam(getRandomexamObject());
    };
    const res1 = () => {
      if (
        (his && Object.keys(his).length > 0) ||
        (exam && Object.keys(exam).length > 0)
      ) {
        let a = 0;
        if (hisTrigger) {
          if (conditionforhis(his)) {
            setAbc(true);

            return;
          }
          setBox1(his);
          historyfun();
          a = 1;
        } else {
          if (conditionforexam(exam)) {
            setAbc(true);
            return;
          }
          setBox1(exam);
          a = 2;
        }
        setsc(sc + 1);
        if (sc >= 3) {
          if (a == 1) {
            checkrules(his, box2, box3, box4);
          } else {
            checkrules(exam, box2, box3, box4);
          }
        }
      }
    };
    const res2 = () => {
      if (
        (his && Object.keys(his).length > 0) ||
        (exam && Object.keys(exam).length > 0)
      ) {
        let a = 0;
        if (hisTrigger) {
          if (conditionforhis(his)) {
            setAbc(true);
            return;
          }
          setBox2(his);
          historyfun();
          a = 1;
        } else {
          if (conditionforexam(exam)) {
            setAbc(true);
            return;
          }
          setBox2(exam);
          a = 2;
        }
        setsc(sc + 1);
        if (sc >= 3) {
          if (a == 1) {
            checkrules(box1, his, box3, box4);
          } else {
            checkrules(box1, exam, box3, box4);
          }
        }
      }
    };
    const res3 = () => {
      if (
        (his && Object.keys(his).length > 0) ||
        (exam && Object.keys(exam).length > 0)
      ) {
        let a = 0;
        if (hisTrigger) {
          if (conditionforhis(his)) {
            setAbc(true);
            return;
          }
          setBox3(his);
          historyfun();
          a = 1;
        } else {
          if (conditionforexam(exam)) {
            setAbc(true);
            return;
          }
          setBox3(exam);
          a = 2;
        }
        setsc(sc + 1);
        if (sc >= 3) {
          if (a == 1) {
            checkrules(box1, box2, his, box4);
          } else {
            checkrules(box1, box2, exam, box4);
          }
        }
      }
    };
    const res4 = () => {
      if (
        (his && Object.keys(his).length > 0) ||
        (exam && Object.keys(exam).length > 0)
      ) {
        let a = 0;
        if (hisTrigger) {
          if (conditionforhis(his)) {
            setAbc(true);
            return;
          }
          setBox4(his);
          historyfun();
          a = 1;
        } else {
          if (conditionforexam(exam)) {
            setAbc(true);
            return;
          }
          setBox4(exam);
          a = 2;
        }
        setsc(sc + 1);
        if (sc >= 3) {
          if (a == 1) {
            checkrules(box1, box2, box3, his);
          } else {
            checkrules(box1, box2, box3, exam);
          }
        }
      }
    };
    const checkrules = (box1, box2, box3, box4) => {
      if (sc >= 3) {
        // console.log('ggg');
        if (
          box1.type == "history" &&
          box2.type == "history" &&
          box3.type == "history" &&
          box4.type == "history"
        ) {
          // console.log('fdff');
          setAbc(true);
          return;
        } else if (
          box1.type == "exam" &&
          box2.type == "exam" &&
          box3.type == "exam" &&
          box4.type == "exam"
        ) {
          setAbc(true);
        } else {
          if (
            box1?.code == "H" &&
            box2?.code == "H" &&
            box3?.code == "H" &&
            box4?.code == "H"
          ) {
            selectedCode = "H"; // Set code H
            setAlertVisible(true);
            setShowSuccessPopup(true);
          } else if (
            box1?.code == "N" &&
            box2?.code == "N" &&
            box3?.code == "N" &&
            box4?.code == "N"
          ) {
            selectedCode = "N"; // Set code N
            setAlertVisible(true);
            setShowSuccessPopup(true);
          }
          else if (
            box1?.code === "X" &&
             box2?.code === "X" &&
              box3?.code === "X" &&
               box4?.code === "X"
              ) {
            selectedCode = "X"; // Set code X
            setAlertVisible(true);
            setShowSuccessPopup(true);
          }
    
          if (selectedCode) {
            setAlertVisible(true);
            setShowSuccessPopup(true);
    
            // Call the onNext function and pass the selected code
            if (onNext) {
              onNext(selectedCode); // Send the selected code to the next level
            }
          }
          else {
            setalertwrongVisible(true);
          }
        }
      }
    };
    const conditionforhis = (curr) => {
      //console.log(curr);
      if (
        box1?.type == "history" &&
        box2?.type == "history" &&
        box3?.type == "history" &&
        curr?.type == "history"
      ) {
        return true;
      } else if (
        box1?.type == "history" &&
        box2?.type == "history" &&
        box4?.type == "history" &&
        curr?.type == "history"
      ) {
        return true;
      } else if (
        box1?.type == "history" &&
        box3?.type == "history" &&
        box4?.type == "history" &&
        curr?.type == "history"
      ) {
        return true;
      } else if (
        box3?.type == "history" &&
        box2?.type == "history" &&
        box4?.type == "history" &&
        curr?.type == "history"
      ) {
        return true;
      } else {
        return false;
      }
    };
    const conditionforexam = (curr) => {
      // console.log(curr);
      if (
        box1?.type == "exam" &&
        box2?.type == "exam" &&
        box3?.type == "exam" &&
        curr.type == "exam"
      ) {
        return true;
      } else if (
        box1?.type == "exam" &&
        box2?.type == "exam" &&
        box4?.type == "exam" &&
        curr.type == "exam"
      ) {
        return true;
      } else if (
        box1?.type == "exam" &&
        box3?.type == "exam" &&
        box4?.type == "exam" &&
        curr.type == "exam"
      ) {
        return true;
      } else if (
        box3?.type == "exam" &&
        box2?.type == "exam" &&
        box4?.type == "exam" &&
        curr.type == "exam"
      ) {
        return true;
      } else {
        return false;
      }
    };
    const closeAlert = () => {
      setAlertMessage("");
    };

    const handleSuccessClose = () => {
      setShowSuccessPopup(false);
      onNext(); // Proceed to the next level
    };

    return (
      <>
        <div>
          {/* <CustomAlert message={alertMessage} onClose={closeAlert} /> */}
          <div className="flex flex-col items-center">
            <div>
              <h2 className="text-center text-base sm:text-lg md:text-xl">
                Select the correct cards and place them in the correct sequence
              </h2>
              <div className="flex flex-wrap justify-center items-center mt-4 sm:mt-7 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative w-40 h-48 sm:w-64 sm:h-80 flex justify-center items-center">
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500"
                    style={{ top: "0px", left: "0px", zIndex: 0 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-2 left-2 sm:top-4 sm:left-4"
                    style={{ zIndex: 1 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-4 left-4 sm:top-8 sm:left-8"
                    style={{ zIndex: 2 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-6 left-6 sm:top-12 sm:left-12"
                    style={{ zIndex: 3 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-8 left-8 sm:top-16 sm:left-16"
                    style={{ zIndex: 4 }}
                    onClick={historyfun}
                  >
                    <p className="text-xs sm:text-sm">{his.text}</p>
                  </div>
                </div>
                <div className="relative w-40 h-48 sm:w-64 sm:h-80 flex justify-center items-center">
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500"
                    style={{ top: "0px", left: "0px", zIndex: 0 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-2 left-2 sm:top-4 sm:left-4"
                    style={{ zIndex: 1 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-4 left-4 sm:top-8 sm:left-8"
                    style={{ zIndex: 2 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-6 left-6 sm:top-12 sm:left-12"
                    style={{ zIndex: 3 }}
                  ></div>
                  <div
                    className="absolute w-24 h-28 sm:w-40 sm:h-48 bg-blue-200 border border-blue-500 top-8 left-8 sm:top-16 sm:left-16"
                    style={{ zIndex: 4 }}
                    onClick={examfun}
                  >
                    <p className="text-xs sm:text-sm">{exam.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xl sm:text-2xl">
            <div>
              <h2 className="text-center text-base sm:text-lg md:text-xl">
                Choose the correct sequence
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mt-4 sm:mt-8">
              <div
                className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40"
                onClick={res1}
              >
                <p className="text-xs sm:text-sm">{box1.text}</p>
              </div>
              <div
                className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40"
                onClick={res2}
              >
                <p className="text-xs sm:text-sm">{box2.text}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-12 mt-4 sm:mt-8">
              <div
                className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40"
                onClick={res3}
              >
                <p className="text-xs sm:text-sm">{box3.text}</p>
              </div>
              <div
                className="border-2 border-lime-400 w-40 h-24 sm:w-64 sm:h-40"
                onClick={res4}
              >
                <p className="text-xs sm:text-sm">{box4.text}</p>
              </div>
            </div>
          </div>

          {/* Success Popup for Correct Sequence */}
          {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
                <h2 className="text-lg font-semibold text-green-600 mb-4">
                  Congratulations, correct sequence!
                </h2>
                <p className="text-green-600">Go to the next level.</p>
                <button
                  onClick={handleSuccessClose}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Continue
                </button>
              </div>
            </div>
          )}
          {alertwrongVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-red-600">Wrong!</h2>
                <p className="text-lg">You have selected the Wrong sequence!</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => {
                    setAlertVisible(false);
                    setShowSuccessPopup(false);
                    window.location.reload();
                  }}
                >
                  play again
                </button>
              </div>
            </div>
          )}
          {abc && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4 text-red-600">alert</h2>
                <p className="text-lg">maximum 3 card can seleted</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => {
                    setAbc(false);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}
        </div>
      </>
    );
};

export default Level2;
