import "./App.css";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="App">
      {/* <video
        src={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
        }
        width="750"
        height="500"
        controls
      ></video> */}
      <Playlist />
    </div>
  );
}

export default App;
