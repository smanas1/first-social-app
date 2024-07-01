import { useState } from "react";
import { Moon } from "../../../../assets/images/Moon";
import { BackIcon } from "../../../../assets/images/backIcon";
import { useDispatch } from "react-redux";
import { activeTheme } from "../../../redux/themeSlice";
interface ShowProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const DarkMode: React.FC<ShowProps> = ({ setShow }: any) => {
  const [theme] = useState(localStorage.getItem("theme") || null);
  const dispatch = useDispatch();
  const element = document.documentElement;
  const handleDark = () => {
    element.classList.add("dark");
    localStorage.setItem("theme", "dark");
    dispatch(activeTheme("dark"));
  };
  const handleLight = () => {
    element.classList.remove("dark");
    localStorage.removeItem("theme");
    dispatch(activeTheme(null));
  };
  console.log(theme);
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
          {theme === "dark" ? (
            <>
              <div>
                <input
                  defaultChecked
                  onClick={handleDark}
                  name="darkmode"
                  type="radio"
                  id="on"
                />
                <label className="ms-1" htmlFor="on">
                  On
                </label>
              </div>
              <div>
                <input
                  onClick={handleLight}
                  name="darkmode"
                  type="radio"
                  id="off"
                />
                <label className="ms-1" htmlFor="off">
                  Off
                </label>
              </div>
            </>
          ) : (
            <>
              <div>
                <input
                  onClick={handleDark}
                  name="darkmode"
                  type="radio"
                  id="on"
                />
                <label className="ms-1" htmlFor="on">
                  On
                </label>
              </div>
              <div>
                <input
                  defaultChecked
                  onClick={handleLight}
                  name="darkmode"
                  type="radio"
                  id="off"
                />
                <label className="ms-1" htmlFor="off">
                  Off
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
