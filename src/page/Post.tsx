import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addPost } from "../redux/post/postSlice";

const Post = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.post);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <h1>Post Page</h1>
      <input
        type="text"
        placeholder="post Title..."
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <input
        type="text"
        placeholder="post Content..."
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
      />
      <button
        onClick={() =>
          dispatch(
            addPost({
              title: title,
              content: content,
            })
          )
        }
      >
        Submit
      </button>

      <div>
        {data.posts.map((post, index) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
