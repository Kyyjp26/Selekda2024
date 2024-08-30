import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/add-banner.css";

export default function EditBanner() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();

  const editData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("status", status);

    try {
      const response = await axiosClient.post(`/banner/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Banner updated successfully:", response.data);
      navigate("/dashboard/banner");
    } catch (error) {
      console.error("There was an error updating the banner:", error);
    }
  };

  return (
    <div className="add-banner-container">
      <h2>Edit Banner</h2>
      <form className="add-banner-form" onSubmit={editData}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter banner title"
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
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Update Banner
        </button>
      </form>
    </div>
  );
}
