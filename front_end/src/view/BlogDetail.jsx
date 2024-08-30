import "../assets/css/blog-detail.css";

export default function BlogDetail() {
  return (
    <>
      <section class="blog-detail">
        <div class="container-blog-detail">
          <div class="item-blog-detail">
            <div class="card-blog-detail">
              <img src="../../Image/IMAGES/images (8).jpg" alt="" />
              <div class="card-text">
                <h3>Blog</h3>
                <h4>Author</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div class="card-footer">
                  <p class="date">27-08-1999</p>
                  <div class="see">
                    <p class="view">20 views</p>
                    <p>30 comments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="comment-form">
        <h2>Add Comment:</h2>
        <form action="#">
          <div class="grid-form">
            <div class="item-form">
              <div class="input-form">
                <input type="text" placeholder="Name" />
              </div>
              <div class="input-form">
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <div class="input-form">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <div class="input-button">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>

      <section class="comment-list">
        <div class="container-comment">
          <div class="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div class="comment-text">
              <div class="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div class="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div class="comment-text">
              <div class="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div class="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div class="comment-text">
              <div class="comment-title">
                <h3>Name</h3>
                <p>Date</p>
              </div>
              <p>Comment...</p>
            </div>
          </div>
          <div class="comment-item">
            <img src="../../Image/IMAGES/images (13).jpg" alt="" />
            <div class="comment-text">
              <div class="comment-title">
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
