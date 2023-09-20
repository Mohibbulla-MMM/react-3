import { Link, useLoaderData } from "react-router-dom";

const Post = ({ post, handlerPostItem }) => {
  const { body, id, title } = post;
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {/* <Link to={`/posts/${id}`}> */}
        <h1
          onClick={() => handlerPostItem(id)}
          className="flex flex-col p-1 px-2 bg-black mb-2 rounded-md cursor-pointer text-xl"
        >
          {title}
        </h1>
      {/* </Link> */}
    </div>
  );
};

export default Post;
