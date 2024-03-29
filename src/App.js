import { useState } from "react";
import "./App.css";
import videoList from "./assets/data";
import { Wrapper } from "./assets/main";
import Player from "./components/Player";
import Playlist from "./components/Playlist";
import Header from "./components/Header";

function App() {
  const [selVideo, setselVideo] = useState(videoList[0]);
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Player videoData={selVideo} />
        <Playlist setselVideo={setselVideo} />
      </Wrapper>
    </div>
  );
}

export default App;
