import { useEffect } from "react";

const Moves3 = () => {
  const letters = document.getElementsByClassName("letter-button");
  const solutions = document.getElementsByClassName("solution-container");
  const button = document.getElementById("button");
  const handleClick = (currX, currY, targX, targY, index) => {
    console.log(currX, "<<<X IN HANDLE");
    letters[index].style.left = currX + "px";
    letters[index].style.top = currY + "px";
    requestAnimationFrame(() => {
      letters[index].style.left = targX + 5 + "px";
      letters[index].style.top = targY + 5 + "px";
    });
    console.log(letters[index].style, "<<<STYLE");
    console.log(letters[index].style.left, "<<<STYLE LEFT");
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
              const targX = solutions[0].offsetLeft;
              const targY = solutions[0].offsetTop;
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
              const targX = solutions[2].offsetLeft;
              const targY = solutions[2].offsetTop;
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
              const targX = solutions[1].offsetLeft;
              const targY = solutions[1].offsetTop;
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
export default Moves3;
