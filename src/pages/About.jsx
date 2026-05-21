import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container py-5">

      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src="https://picsum.photos/600/400?random=4"
            alt="about"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">

          <h1 className="fw-bold mb-3">
            About Movie Store
          </h1>

          <p className="text-muted">
            Movie Store is a React movie project created
            using APIs, Redux Toolkit and React Router.
          </p>

          <p>
            Users can browse movies, search titles and
            explore trending content with a clean UI.
          </p>

          
          <Link to={`/`} className="btn btn-primary"> Explore Movies</Link>

        </div>

      </div>

    </div>
  );
}

export default About;