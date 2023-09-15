import { useState } from "react";

const Moves = () => {
  const [oneToOne, setOneToOne] = useState(false);
  const [twoToThree, setTwoToThree] = useState(false);
  const [threeToTwo, setThreeToTwo] = useState(false);
  const moveToPosition = (position) => {
    if (position === 1) {
      setOneToOne(true);
    } else if (position === 2) {
      setTwoToThree(true);
    } else {
      setThreeToTwo(true);
    }
  };

  return (
    <>
      <div className="solution">
        <div className={`solution-letter position-1`}></div>
        <div className="solution-letter position-2"></div>
        <div className="solution-letter position-3"></div>
      </div>
      <div className="letter-options">
        <div className={`letter-option option-1`}>
          <button
            className={`${oneToOne ? "oneToOne" : ""}`}
            onClick={() => {
              moveToPosition(1);
            }}
          >
            C
          </button>
        </div>
        <div className="letter-option option-2">
          {" "}
          <button
            className={`${twoToThree ? "twoToThree" : ""}`}
            onClick={() => {
              moveToPosition(2);
            }}
          >
            T
          </button>
        </div>
        <div className="letter-option option-3">
          {" "}
          <button
            className={`${threeToTwo ? "threeToTwo" : ""}`}
            onClick={() => {
              moveToPosition(3);
            }}
          >
            A
          </button>
        </div>
      </div>
    </>
  );
};

export default Moves;
