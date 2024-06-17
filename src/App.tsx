import Controls from "./components/Controls";
import Disk from "./components/Disk";
import SongInfo from "./components/SongInfo";

function App() {
  return (
    <main className="relative p-[10px]">
      <Controls />
      <Disk />
      <SongInfo />
    </main>
  );
}

export default App;
