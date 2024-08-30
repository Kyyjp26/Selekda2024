import "../assets/css/blog-list.css";
import { useEffect } from "react";
import { useStageContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function BlogList() {
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

  return (
    <section className="blog">
      <div className="grid-blog">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          <ul>
            {blogs.map((blog) => {
              <li key={blog.id} className="item-blog">
                <div className="card-blog">
                  <img
                    src={`data:image/jpeg;base64,${blog.image}`}
                    alt={blog.title}
                  />
                  <div className="card-text">
                    <h3>{blog.title}</h3>
                    <h4>{blog.author}</h4>
                    <p>{blog.description}</p>
                    <div className="card-footer">
                      <p className="date">{blog.date}</p>
                      <div className="see">
                        <p className="view">20 views</p>
                        <p>30 comments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>;
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
