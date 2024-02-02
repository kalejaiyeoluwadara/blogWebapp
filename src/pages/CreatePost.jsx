import React, { useState } from "react";
import { db } from "../firebase-config"; // Assuming you have a Firebase configuration file

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSendPost = async () => {
    try {
      // Add logic to send the post with the title and content to Firestore
      await db.collection("posts").add({
        title,
        content: postContent,
        timestamp: new Date(),
      });

      console.log("Post sent successfully!");
    } catch (error) {
      console.error("Error sending post:", error.message);
    }
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
