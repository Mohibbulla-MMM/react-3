import { Navigate, useNavigation } from "react-router-dom";

const NotFound = () => {
  const navitaion = Navigate();
  console.log();
  const handleNotFountPaage = () => {
    // navitaion(-1);
    history.go(-1);
  };
  return (
    <div className=" w-full min-h-[100vh] flex flex-col justify-center items-center gap-4">
      <p className="text-4xl text-purple-600">Not Found This URL</p>
      <button
        onClick={handleNotFountPaage}
        className="bg-gray-800 text-white py-2 px-5 rounded-md inline-block hover:bg-teal-500  font-semibold uppercase duration-200"
      >
        {" "}
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
