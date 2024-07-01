import { RiSearchLine } from "react-icons/ri";
const Feeds = () => {
  return (
    <div>
      <div className="my-4 bg-white px-6 shadow-md py-3 items-center rounded-lg justify-between flex">
        <h2 className="text-2xl ">Feeds</h2>
        <div className="flex ">
          <div className="-me-10  mt-[7px] z-10">
            <RiSearchLine size={25} />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 pl-12 rounded-full py-2 w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Feeds;
