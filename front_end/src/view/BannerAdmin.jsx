import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { useStageContext } from "../context/ContextProvider";
import "../assets/css/banner-admin.css";

export default function BannerAdmin() {
  const { banners, setBanners } = useStageContext();

  useEffect(() => {
    axiosClient
      .get("/banner")
      .then(({ data }) => {
        setBanners(data.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setBanners]);

  return (
    <div className="banner-admin-container">
      <h1>Banner Management</h1>
      <h2>Add Banner</h2>
      <div className="banner-list">
        <h2>Banner List</h2>
        {banners.length === 0 ? (
          <p>No banners available.</p>
        ) : (
          <ul>
            {banners.map((banner) => (
              <li key={banner.id} className="banner-item">
                <h3>{banner.title}</h3>
                <img
                  src={`data:image/jpeg;base64,${banner.image}`}
                  alt={banner.title}
                  className="banner-image"
                />
                <p>Status: {banner.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
