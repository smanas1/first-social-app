import FriendRequest from "./FriendRequest";
import Stories from "./Stories";

const RightSide = () => {
  return (
    <div className="pt-5 ps-5 w-80 h-screen border-l">
      <FriendRequest />
      <Stories />
    </div>
  );
};

export default RightSide;
