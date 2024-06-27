import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const LoginUser = () => {
  const user = useSelector((state: any) => state.user.user);
  return user ? <Outlet /> : <LoginPage />;
};

export default LoginUser;
