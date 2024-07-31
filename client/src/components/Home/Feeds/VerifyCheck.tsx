const VerifyCheck = () => {
  return (
    <div className="flex justify-between  mb-3">
      <div className="flex items-center">
        <h3 className="text-red-600 text-lg">
          Your Email Is Not Verification Mail
        </h3>
      </div>
      <div className="flex items-center">
        <h3 className="text-blue-400">Click This Button To Get Verification</h3>
        <button className="py-2 px-5 ms-2 bg-blue-500 text-white rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default VerifyCheck;
