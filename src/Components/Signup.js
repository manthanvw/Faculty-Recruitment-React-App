import React from 'react'
import Navbar from './Navbar';

export default function Signup() {
  return (

    <div className="mt-5">
      <div className="container-fluid ">
        <main className="form-signin w-60 m-auto ">
          <form >
            <h1 className="h3 mb-3 fw-normal mt-5 py-5">Sign Up</h1>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Confirm Password</label>
            </div>

            <div>
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>

            <a className="btn btn-primary" href="./Home.html" role="button" id="Submit">Sign In</a>
          </form>
        </main>
      </div>

    </div>
  );
}