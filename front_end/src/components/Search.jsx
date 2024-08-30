import "../assets/css/search.css";

export default function Search() {
  return (
    <section className="search">
      <div className="search-input">
        <input type="text" placeholder="Search" />
        <button type="button">Cari</button>
      </div>
    </section>
  );
}
