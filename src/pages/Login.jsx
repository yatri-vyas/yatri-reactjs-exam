import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8">
                    <form>
                        <h2 className='mb-5'>Login :</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                         <Link to="/register">
                            <p>want to create new account ?</p>
                        </Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
