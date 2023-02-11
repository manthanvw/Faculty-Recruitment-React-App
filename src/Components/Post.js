import React from 'react'

export default function Post()
{
    return(
        <>
        <main className="mt-5 pt-2">
    <span className="nav-item mr-5">
      <i className="fas fa-user text-success"></i>
      <span className="text-success">Logged In</span>
    </span>
    <div className="text-center py-2 mb-3" id="hp">
      <h2>Posting a Job</h2>
    </div>
    <br/>
    <div className="row g-5">
      <div className="col-md-7 col-lg-8 m-auto">

        <div className="col-md-5">
          <label for="country" className="form-label">Department</label>
          <select className="form-select" id="country" required="">
          
            <option>CSE</option>
            <option>CSM</option>
            <option>CSD</option>
            <option>IT</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid country.
          </div>
        </div>
        <div className="col-md-5">
          <label for="country" className="form-label">Subject</label>
          <select className="form-select" id="country" required="">
          
            <option>Data Structures</option>
            <option>Machine Learning</option>
            <option>Data Science</option>
            <option>Artificial Intelligence</option>
            <option>Math</option>
            <option>Engineering Physics</option>
          </select>
          <div className="invalid-feedback">
            Please select a valid country.
          </div>
        </div>
        <div className="col-md-5 mt-2">
          <div className="mb-3">
            <label for="formFile" className="form-label">Job Description</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>

        </div>
        <div className="col-md-5 mt-2">
          <a href="" className="btn btn-primary">Post</a>
        </div>


        
      </div>
    </div>
  </main>
        </>

        
    );
}