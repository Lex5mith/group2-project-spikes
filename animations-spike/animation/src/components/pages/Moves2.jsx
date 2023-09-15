const Moves2 = () => {
  // The JavaScript (should work in all major browsers and IE8+)

  var elements = document.getElementsByClassName("element");
  var target = document.getElementsByClassName("target")[0];
  var button = document.getElementsByClassName("button");

  // store the x,y coordinates of the target
  console.log(target);
  var xT = target.offsetLeft;
  var yT = target.offsetTop;

  console.log(button, "<<BUTTON");

  // add a click event listener to the button
  //   button.addEventListener("click", function () {
  //     for (var i = 0; i < elements.length; i++) {
  //       // store the elements coordinate
  //       var xE = elements[i].offsetLeft;
  //       var yE = elements[i].offsetTop;
  //       // set elements position to their position for smooth animation
  //       elements[i].style.left = xE + "px";
  //       elements[i].style.top = yE + "px";
  //       // set their position to the target position
  //       // the animation is a simple css transition
  //       elements[i].style.left = xT + "px";
  //       elements[i].style.top = yT + "px";
  //     }
  //   });

  return (
    <div>
      <button
        className="button"
        role="button"
        onClick={(e) => {
          e.preventDefault();
          for (var i = 0; i < elements.length; i++) {
            // store the elements coordinate
            var xE = elements[i].offsetLeft;
            var yE = elements[i].offsetTop;
            // set elements position to their position for smooth animation
            elements[i].style.left = xE + "px";
            elements[i].style.top = yE + "px";
            // set their position to the target position
            // the animation is a simple css transition
            elements[i].style.left = xT + "px";
            elements[i].style.top = yT + "px";
          }
        }}
      >
        Move!
      </button>

      <div className="element"></div>
      <div className="element"></div>
      <div className="element"></div>
      <div className="element"></div>
      <div className="element"></div>

      <div className="target"></div>
    </div>
  );
};

export default Moves2;
