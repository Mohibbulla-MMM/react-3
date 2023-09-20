import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import { useEffect, useState } from "react";

const Posts = () => {
  const data = useLoaderData();
  //   console.log(data);
  const [post, setPost] = useState([]);
  const [postid, setPostId] = useState("1");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postid]);
  const handlerPostItem = (singlePost = "1") => {
    // console.log(singlePost);
    // post.find
    setPostId(singlePost);
  };
  //   console.log(post);
  const { body, id, title } = post;
  return (
    <div className="md:grid md:grid-cols-12  flex  flex-col-reverse md:px-10 px-3 py-5 gap-2 bg-gray-800 ">
      <div className=" mm-post-scroll col-span-1 pr-2 md:col-span-4 max-h-[80vh] overflow-y-scroll ">
        {data.map((item) => (
          <Post
            key={item?.id}
            post={item}
            handlerPostItem={handlerPostItem}
          ></Post>
        ))}
      </div>
      {/* show post item */}
      <div className="col-span-1 md:col-span-8 bg-gray-900 rounded-md p-5 flex flex-col gap-4 ">
        <h1 className="text-4xl capitalize"> {title}</h1>
        <p className="text-lg text-gray-300">{body}</p>
      </div>
    </div>
  );
};

export default Posts;
