import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import OutSideClick from "../../../functions/clickOutSide";
import SettingOption from "./Setting/SettingOption";
interface MenuProps {
  name: string;
  icon: React.FC;
  to?: string;
}

const LeftMenu: React.FC<MenuProps> = ({ name, icon, to }) => {
  const [show, setShow] = useState(false);
  const clickOut = useRef(null);

  OutSideClick(clickOut, () => {
    setShow(false);
  });

  const MenuIcon = icon;
  const Settings = name === "Settings" && (
    <div ref={clickOut}>
      <div onClick={() => setShow(true)}>
        <div
          className={`py-4  cursor-pointer rounded-lg group transition-all hover:bg-black  px-5 w-64 ${
            show && "bg-black"
          }`}
        >
          <div className="flex gap-x-4  items-center">
            <div className={`group-hover:text-white ${show && "text-white"}`}>
              <MenuIcon />
            </div>
            <h4
              className={`text-xl group-hover:text-white ${
                show && "text-white"
              }`}
            >
              {name}
            </h4>
          </div>
        </div>
        <div>{show && <SettingOption />}</div>
      </div>
    </div>
  );

  return (
    <>
      {Settings ? (
        Settings
      ) : (
        <NavLink to={to !== undefined ? to : "/"}>
          <div className="py-4 mb-3  cursor-pointer rounded-lg group transition-all hover:bg-black  px-5 w-64">
            <div className="flex gap-x-4  items-center">
              <div className="group-hover:text-white">
                <MenuIcon />
              </div>
              <h4 className="text-xl group-hover:text-white">{name}</h4>
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftMenu;
