import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/add-banner.css";

export default function EditPortofolio() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const editData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("author", author);

    try {
      const response = await axiosClient.post(`/portofolio/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Portofolio updated successfully:", response.data);
      navigate("/dashboard/portofolio");
    } catch (error) {
      console.error("There was an error updating the portofolio:", error);
    }
  };

  return (
    <div className="add-banner-container">
      <h2>Edit Portofolio</h2>
      <form className="add-banner-form" onSubmit={editData}>
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
            placeholder="Enter portofolio author"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Update Portofolio
        </button>
      </form>
    </div>
  );
}
