import React, { } from "react";
import "./App.css";
// import AudioPlayer from "./AudioPlayer";
import Piano from "./Piano";
// function App() {
//   const audioPlayer = AudioPlayer();

//   useEffect(() => {
//     audioPlayer.setInstrument("acoustic_grand_piano");
//   }, [audioPlayer]);

//   const handleClick = () => {
//     audioPlayer.playNote("C4");
//   };
// return (
//   <div className="app-container">
//     <button onClick={handleClick}>Play</button>
//   </div>
// );
// }
function App() {
  return (
    <div className="app-container">
      <Piano />
    </div>
  );
}



export default App;