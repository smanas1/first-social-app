import { Friends } from "../../assets/images/Friends";
import { Media } from "../../assets/images/Media";
import { Messages } from "../../assets/images/Messages";
import { NewsFeed } from "../../assets/images/NewsFeed";
import { Settings } from "../../assets/images/Settings";

export const userData = {
  name: "Anas",
  email: "anas@gmail.com",
  profilePicture:
    "https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=600",
};

export const menuData = [
  { name: "News Feed", icon: NewsFeed, to: "/" },
  { name: "Messages", icon: Messages, to: "/messages" },
  { name: "Friends", icon: Friends, to: "/friends" },
  { name: "Media", icon: Media, to: "/media" },
  { name: "Settings", icon: Settings },
];
