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

export const storiesData = [
  {
    bgPicture:
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    picture:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    bgPicture:
      "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    picture:
      "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    bgPicture:
      "https://images.pexels.com/photos/1549004/pexels-photo-1549004.jpeg?auto=compress&cs=tinysrgb&w=600",
    picture:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    bgPicture:
      "https://images.pexels.com/photos/843563/pexels-photo-843563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    picture:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    bgPicture:
      "https://images.pexels.com/photos/801885/pexels-photo-801885.jpeg?auto=compress&cs=tinysrgb&w=600",
    picture:
      "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
