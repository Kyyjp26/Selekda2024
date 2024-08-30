import "../assets/css/blog.css";
import BlogList from "../components/BlogList";
import CategoriBlog from "../components/CategoriBlog";
import PopularBlog from "../components/PopularBlog";

export default function Blog() {
  return (
    <>
      <BlogList />
      <CategoriBlog />
      <PopularBlog />
    </>
  );
}
