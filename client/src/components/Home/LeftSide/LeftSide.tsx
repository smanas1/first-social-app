import { menuData, userData } from "../data";
import LeftMenu from "./LeftMenu";

const LeftSide = () => {
  return (
    <div className=" ">
      {/* User Info */}

      <div className="flex flex-col  justify-between items-center h-screen">
        <div className="mt-10 flex items-center  flex-col">
          <img
            className="w-20   h-20 object-cover rounded-full"
            src={userData.profilePicture}
            alt=""
          />
          <h3 className="mt-4 text-lg ">{userData.name}</h3>
          <p className="text-gray-500">{userData.email}</p>
        </div>
        <div>
          {menuData.map((item, i) => (
            <LeftMenu key={i} name={item.name} icon={item.icon} />
          ))}
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default LeftSide;
