import React from 'react'


function OpenScreen(props) {
const [userName, setUserName] = React.useState("")


  return (
    <div className="open-screen-content">
      <h1 className="header">Quizzical</h1>
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. Kenny"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      {/* on click: show questions screen */}
      <button
        className="start-btn"
        onClick={() => props.setShowQuestions(true)}
      >
        Start quiz
      </button>
    </div>
  );
}

export default OpenScreen;
