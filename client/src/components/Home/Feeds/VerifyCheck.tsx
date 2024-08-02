
import { FcHighPriority } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useReEmailVerifyMutation } from "../../api/authApi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const VerifyCheck = () => {
 
  const user = useSelector((state: any) => state.user.user);
  const [reEmailVarification,{isLoading,error,data}] = useReEmailVerifyMutation()

  useEffect(() => {
    toast.success(data , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }, [data]);
  const handleSend = async () => {
    try {
      await reEmailVarification({token: user.token });
     
      
    } catch (err) {
      
      if (error) {
        if ("data" in error) {
          return toast.error(error.data as string, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
      
    }
  };


 
  return (
    <div className="flex justify-between  mb-3">
     
      <div className="flex items-center">
      <FcHighPriority size={25}/>
        <h3 className="text-red-600 text-lg">
          Your Email Is Not Verification Mail
        </h3>
      </div>
      <div className="flex items-center">
      <ToastContainer/>
        <h3 className="text-red-400">Click This Button To Get Verification Mail</h3>
       {isLoading ?  <button  className="py-1 px-5 ms-2 bg-green-600 text-white rounded">
          Send...
        </button>:  <button onClick={handleSend} className="py-1 px-5 ms-2 bg-green-600 text-white rounded">
          Send
        </button>}
      </div>
    </div>
  );
};

export default VerifyCheck;
