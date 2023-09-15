const Typewriter = () => {
  const myText = "Welcome to our page, I am typing";

  const myTextLength = myText.length;

  // https://css-tricks.com/snippets/css/typewriter-effect/#aa-more - worth checking for if the message varies in length

  return (
    <>
      <div className="typewriter-container">
        <p className="typewriter-text">{myText}</p>
      </div>
    </>
  );
};

export default Typewriter;
