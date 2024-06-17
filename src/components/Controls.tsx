import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faPlay,
  faForward,
} from "@fortawesome/free-solid-svg-icons";

const Controls = () => {
  return (
    <div className="flex items-center justify-center gap-[8px] bg-[#292929] w-[450px] h-[100px] rounded-[20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
      <span>
        <FontAwesomeIcon icon={faBackward} className="px-[30px] py-[8px]" />
      </span>
      <span className="bg-[#1db954] text-[#fff] pt-[15px] pe-[17px] pb-[14px] ps-[18px] text-[28px] rounded-[50%] transition-all duration-[0.3s] ease-in hover:bg-[#189945] px-[30px] py-[8px]">
        <FontAwesomeIcon icon={faPlay} className="px-[30px] py-[8px]" />
      </span>
      <span>
        <FontAwesomeIcon icon={faForward} className="px-[30px] py-[8px]" />
      </span>
    </div>
  );
};

export default Controls;
