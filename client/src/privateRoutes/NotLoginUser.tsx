import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotLoginUser = () => {
  const user = useSelector((state: any) => state.user.user);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default NotLoginUser;
