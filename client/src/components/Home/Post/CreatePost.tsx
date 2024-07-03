import { useState } from "react";
import { CircleCloseIcon } from "../../../assets/images/CircleClose";
import Feeling from "../../../assets/images/Feeling";
import { userData } from "../data";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
const CreatePost = () => {
  const [emoji, setEmoji] = useState(false);
  return (
    <div className="absolute h-screen z-40 w-full flex justify-center items-center bg-black bg-opacity-30 ">
      <div className="py-3 px-4 w-96 bg-white rounded-md">
        <div className="relative">
          <h2 className="text-black text-center text-lg border-b py-2">
            Create Post
          </h2>
          <div className="absolute text-gray-400 cursor-pointer top-0 right-0">
            <CircleCloseIcon />
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <img
            className="h-11 w-11 object-cover rounded-full"
            src={userData.profilePicture}
            alt=""
          />
          <h3 className="text-lg">SM Anas</h3>
        </div>
        <div className="mt-3">
          <textarea
            className="border-gray-400 focus:outline-none rounded-md w-full "
            placeholder="What's on your mind?"
            rows={5}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="w-12 cursor-pointer rounded-lg h-12 bg-gradient-to-r from-violet-200 to-pink-200"></div>
          <div
            onClick={() => setEmoji((emoji) => !emoji)}
            className="cursor-pointer relative"
          >
            {emoji && (
              <div className="absolute bottom-7 -right-40">
                <EmojiPicker
                  searchDisabled={true}
                  skinTonesDisabled={true}
                  emojiStyle={EmojiStyle.FACEBOOK}
                />
              </div>
            )}
            <Feeling />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
