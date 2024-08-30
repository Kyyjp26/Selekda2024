import "../assets/css/blog-detail.css";

export default function BlogDetail() {
  return (
    <>
      <section className="blog-detail">
        <div className="container-blog-detail">
          <div className="item-blog-detail">
            <div className="card-blog-detail">
              <img src="../../Image/IMAGES/images (8).jpg" alt="" />
              <div className="card-text">
                <h3>Blog</h3>
                <h4>Author</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div className="card-footer">
                  <p className="date">27-08-1999</p>
                  <div className="see">
                    <p className="view">20 views</p>
                    <p>30 comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comment-form">
        <h2>Add Comment:</h2>
        <form action="#">
          <div className="grid-form">
            <div className="item-form">
              <div className="input-form">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-form">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div className="input-form">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <div className="input-button">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>

      <section className="comment-list">
        <div className="container-comment">
          <div className="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div className="comment-text">
              <div className="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div className="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div className="comment-text">
              <div className="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div className="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div className="comment-text">
              <div className="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div className="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div className="comment-text">
              <div className="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
