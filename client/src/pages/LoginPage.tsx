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
      toast.error(loginMutation.error.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }
    naivagate("/");
    dispatch(activeUser(loginMutation.data));

    console.log(loginMutation.data);
    localStorage.setItem("user", JSON.stringify(loginMutation.data));
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
    <div className=" h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <ToastContainer />
      <div className="container">
        <div className="flex flex-col items-center">
          <img className="w-28" src="/social.png" alt="" />
          <h3 className="font font-gilroyNormal font-bold text-3xl">Login</h3>
          <p className="text-gray-500   text-lg my-4">
            Free register and you can enjoy it
          </p>

          <form onSubmit={formik.handleSubmit} className="flex flex-col">
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
            <p className="my-3">
              Don't Have An Account?
              <Link className="text-blue-500 underline " to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
