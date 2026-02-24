import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorer);
  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
