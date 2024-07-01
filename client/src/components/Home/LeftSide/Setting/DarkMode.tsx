import { Moon } from "../../../../assets/images/Moon";
import { BackIcon } from "../../../../assets/images/backIcon";
interface ShowProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const DarkMode: React.FC<ShowProps> = ({ setShow }: any) => {
  return (
    <div className="absolute py-4 z-20  top-0 left-0 w-full rounded-lg bg-white shadow-lg">
      <div onMouseUp={() => setShow(false)} className="flex items-center ">
        <div className="w-10 flex justify-center items-center h-10 rounded-full ">
          <BackIcon />
        </div>
        <h3 className="ms-3 font-bold text-sm">Display & Accessability</h3>
      </div>
      <div className="flex items-center ms-5 mt-2">
        <div className="w-10 bg-slate-200 flex justify-center items-center h-10 rounded-full ">
          <Moon />
        </div>
        <h3 className="ms-3 font-bold text-sm">Dark Mode</h3>
      </div>
      <div className="ms-[70px] ">
        <p className="text-sm pe-2 text-gray-400">
          The Dark mode has colors that are designed
        </p>
        <div className="flex justify-between w-32 mt-2">
          <div>
            <input name="darkmode" type="radio" id="on" />
            <label className="ms-1" htmlFor="on">
              On
            </label>
          </div>
          <div>
            <input name="darkmode" type="radio" id="off" />
            <label className="ms-1" htmlFor="off">
              Off
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
