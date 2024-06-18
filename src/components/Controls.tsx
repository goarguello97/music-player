import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Controls = ({
  togglePlayPause,
  pause,
  nextSong,
  prevSong,
}: {
  togglePlayPause: () => void;
  pause: boolean;
  nextSong: () => void;
  prevSong: () => void;
}) => {
  useEffect(() => {}, [pause]);
  return (
    <div className="flex items-center justify-center gap-[8px] bg-[#292929] w-[450px] h-[100px] rounded-[20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <FontAwesomeIcon
        icon={faBackward}
        className="py-[30px] px-[8px] text-[35px] cursor-pointer text-[#919191] transition-all duration-[0.3s] ease-linear hover:text-[#fff]"
        onClick={() => prevSong()}
      />
      {pause ? (
        <FontAwesomeIcon
          icon={faPause}
          className="bg-[#1db954] text-[#fff] pt-[15px] pe-[17px] pb-[14px] ps-[18px] text-[28px] rounded-[50%] transition-all duration-[0.3s] ease-linear hover:bg-[#189945]"
          onClick={() => togglePlayPause()}
        />
      ) : (
        <FontAwesomeIcon
          icon={faPlay}
          className="bg-[#1db954] text-[#fff] pt-[15px] pe-[17px] pb-[14px] ps-[18px] text-[28px] rounded-[50%] transition-all duration-[0.3s] ease-linear hover:bg-[#189945]"
          onClick={() => togglePlayPause()}
        />
      )}
      <FontAwesomeIcon
        icon={faForward}
        className="py-[30px] px-[8px] text-[35px] cursor-pointer text-[#919191] transition-all duration-[0.3s] ease-linear hover:text-[#fff]"
        onClick={() => nextSong()}
      />
    </div>
  );
};

export default Controls;
