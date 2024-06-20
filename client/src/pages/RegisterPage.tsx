import { useFormik } from "formik";
import Input from "../components/auth/Input";
import Option from "../components/auth/Option";
import { signupValidator } from "../validation/registerValidation";
const RegisterPage = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: signupValidator,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <div className=" h-screen">
      <div className="container">
        <div className="flex flex-col items-center">
          <img className="w-28" src="/social.png" alt="" />
          <h3 className="font font-gilroyNormal font-bold text-3xl">
            Get started with easily register
          </h3>
          <p className="text-gray-500 font-gilroyNormal font-semibold text-lg my-4">
            Free register and you can enjoy it
          </p>

          <form onSubmit={formik.handleSubmit} className="flex flex-col">
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
            <p className="text-lg">Date Of Birth</p>
            <div className="flex justify-between">
              <label htmlFor="day">Day : </label>
              <Option name="day" id="day" count={30} />
              <label htmlFor="month">Month : </label>
              <Option name="month" id="month" count={12} />
              <label htmlFor="year">Year : </label>
              <Option name="year" id="year" min={1950} count={2004} />
            </div>
            <div className="my-4">
              <input id="male" type="radio" name="gender" />
              <label className="mx-2" htmlFor="male">
                Male
              </label>
              <input id="female" type="radio" name="gender" />
              <label className="mx-2" htmlFor="female">
                Female
              </label>
              <input id="other" type="radio" name="gender" />
              <label className="mx-2" htmlFor="other">
                Other
              </label>
            </div>
            <button
              type="submit"
              className="mt-2   bg-green-600 text-white py-3 px-9 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
