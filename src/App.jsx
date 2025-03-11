import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { TaskProvider } from "./components/TaskProvider";
import { Main } from "./components/Main";
import { SmallScreen } from "./components/smallScreen";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      setIsSmallScreen(windowWidth < 900)
      console.log(isSmallScreen);
  })

  console.log(window.innerWidth);
  
  window.onresize = () => {
    setWindowWidth(window.innerWidth)
  }
  return (
    <TaskProvider>
      {!isSmallScreen ?

        <div className="bg-zinc-900 h-screen">
          <div className="flex">
            <Navbar />
            <Main />
          </div>
        </div>
        : <SmallScreen/>
      }
    </TaskProvider>
  );
}

export default App;
