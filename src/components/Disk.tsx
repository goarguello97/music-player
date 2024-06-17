import image1 from "../assets/1.jpg";

const Disk = () => {
  return (
    <div className="max-w-[120px]">
      <div className="absolute w-[30px] h-[30px] left-[15%] top-[29%] bg-[#fff] z-[1] rounded-[50%] active:animate-rotate"></div>
      <div
        className="w-[145px] h-[145px] absolute top-[10px] left-[10px] bg-no-repeat bg-center-bottom bg-cover border-[3px] border-solid border-[#fff] rounded-[50%] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-[0.2s] ease-in-out"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
    </div>
  );
};

export default Disk;
