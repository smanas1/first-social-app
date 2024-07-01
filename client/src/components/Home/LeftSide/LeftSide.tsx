import { useSelector } from "react-redux";
import { menuData, userData } from "../data";
import LeftMenu from "./LeftMenu";
// import { CiLogout } from "react-icons/ci";
// import { logoutUser } from "../../redux/userSlice";
// import { useNavigate } from "react-router-dom";
const LeftSide = () => {
  const user = useSelector((state: any) => state.user.user);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLogOut = () => {
  //   localStorage.removeItem("user");
  //   dispatch(logoutUser());
  //   navigate("/login");
  // };

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
        <div>
          {/* <div
            onClick={handleLogOut}
            className="flex mb-4 cursor-pointer  bg-red-500 text-white px-5 rounded-md py-2 items-center"
          >
            <CiLogout size={30} />
            <h4 className="text-lg">Logout</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
