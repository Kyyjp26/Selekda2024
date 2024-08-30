import { useEffect } from "react";
import axiosClient from "../axios";
import { useStageContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import "../assets/css/banner-admin.css";

export default function BlogAdmin() {
  const { blogs, setBlogs } = useStageContext();

  useEffect(() => {
    axiosClient
      .get("/blog")
      .then(({ data }) => {
        setBlogs(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setBlogs]);

  const onDelete = (id) => {
    axiosClient
      .delete(`/blog/${id}`)
      .then(({ data }) => {
        const delBlog = blogs.filter((blog) => blog.id !== id);
        setBlogs(delBlog);
      })
      .catch((err) => {
        const errMessage = err.response?.data?.message;
        console.log(errMessage);
      });
  };

  return (
    <div className="banner-admin-container">
      <h1 className="management">Blog Management</h1>
      <Link to="/dashboard/add-blog" className="add">
        Add blog
      </Link>
      <div className="banner-list">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id} className="banner-item">
                <h3>{blog.title}</h3>
                <img
                  src={`data:image/jpeg;base64,${blog.image}`}
                  alt={blog.title}
                  className="banner-image"
                />
                <p className="banner-description">{blog.description}</p>
                <p>Status: {blog.status}</p>
                <div className="banner-actions">
                  <Link
                    to={`/dashboard/edit-blog/${blog.id}`}
                    className="edit-button"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(blog.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
