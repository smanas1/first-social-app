import { Helmet } from "react-helmet-async";
import LeftSide from "../components/Home/LeftSide/LeftSide";
import Feeds from "../components/Home/Feeds/Feeds";
import { useEffect, useState } from "react";
import RightSide from "../components/Home/RightSide/RightSide";

const HomePage = () => {
  const [theme, setTheme] = useState("");
  const element = document.documentElement;

  useEffect(() => {
    if (localStorage.theme == "dark") {
      element.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className="bg-[#F4F7FE] dark:bg-primary-black ">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr,3fr,1fr] px-6 gap-3">
        <div className=" ">
          <LeftSide />
        </div>
        <div>
          <Feeds />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
