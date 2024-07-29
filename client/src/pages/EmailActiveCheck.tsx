import { Helmet } from "react-helmet-async";
import LeftSide from "../components/Home/LeftSide/LeftSide";
import Feeds from "../components/Home/Feeds/Feeds";
import { useEffect } from "react";
import RightSide from "../components/Home/RightSide/RightSide";
import PostHome from "../components/Home/Post/PostHome";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEmailVerifyMutation } from "../components/api/authApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { FcApproval, FcAbout } from "react-icons/fc";

const EmailActiveCheck = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [emailVerify, { error, data }] = useEmailVerifyMutation();
  // const [error, setError] = useState<any>();
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    activeUser();
  }, []);

  const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError | undefined
  ) => {
    if ("data" in (error || {})) {
      return (error as FetchBaseQueryError).data as string;
    }
  };

  const activeUser = async () => {
    try {
      const result = await emailVerify({
        token,
        userToken: user.token,
      });

      if (result.data) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#F4F7FE] dark:bg-primary-black ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        className="absolute top-0 left-0  
h-full w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100
 z-30 flex justify-center items-center"
      >
        <div className=" bg-white  text-center py-10 px-10 rounded-md shadow-2xl ">
          {error ? (
            <div className="flex  justify-center flex-col items-center">
              <FcAbout size={30} />
              <p className="text-red-500 mt-4">{getErrorMessage(error)}</p>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <FcApproval size={30} />
              <p className="text-green-500 mt-4">{data}</p>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-[1fr,3fr,1fr] px-6 gap-3">
        <div className=" ">
          <LeftSide />
        </div>
        <div>
          <Feeds />
          <PostHome />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default EmailActiveCheck;
