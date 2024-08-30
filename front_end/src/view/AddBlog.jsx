import { useState } from "react";
import axiosClient from "../axios";
import "../assets/css/add-banner.css";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("tags", tags);

    axiosClient
      .post("/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Blog added successfully:", response.data);
        setTitle("");
        setImage(null);
        setDescription("");
        setAuthor("");
        setTags("");
        navigate("/dashboard/blog");
      })
      .catch((error) => {
        console.error("There was an error adding the blog:", error);
      });
  };

  return (
    <div className="add-banner-container">
      <h2>Add New Blog</h2>
      <form className="add-banner-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter blog author"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter blog tags"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Blog
        </button>
      </form>
    </div>
  );
}
