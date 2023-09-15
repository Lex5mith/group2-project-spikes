import { useState } from "react";
import { useEffect } from "react";

//add functionality to swap letters (if it is colling with another letter on mouse release)
// try and add functionality for inserting into the space make the sapce in between a collision zone to check for the collision and move them into that order
//add some functionality for white spaces
// add different strings of length 3
// add different strings of different lengths
// hover over a tile and it gets bigger
// double clicking on an empty space in the top half would move everything over to the left
// clicking once on a letter in the top half sends it bakc down
// clear command
// event listener for typing
// if backspace on the keyboard remove the last one
// clicking a letter would activate it, then click a box for it to go into
// double clicking a letter would auto send it to the first white space

const Moves4 = () => {
  const [letterOptions, setLetterOptions] = useState([]);
  const [lettersClicked, setLettersClicked] = useState([]);
  const [solutionAttempt, setSolutionAttempt] = useState("");
  const [numberClicked, setNumberClicked] = useState(0);
  const anagram = "cta";
  const answer = "cat";
  useEffect(() => {
    setLetterOptions(anagram.split(""));
    setSolutionAttempt("");
  }, []);
  console.log(numberClicked);
  const letters = document.getElementsByClassName("letter-button");
  const solutions = document.getElementsByClassName("solution-container");
  const button = document.getElementById("button");
  const handleClick = (currX, currY, targX, targY, index) => {
    //need to check it is only on the first click that it increases the number clicked - or check the inputted letters length?
    console.log(solutionAttempt);
    setSolutionAttempt((currAttempt) => {
      return currAttempt + "H";
    });
    console.log(currX, "<<<X IN HANDLE");
    letters[index].style.left = currX + "px";
    letters[index].style.top = currY + "px";
    requestAnimationFrame(() => {
      letters[index].style.left = targX + 5 + "px";
      letters[index].style.top = targY + 5 + "px";
    });
    console.log(letters[numberClicked].style, "<<<STYLE");
    console.log(letters[numberClicked].style.left, "<<<STYLE LEFT");
  };

  return (
    <>
      <div className="solution">
        <div className="solution-container">
          {/* <div className="solutions solutions-0"></div> */}
        </div>
        <div className="solution-container">
          {/* <div className="solutions solutions-1"></div> */}
        </div>
        <div className="solution-container">
          {/* <div className="solutions solutions-2"></div> */}
        </div>
      </div>
      <div className="letter-options">
        <div className="letter-container">
          <button
            className="letter-button letter-button-0"
            onClick={(e) => {
              e.preventDefault();
              const currX = letters[0].offsetLeft;
              const currY = letters[0].offsetTop;
              const targX = solutions[solutionAttempt.length].offsetLeft;
              const targY = solutions[solutionAttempt.length].offsetTop;
              const index = 0;
              handleClick(currX, currY, targX, targY, index);
            }}
          >
            C
          </button>
        </div>
        <div className="letter-container">
          <button
            className="letter-button letter-button-1"
            onClick={(e) => {
              e.preventDefault();
              const currX = letters[1].offsetLeft;
              const currY = letters[1].offsetTop;
              const targX = solutions[solutionAttempt.length].offsetLeft;
              const targY = solutions[solutionAttempt.length].offsetTop;
              const index = 1;
              handleClick(currX, currY, targX, targY, index);
            }}
          >
            T
          </button>
        </div>
        <div className="letter-container">
          <button
            className="letter-button letter-button-2"
            onClick={(e) => {
              e.preventDefault();
              const currX = letters[2].offsetLeft;
              const currY = letters[2].offsetTop;
              const targX = solutions[solutionAttempt.length].offsetLeft;
              const targY = solutions[solutionAttempt.length].offsetTop;
              const index = 2;
              handleClick(currX, currY, targX, targY, index);
            }}
          >
            A
          </button>
        </div>
      </div>
    </>
  );
};
export default Moves4;
