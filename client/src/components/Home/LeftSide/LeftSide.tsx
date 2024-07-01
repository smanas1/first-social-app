import { useSelector } from "react-redux";
import { menuData, userData } from "../data";
import LeftMenu from "./LeftMenu";

const LeftSide = () => {
  const user = useSelector((state: any) => state.user.user);

  return (
    <div className=" ">
      {/* User Info */}

      <div className="flex flex-col items-center  border-r  h-screen">
        <div className="mt-10 flex items-center  flex-col">
          <img
            className="w-20   h-20 object-cover rounded-full"
            src={userData.profilePicture}
            alt=""
          />
          <h3 className="mt-4 text-lg ">
            {user.fname} {user.lname}
          </h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <div className="mt-20">
          {menuData.map((item, i) => (
            <LeftMenu to={item.to} key={i} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LeftSide;
