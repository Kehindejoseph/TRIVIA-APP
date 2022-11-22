import React from "react";



// components
import OpenScreen from "./components/OpenScreen";
import Questions from "./components/Questions";

function App() {
  // show questions screen
  const [showQuestions, setShowQuestions] = React.useState(false);

  return (
    <div>
      <img src="./blobs.png" className="blobs-yellow" />
      {showQuestions ? (
        <Questions />
      ) : (
        <OpenScreen setShowQuestions={setShowQuestions} />
      )}
      <img src="./blobss.png" className="blobs-blue" />
    </div>
  );
}

export default App;