import { useState } from "react";
import ForgetPasswordSecrion from "../components/ForgetPassword/ForgetPasswordSecrion";

const ForgetPassword = () => {
  const [section, setSection] = useState(0);
  const renderComponent = () => {
    switch (section) {
      case 0:
        return <ForgetPasswordSecrion />;
      case 1:
        return "Section 2";
      default:
        null;
    }
  };
  return (
    <div className="bg-blue-200 w-full h-screen flex justify-center items-center">
      {renderComponent()}
    </div>
  );
};

export default ForgetPassword;
