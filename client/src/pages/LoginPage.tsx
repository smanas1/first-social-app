import { useFormik } from "formik";
import Input from "../components/auth/Input";
import { loginValidator } from "../validation/registerValidation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../components/api/authApi";
import { useDispatch } from "react-redux";
import { activeUser } from "../components/redux/userSlice";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const naivagate = useNavigate();

  const login = async () => {
    const loginMutation = await loginUser({
      email: formik.values.email,
      password: formik.values.password,
    });
    if (loginMutation.error) {
      if ("data" in loginMutation.error) {
        return toast.error(loginMutation.error.data as string, {
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
    if (loginMutation.data) {
      naivagate("/");
      dispatch(activeUser(loginMutation.data));
      console.log(loginMutation.data);
      localStorage.setItem("user", JSON.stringify(loginMutation.data));
    }
  };

  const initialState = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: loginValidator,
    onSubmit: () => {
      login();
    },
  });

  // Date

  return (
    <div className=" bg-[#DBEAFE] ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <ToastContainer />
      <div className="container flex h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col py-5 px-8 rounded-md shadow-xl bg-white"
          >
            <h3 className="font mb-3 text-center font-gilroyNormal font-bold text-3xl">
              Login
            </h3>
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              value={formik.values.email}
              type="email"
              placeholder="Enter Your Email "
              error={formik.errors.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 capitalize">{formik.errors.email}</p>
            )}
            <Input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              value={formik.values.password}
              type="password"
              placeholder="Enter Your Password"
              error={formik.errors.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}

            {isLoading ? (
              <button
                type="submit"
                disabled
                className="mt-2 bg-blue-500 text-white py-3 px-9 rounded-md"
              >
                Loading....
              </button>
            ) : (
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white py-3 px-9 rounded-md"
              >
                Login
              </button>
            )}
            <p className="my-3 text-center">
              Don't Have An Account?
              <Link className="text-blue-500 underline ms-1" to="/register">
                Register
              </Link>
            </p>

            <Link to='/forgetpassword' className="text-blue-500 underline text-center">Forgotten password?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
