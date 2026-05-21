import React from 'react';

function Blog() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Movie Blog</h1>
        <p className="text-muted">
          Latest movie news, reviews and trending films
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://picsum.photos/400/250?random=1"
              className="card-img-top"
              alt="movie"
            />

            <div className="card-body">
              <h5 className="card-title">
                Top Action Movies
              </h5>

              <p className="card-text">
                Discover exciting action movies with amazing
                visuals and powerful stories.
              </p>

              <button className="btn btn-dark">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://picsum.photos/400/250?random=2"
              className="card-img-top"
              alt="movie"
            />

            <div className="card-body">
              <h5 className="card-title">
                Upcoming Releases
              </h5>

              <p className="card-text">
                Explore new movie releases coming this year
                from different genres.
              </p>

              <button className="btn btn-dark">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://picsum.photos/400/250?random=3"
              className="card-img-top"
              alt="movie"
            />

            <div className="card-body">
              <h5 className="card-title">
                Movie Reviews
              </h5>

              <p className="card-text">
                Honest reviews and ratings for popular
                movies and web series.
              </p>

              <button className="btn btn-dark">
                Read More
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Blog;