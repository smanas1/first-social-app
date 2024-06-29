import { useFormik } from "formik";
import Input from "../components/auth/Input";
import { signupValidator } from "../validation/registerValidation";
import { useState } from "react";
import Birthday from "../components/auth/Birthday";
import { useAddUserMutation } from "../components/api/authApi";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const RegisterPage = () => {
  const [ageError, setAgeError] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();
  const navigate = useNavigate();

  const registration = async () => {
    try {
      const signUpMutation = await addUser({
        fName: formik.values.firstName,
        lName: formik.values.lastName,
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
        bDay: formik.values.bDay,
        bMonth: formik.values.bMonth,
        bYear: formik.values.bYear,
        gender: formik.values.gender,
      });

      if (signUpMutation.error) {
        if ("data" in signUpMutation.error) {
          toast.error(signUpMutation.error.data as string, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(signUpMutation);
          return;
        }
      }
      if (signUpMutation.data) {
        toast.success("Sucess Please Verify Your Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    bYear: new Date().getFullYear(),
    bMonth: new Date().getMonth() + 1,
    bDay: new Date().getDay(),
    gender: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signupValidator,
    onSubmit: () => {
      const currentDate = new Date().getTime();
      const selectedDate = new Date(
        formik.values.bYear,
        formik.values.bMonth - 1,
        formik.values.bDay
      ).getTime();
      const adult = new Date(1970 + 18, 0, 1).getTime();
      const toOld = new Date(1970 + 70, 0, 1).getTime();

      if (currentDate - selectedDate < adult) {
        return setAgeError("Your Are Under 18");
      } else if (currentDate - selectedDate > toOld) {
        return setAgeError("Your Are More Then 70");
      }
      registration();
    },
  });

  // Date

  const tempYear = new Date().getFullYear();
  const years = Array.from(new Array(105), (_value, index) => tempYear - index);
  const month = Array.from(new Array(12), (_value, index) => index + 1);

  const day = () => {
    return new Date(formik.values.bYear, formik.values.bMonth, 0).getDate();
  };

  const days = Array.from(new Array(day()), (_value, index) => index + 1);

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <ToastContainer />
      <div className=" bg-[#DBEAFE]">
        <div className="container h-screen flex justify-center items-center">
          <div className="flex flex-col items-center ">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col rounded-md shadow-xl bg-white py-5 px-8"
            >
              <h3 className="font my-3  text-center font-gilroyNormal font-bold text-3xl">
                Registration
              </h3>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="firstName"
                value={formik.values.firstName}
                type="text"
                placeholder="Enter Your First Name"
                error={formik.errors.firstName}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="text-red-500">{formik.errors.firstName}</p>
              )}
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="lastName"
                value={formik.values.lastName}
                type="text"
                placeholder="Enter Your Last Name"
                error={formik.errors.lastName}
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="text-red-500">{formik.errors.lastName}</p>
              )}
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="username"
                value={formik.values.username}
                type="text"
                placeholder="Enter Your Username "
                error={formik.errors.username}
              />
              {formik.errors.username && formik.touched.username && (
                <p className="text-red-500">{formik.errors.username}</p>
              )}
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
                <p className="text-red-500">{formik.errors.email}</p>
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
              <div className="flex flex-col justify-center items-center">
                <p className="text-lg my-2">Date Of Birth</p>
                <div>
                  <Birthday
                    days={days}
                    month={month}
                    formik={formik}
                    years={years}
                  />
                </div>
                {ageError && <p className="text-red-500">{ageError}</p>}
                <div className="my-4">
                  <fieldset
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <input id="male" value="male" type="radio" name="gender" />
                    <label className="mx-2" htmlFor="male">
                      Male
                    </label>
                    <input
                      id="female"
                      value="female"
                      type="radio"
                      name="gender"
                    />
                    <label className="mx-2" htmlFor="female">
                      Female
                    </label>
                    <input
                      id="other"
                      value="other"
                      type="radio"
                      name="gender"
                    />
                    <label className="mx-2" htmlFor="other">
                      Other
                    </label>
                  </fieldset>
                  {formik.errors.gender && formik.touched.gender && (
                    <p className="text-red-500">{formik.errors.gender}</p>
                  )}
                </div>
              </div>
              {isLoading ? (
                <button
                  disabled
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                >
                  Loading...
                </button>
              ) : (
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Sign Up
                </button>
              )}
              <p className="my-3 text-center">
                Alrady Have An Account?
                <Link className="text-blue-500 underline " to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
