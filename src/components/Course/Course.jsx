import { useLoaderData } from "react-router-dom";
import CourseItem from "../CourseItem/CourseItem";
import { useState } from "react";

const Course = () => {
  const [couseThumbnail, setCourseThubmnail] = useState(
    "https://phero-web.nyc3.cdn.digitaloceanspaces.com/promotional-images/Frame-1.jpg"
  );
  const [courseDescription, setcourseDescription] = useState();
  const [courseTitle, setcourseTitle] = useState();
  const [courseItem, setCourseItem] = useState();

  const { data } = useLoaderData();
  //   console.log(data);

  const handleCourseThumbnail = (
    img,
    description = "Course: description",
    titel = "Course: Title",
    id
  ) => {
    setCourseThubmnail(img);
    setcourseDescription(description);
    setcourseTitle(titel);
    const idChecker = data.find((item) => item._id === id);
    // console.log(idChecker._id);
    // console.log(courseItem._id);
    if (idChecker?._id === courseItem?._id) {
      setCourseItem(-1);
      return;
    } else {
      setCourseItem(idChecker);
    }
  };
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 gap-2 md:px-10 px-3 bg-slate-900 py-8 ">
      <div className="col-span-1 md:col-span-9">
        <figure>
          <img className="rounded-lg" src={couseThumbnail} alt="" />
        </figure>
        <h2 className="text-3xl capitalize my-4">{courseTitle}</h2>
        <p className="text-lg text-gray-300">{courseDescription}</p>
      </div>
      {/* courser item  */}
      <div className="col-span-1 md:col-span-3   bg-opacity-70">
        {data.map((item) => (
          <CourseItem
            key={item._id}
            course={item}
            handleCourseThumbnail={handleCourseThumbnail}
            courseItem={courseItem}
          ></CourseItem>
        ))}
      </div>
    </div>
  );
};

export default Course;
