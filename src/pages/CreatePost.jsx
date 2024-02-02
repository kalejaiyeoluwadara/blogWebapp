import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSendPost = () => {
    // Add logic to send the post with the title and content
    console.log("Post sent:", { title, postContent });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="postContent"
          className="block text-sm font-medium text-gray-600"
        >
          Post Content
        </label>
        <textarea
          id="postContent"
          name="postContent"
          value={postContent}
          onChange={handlePostContentChange}
          className="mt-1 p-2 w-full border rounded-md"
        ></textarea>
      </div>

      <button
        onClick={handleSendPost}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Post
      </button>
    </div>
  );
}

export default CreatePost;
