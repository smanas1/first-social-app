import { Helmet } from "react-helmet-async";
import LeftSide from "../components/Home/LeftSide/LeftSide";

const HomePage = () => {
  return (
    <div className="bg-[#f4f7fe]">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="grid grid-cols-[1fr,3fr,1fr] px-6 gap-3">
        <div className=" ">
          <LeftSide />
        </div>
        <div>asfas</div>
        <div>asfas</div>
      </div>
    </div>
  );
};

export default HomePage;
