import React from "react";
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";
import Home from "./Home";

function App() {
  return (
    <div className="relative w-full overflow-hidden bg-white lgl:h-screen font-bodyfont text-textColor">
      {/* <div  className= {`bg-[url('C:/UsersOla Ola/Downloads/jossy-dev-main/olamide-portfolio/public/Grains.png')] absolute w-screen h-screen bg-repeat `} ></div> */}
      <div className="flex items-center justify-center h-full mx-auto max-w-screen-2xl">
        <Home />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full">
        <RoundFour />
        <RoundTwo />
        {/* <RoundOne />
        <RoundThree />
        <RoundFive /> */}
      </div>
    </div>
  );
}

export default App;
