// import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const CourseItem = ({ course, handleCourseThumbnail, courseItem }) => {
  //   const [courseItem, setCourseItem] = useState(false);
  const { description, image, modules, name, _id } = course;

  return (
    <div className="">
      <h1
        onClick={() => handleCourseThumbnail(image, description, name, _id)}
        className="bg-black text-white rounded p-2 mb-2 cursor-pointer text-xl "
      >
        {name}
      </h1>
      {/* course inner item */}
      <div
        className={`${
          courseItem?._id == _id ? "block" : "hidden"
        } bg-gray-600 p-3 mb-2 rounded-md duration-500 transition-all`}
      >
        {modules.map((item) => (
          <div
            key={item._id}
            className="text-gray-400 bg-black mb-2 p-2 rounded cursor-pointer italic "
          >
            <h2 className="flex gap-2 items-center">
              <span className="text-xl text-teal-400">
                {<BsFillCheckCircleFill></BsFillCheckCircleFill>}
              </span>{" "}
              <span>{item.name}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseItem;
