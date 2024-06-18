import { useEffect } from "react";

const SongInfo = ({
  artistName,
  songName,
  time,
}: {
  artistName: string;
  songName: string;
  time: string;
}) => {
  useEffect(() => {}, []);
  return (
    <div className="bg-[#000] my-[0px]  mx-[15px] pt-[15px] pe-[15px] pb-[5px] ps-[150px] rounded-tl-[15px] rounded-tr-[15px]">
      <div className="text-[#fff] font-bold text-[18px]">{artistName}</div>
      <div className="text-[#b9b9b9] text-[14px] mt-[3px] mb-[20px] mx-0">
        {songName}
      </div>
      <div className="bg-[#505050] rounded-[20px] cursor-pointer progress-bar">
        <div
          className={`w-0 h-[6px] rounded-[20px] bg-[#1db954] fill-bar`}
        ></div>
      </div>
      <div className="text-[15px] text-[#b9b9b9] mx-[10x] my-0">{time}</div>
    </div>
  );
};

export default SongInfo;
