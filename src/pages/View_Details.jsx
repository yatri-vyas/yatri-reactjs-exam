import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MovieDetail() {

  const { id } = useParams();

  const { movies } = useSelector(
    (state) => state.movie
  );

  const movie = movies.find(
    (value) => value.id == id
  );

  return (

    <div className="container py-5">

      <div className="row">

        <div className="col-md-5">

          <img
            src={movie.poster_path}
            alt={movie.original_title}
            className="img-fluid rounded"
          />

        </div>

        <div className="col-md-7">

          <h1>{movie.original_title}</h1>

          <p className="mt-3">
            Rating : {movie.vote_average}
          </p>

          <p>
            Release Date : {movie.release_date}
          </p>

          <p>
            {movie.overview}
          </p>
          <div className="mt-4 d-flex">

            <button className="btn btn-outline-primary me-3">
              Watch Trailer
            </button>
            <br />

            <button className="btn btn-outline-primary me-3">
              Add To Wishlist
            </button>

            <Link to="/" className="btn btn-outline-primary">
               Back To Home
            </Link>

          </div>
        </div>

      </div>

    </div>
  );
}

export default MovieDetail;