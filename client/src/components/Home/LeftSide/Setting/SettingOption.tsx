import { useDispatch } from "react-redux";
import { Logout } from "../../../../assets/images/Logout";
import { Moon } from "../../../../assets/images/Moon";
import { logoutUser } from "../../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DarkMode from "./DarkMode";

const SettingOption: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    navigate("/login");
  };
  console.log(show);
  return (
    <div className="shadow-xl relative rounded-lg cursor-pointer bg-white py-4 px-3">
      <div onClick={() => setShow(true)} className="flex items-center ">
        <div className="w-10 flex justify-center items-center h-10 rounded-full bg-slate-200">
          <Moon />
        </div>
        <h3 className="ms-3 font-bold text-sm">Display & Accessability</h3>
        {show && <DarkMode setShow={setShow} />}
      </div>
      <div
        onClick={handleLogOut}
        className="flex items-center mt-3 cursor-pointer"
      >
        <div className="w-10 flex justify-center items-center h-10 rounded-full bg-red-500 text-white">
          <Logout />
        </div>
        <h3 className="ms-3 font-bold text-red-500 text-sm">Logout</h3>
      </div>
    </div>
  );
};

export default SettingOption;
