import * as Yup from "yup";

export const signupValidator = Yup.object({
  firstName: Yup.string()
    .min(2)
    .max(15)
    .required("Please Enter Your First Name"),
  lastName: Yup.string().min(2).max(15).required("Please Enter Your Last Name"),
  username: Yup.string().min(2).max(15).required("Please Enter Your username"),
  password: Yup.string()
    .min(6, "Password Must Be At Least 6 Character")
    .max(50)
    .required("Please Enter Your Password"),
  email: Yup.string().email().required("Please Enter Your Valid Email"),
  gender: Yup.string().required("Please Select Your Gender"),
});
