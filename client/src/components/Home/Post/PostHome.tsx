import Feeling from "../../../assets/images/Feeling";
import { LiveIcon } from "../../../assets/images/Live";
import { Media } from "../../../assets/images/Media";
import { userData } from "../data";

const PostHome = () => {
  return (
    <div className="w-full bg-[#d3e0ff] rounded-md py-5 px-7">
      <div className="flex bg-[#F4F7FE]  transition-all hover:bg-[#edf2ff] px-2 py-1 rounded-full gap-3 items-center">
        <img
          className="w-10  h-10 rounded-full object-cover"
          src={userData.profilePicture}
          alt="user Profile"
        />
        <div className="w-[90%]  focus:outline-none ">
          What's On Your Mind SM Anas
        </div>
      </div>
      <hr className="my-4 border-[#edf2ff]" />
      <div className="flex justify-center">
        <div className="flex justify-between w-10/12">
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="text-red-600">
              <LiveIcon />
            </div>
            <h3 className="text-black">Live Video</h3>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="text-purple-900">
              <Media />
            </div>
            <h3 className="text-black">Image/Gallery</h3>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="">
              <Feeling />
            </div>
            <h3 className="text-black">Activitis</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHome;
