import { Helmet } from "react-helmet-async";

const ForgetPasswordSecrion = () => {
  return (
    <>
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <div className="bg-white py-5 px-3 w-96 rounded">
        <h1 className=" font-semibold">Find Your Account</h1>
        <p className="text-gray-500 py-2">
          Please enter your email or phone to find your account
        </p>
        <input
          type="text"
          placeholder="Email or phone"
          className="border py-1 px-2 my-3 w-full rounded-sm"
        />
        <div className="pt-2">
          <button className="bg-gray-200  py-1 rounded px-4">Cancel</button>
          <button className="bg-blue-500  py-1 rounded px-4 text-white ms-4">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordSecrion;
