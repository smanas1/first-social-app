import { useRef, useState } from "react";
import { CircleCloseIcon } from "../../../assets/images/CircleClose";
import Feeling from "../../../assets/images/Feeling";
import { userData } from "../data";
import EmojiPicker, { EmojiClickData, EmojiStyle } from "emoji-picker-react";
import { Media } from "../../../assets/images/Media";
import { LiveIcon } from "../../../assets/images/Live";
import { CircleProfileIcon } from "../../../assets/images/Circleprofile";
const CreatePost = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  const [imageShow, setImageShow] = useState(true);
  const [image, setImage] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file !== null) {
      const fileArray = Array.from(file);
      fileArray.forEach((img) => {
        if (img.type === "image/png" || img.type === "image/jpeg") {
          const renderFiles = new FileReader();
          renderFiles.readAsDataURL(img);
          renderFiles.onload = (renderImage: ProgressEvent<FileReader>) => {
            setImage((images) => [...images, renderImage.target?.result]);
          };
        } else {
          console.log("non supported image");
        }
      });
    }
    console.log(image);
  };

  const choseRef = useRef<HTMLInputElement>(null);
  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
  };
  return (
    <div className="absolute h-screen z-40 w-full flex justify-center items-center  bg-black bg-opacity-30 ">
      <div className="py-3 px-4 w-[500px] bg-white rounded-md">
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
        <div className="mt-3 relative">
          <textarea
            className="border-gray-400 focus:outline-none rounded-md w-full "
            placeholder="What's on your mind?"
            rows={imageShow ? 2 : 5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {imageShow && (
            <div className="">
              <div
                onClick={() => setEmoji((emoji) => !emoji)}
                className="cursor-pointer absolute bottom-6 right-2"
              >
                <Feeling />
              </div>
              {emoji && (
                <div className="absolute top-9 z-20 -right-40">
                  <EmojiPicker
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    emojiStyle={EmojiStyle.FACEBOOK}
                    onEmojiClick={onEmojiClick}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {!imageShow ? (
          <>
            <div className="flex justify-between relative items-center">
              <div className="w-12 cursor-pointer  rounded-lg h-12 bg-gradient-to-r from-violet-200 to-pink-200"></div>
              <div
                onClick={() => setEmoji((emoji) => !emoji)}
                className="cursor-pointer "
              >
                <Feeling />
              </div>
              {emoji && (
                <div className="absolute bottom-10 -right-40">
                  <EmojiPicker
                    searchDisabled={true}
                    skinTonesDisabled={true}
                    emojiStyle={EmojiStyle.FACEBOOK}
                    onEmojiClick={onEmojiClick}
                  />
                </div>
              )}
            </div>
            <div className="flex py-2 px-3 justify-between mt-3 border rounded-full">
              <h3>Add To Your Post</h3>
              <div className="flex cursor-pointer gap-2">
                <div onClick={() => setImageShow(true)}>
                  <Media />
                </div>
                <LiveIcon />
                <CircleProfileIcon />
              </div>
            </div>
          </>
        ) : (
          <div className="border">
            <div className="py-16 relative m-1  flex justify-center items-center bg-gray-100">
              <div
                className="flex flex-col items-center"
                onClick={() => choseRef.current?.click()}
              >
                <div
                  className="
                flex
                justify-center items-center bg-primary-black text-white p-1 rounded-full"
                >
                  <Media />
                </div>
                <h3 className="py-1">Add Photo/Video</h3>
                <span className="text-[12px]">or drag and drop</span>
              </div>
              <div
                onClick={() => setImageShow(false)}
                className="flex absolute top-1 cursor-pointer right-1 justify-center items-center text-gray-400"
              >
                <CircleCloseIcon />
              </div>
            </div>
          </div>
        )}
        <button className="w-full border py-2 hover:text-white hover:bg-primary-black transition-all bg-[#f1f6ff] mt-4 rounded-md">
          Post
        </button>
      </div>
      <input
        onChange={handleChange}
        hidden
        type="file"
        accept="image/png, image/jpeg"
        ref={choseRef}
      />
    </div>
  );
};

export default CreatePost;
