import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/add-banner.css";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const editData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("tags", tags);

    try {
      const response = await axiosClient.post(`/blog/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Blog updated successfully:", response.data);
      navigate("/dashboard/blog");
    } catch (error) {
      console.error("There was an error updating the blog:", error);
    }
  };

  return (
    <div className="add-banner-container">
      <h2>Edit Blog</h2>
      <form className="add-banner-form" onSubmit={editData}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blogs title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
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
            placeholder="Enter blogs author"
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
            placeholder="Enter blogs tags"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Update Tags
        </button>
      </form>
    </div>
  );
}
