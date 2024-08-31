import { useRef, useState } from "react";
import { CircleCloseIcon } from "../../../assets/images/CircleClose";
import Feeling from "../../../assets/images/Feeling";
import { userData } from "../data";
import EmojiPicker, { EmojiClickData, EmojiStyle } from "emoji-picker-react";
import { Media } from "../../../assets/images/Media";
import { LiveIcon } from "../../../assets/images/Live";
import { CircleProfileIcon } from "../../../assets/images/Circleprofile";
import { MdClose } from "react-icons/md";
const CreatePost = () => {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");
  const [imageShow, setImageShow] = useState(false);
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
  };

  const handleImageClose = () => {
    setImageShow(false);
    setImage([]);
  };

  const choseRef = useRef<HTMLInputElement>(null);
  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
  };
  console.log(image.length);
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
            <div
              className={` ${
                image.length
                  ? "py-0 relative"
                  : "relative m-1 cursor-pointer py-16 flex justify-center items-center bg-gray-100"
              } `}
            >
              {image && image.length ? (
                <div
                  className={`${
                    image.length === 2
                      ? "grid overflow-hidden w-full h-full grid-cols-2 gap-2 "
                      : image.length === 3
                      ? "grid overflow-hidden w-full h-full grid-cols-2 gap-2"
                      : image.length === 4
                      ? "grid overflow-hidden w-full h-full grid-cols-2 gap-2"
                      : "grid overflow-hidden w-full h-full grid-cols-2 gap-2"
                  }`}
                >
                  {image.slice(0, 4).map((img, index) => (
                    <img
                      className="-cover"
                      key={index}
                      src={img}
                      alt="post image"
                    />
                  ))}
                </div>
              ) : (
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
              )}
              <div
                onClick={handleImageClose}
                className={`${
                  image.length && ""
                } flex absolute bg-white rounded-full text-black top-1 cursor-pointer shadow right-1 justify-center items-center  `}
              >
                <MdClose size={25} />
              </div>
              {image.length ? (
                <div
                  onClick={() => choseRef.current?.click()}
                  className={`${
                    image.length && "text-black"
                  } flex absolute top-2 cursor-pointer left-1 justify-center items-center shadow py-1 px-2 rounded bg-white`}
                >
                  <Media />
                  <span className="ms-2">Add Photos/Videos</span>
                </div>
              ) : null}
              {image.length >= 5 ? (
                <div
                  className={`${
                    image.length && "text-black"
                  } flex absolute shadow bottom-3 cursor-pointer right-3 justify-center items-center text-xl py-1 px-2 rounded bg-white`}
                >
                  +{image.length - 4}
                </div>
              ) : null}
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
        multiple
        type="file"
        accept="image/png, image/jpeg"
        ref={choseRef}
      />
    </div>
  );
};

export default CreatePost;
