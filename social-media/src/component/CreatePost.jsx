import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(/\s+/).filter(tag=>tag);
    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";

    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you Feeling Today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          No. of reaction
        </label>
        <textarea
          ref={reactionElement}
          type="text"
          className="form-control"
          id="reaction"
          placeholder="How many people reacted on this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <textarea
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
