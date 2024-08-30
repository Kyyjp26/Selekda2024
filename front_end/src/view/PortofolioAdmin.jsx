import { useEffect } from "react";
import axiosClient from "../axios";
import { useStageContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import "../assets/css/banner-admin.css";

export default function PortofolioAdmin() {
  const { portofolios, setPortofolios } = useStageContext();

  useEffect(() => {
    axiosClient
      .get("/portofolio")
      .then(({ data }) => {
        setPortofolios(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setPortofolios]);

  const onDelete = (id) => {
    axiosClient
      .delete(`/portofolio/${id}`)
      .then(({ data }) => {
        const delPorto = portofolios.filter(
          (portofolio) => portofolio.id !== id
        );
        setPortofolios(delPorto);
      })
      .catch((err) => {
        const errMessage = err.response?.data?.message;
        console.log(errMessage);
      });
  };

  return (
    <div className="banner-admin-container">
      <h1 className="management">Portofolio Management</h1>
      <Link to="/dashboard/add-portofolio" className="add">
        Add portofolio
      </Link>
      <div className="banner-list">
        {portofolios.length === 0 ? (
          <p>No portofolios available.</p>
        ) : (
          <ul>
            {portofolios.map((portofolio) => (
              <li key={portofolio.id} className="banner-item">
                <h3>{portofolio.title}</h3>
                <img
                  src={`data:image/jpeg;base64,${portofolio.image}`}
                  alt={portofolio.title}
                  className="banner-image"
                />
                <p className="banner-description">{portofolio.description}</p>
                <p>Status: {portofolio.status}</p>
                <div className="banner-actions">
                  <Link
                    to={`/dashboard/edit-portofolio/${portofolio.id}`}
                    className="edit-button"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(portofolio.id)}
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
