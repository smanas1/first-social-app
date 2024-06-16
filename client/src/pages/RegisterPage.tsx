import Input from "../components/auth/Input";

const RegisterPage = () => {
  return (
    <div className="bg-primary-bg h-screen">
      <div className="container">
        <div className="flex flex-col items-center">
          <img className="w-28" src="/social.png" alt="" />
          <h3 className="font text-primary-white font-bold text-3xl">
            Get started with easily register
          </h3>
          <p className="text-gray-500 text-lg my-4">
            Free register and you can enjoy it
          </p>

          <form className="flex flex-col" action="">
            <Input type="text" placeholder="Enter Your First Name" />
            <Input type="text" placeholder="Enter Your Last Name" />
            <Input type="text" placeholder="Enter Your Username " />
            <Input type="email" placeholder="Enter Your Email " />
            <Input type="password" placeholder="Enter Your Password" />
          </form>
          <button className="mt-2 bg-green-600 text-white py-3 px-9 rounded-xl">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
