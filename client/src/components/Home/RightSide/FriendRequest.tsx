const FriendRequest = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg ">Friend Request</h3>
        <button className="py-1 px-3 border-primary-black rounded-full border">
          See All
        </button>
      </div>
      <div className="mt-8">
        <div>
          <div className="flex ">
            <img
              className="w-14 rounded-full object-cover h-14"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <div className="ms-3">
              <p className="text-lg  font-medium">Sadi Bolod</p>
              <span className="text-sm text-gray-500">1 week ago</span>
              <div className="flex   mt-4">
                <button className="py-2 me-3 bg-blue-500 rounded-full text-white px-7 border">
                  Accept
                </button>
                <button className="py-2 bg-red-500 rounded-full text-white px-7 border">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
