import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../features/movie/movieSlice';
import { Link } from 'react-router-dom';

function Home() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const { movies } = useSelector((state) => state.movie);
    const [filteredList, setFilteredList] = useState([]);
    const [sortType, setSortType] = useState('');

    useEffect(() => {
        const results = movies.filter((value) =>
            value.original_title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredList(results);
    }, [search, movies])

    const sortedMovies = [...filteredList];

    if (sortType === 'asc') {

        sortedMovies.sort(
            (a, b) => a.vote_average - b.vote_average
        );

    }

    if (sortType === 'desc') {

        sortedMovies.sort(
            (a, b) => b.vote_average - a.vote_average
        );

    }

    if (sortType === 'az') {

        sortedMovies.sort((a, b) =>
            a.original_title.localeCompare(b.original_title)
        );

    }

    if (sortType === 'za') {

        sortedMovies.sort((a, b) =>
            b.original_title.localeCompare(a.original_title)
        );

    }

    useEffect(() => {
        dispatch(getAllMovies());
    }, []);

    return (
        <>
            <div className="container">
                <div className="row my-3 justify-content-between">
                    <div className="col-4">
                        <div>
                            <label htmlFor="search" className='form-label'> Search :</label>
                            <input type="search" name="search" className='form-control' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-4">

                        <label htmlFor="sort" className='form-label'>
                            Sorting :
                        </label>

                        <select
                            className='form-select'
                            onChange={(e) => setSortType(e.target.value)}
                        >

                            <option value="">
                                Select Sorting
                            </option>

                            <option value="asc">
                                Rating Low to High
                            </option>

                            <option value="desc">
                                Rating High to Low
                            </option>

                            <option value="az">
                                Title A-Z
                            </option>

                            <option value="za">
                                Title Z-A
                            </option>

                        </select>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 ">

                    {
                        sortedMovies.map((value, index) => {
                            return (
                                <div className="col-md-4 my-2" key={value.id}>
                                    <div className="card h-100">
                                        <img
                                            src={value.poster_path}
                                            className="card-img-top"
                                            alt={value.title}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {value.original_title}
                                            </h5>
                                            <p>Rating : {value.vote_average}</p>
                                            <p>Release : {value.release_date}</p>
                                            <Link
                                                to={`/movie/${value.id}`}
                                                className="btn btn-primary"
                                            >
                                                View Detail
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>
            </div>
        </>

    );
}

export default Home;