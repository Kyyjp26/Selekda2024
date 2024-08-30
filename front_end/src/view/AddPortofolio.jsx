import { useState } from "react";
import axiosClient from "../axios";
import "../assets/css/add-banner.css";
import { useNavigate } from "react-router-dom";

export default function AddPortofolio() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("author", author);

    axiosClient
      .post("/portofolio/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Portofolio added successfully:", response.data);
        setTitle("");
        setImage(null);
        setDescription("");
        setAuthor("");
        navigate("/dashboard/portofolio");
      })
      .catch((error) => {
        console.error("There was an error adding the portofolio:", error);
      });
  };

  return (
    <div className="add-banner-container">
      <h2>Add New Portofolio</h2>
      <form className="add-banner-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter portofolio title"
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
            placeholder="Enter portofolio author"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Portofolio
        </button>
      </form>
    </div>
  );
}
