import Controls from "./components/Controls";
import Disk from "./components/Disk";
import SongInfo from "./components/SongInfo";
import songsList from "./assets/songInfo.json";
import { useEffect, useRef, useState } from "react";

function App() {
  // const [newSong, setNewSong] = useState<HTMLAudioElement>(new Audio());
  const [currentSong, setCurrentSong] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const [artistName, setArtistName] = useState<string>("");
  const [songName, setSongName] = useState<string>("");
  const [songSrc, setSongSrc] = useState<string>("");
  const audioRef = useRef(new Audio(songSrc));
  const [coverUrl, setCoverUrl] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  // Boolean for activate "pause or play" class
  const [pause, setPause] = useState<boolean>(false);
  // Boolean for activate "active "class
  const [active, setActive] = useState<boolean>(playing);
  const prog = document.querySelector(".progress-bar");
  const fillBar = document.querySelector(".fill-bar") as HTMLDivElement;

  function loadSong(index: number) {
    const { name, artist, src, cover: thumb } = songsList[index];
    setArtistName(artist);
    setSongName(name);
    const track = require(`./${src}`);
    setSongSrc(track);
    const cover = require(`./${thumb}`);
    setCoverUrl(cover);
  }

  function updateProgress() {
    if (audioRef.current.duration) {
      const pos =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      fillBar!.style.width = `${pos}%`;

      const duration = formatTime(audioRef.current.duration);
      const currentTime = formatTime(audioRef.current.currentTime);
      setCurrentTime(`${currentTime} - ${duration}`);
    }
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function togglePlayPause() {
    if (playing) {
      audioRef.current.pause();
      setPause(false);
      setActive(false);
    } else {
      audioRef.current.play();
      setPause(true);
      setActive(true);
    }
    setPlaying(!playing);
  }

  function nextSong() {
    setCurrentSong((currentSong + 1) % songsList.length);
    playMusic();
  }

  function prevSong() {
    setCurrentSong((currentSong - 1 + songsList.length) % songsList.length);
    playMusic();
  }

  function playMusic() {
    loadSong(currentSong);
    setPlaying(false);
    setPause(false);
    setActive(false);
  }

  function seek(e: any) {
    const pos = (e.offsetX / prog!.clientWidth) * audioRef.current.duration;
    audioRef.current.currentTime = pos;
  }

  useEffect(() => {
    loadSong(currentSong);
    audioRef.current.pause();
    audioRef.current.removeEventListener("timeupdate", updateProgress);
    audioRef.current.removeEventListener("ended", nextSong);
    audioRef.current = new Audio(songSrc);

    audioRef.current.addEventListener("timeupdate", updateProgress);
    audioRef.current.addEventListener("ended", nextSong);

    prog?.addEventListener("click", seek);
    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener("timeupdate", updateProgress);
      audioRef.current.removeEventListener("ended", nextSong);
    };
  }, [songSrc, currentSong]);

  return (
    <main className="relative p-[10px]">
      <SongInfo
        artistName={artistName}
        songName={songName}
        time={currentTime}
      />
      <Controls
        togglePlayPause={togglePlayPause}
        pause={pause}
        nextSong={nextSong}
        prevSong={prevSong}
      />
      <Disk coverUrl={coverUrl} active={active} />
    </main>
  );
}

export default App;
