import Controls from "./components/Controls";
import Disk from "./components/Disk";
import SongInfo from "./components/SongInfo";

function App() {
  return (
    <main className="relative p-[10px]">
      <SongInfo />
      <Controls />
      <Disk />
    </main>
  );
}

export default App;
