import React from 'react'


export default function Notification()
{
    return (
        <>

<main className="mt-5 pt-2">
        <span className="nav-item mr-5">
            <i className="fas fa-user text-success"></i>
            <span className="text-success">Logged In</span>
          </span>
        <div className="container mt-2">
            <h1 className="text-center mb-5">Notifications</h1>
            <div className="row">
                {/* <!-- Notification List --> */}
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button class = "btn btn-primary" type="button" onclick="func(1)">
                                Notification 1
    
                            </button>
                            <span className="badge badge-primary badge-pill">New</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button class = "btn btn-primary" type="button" onclick="func(2)">
                                Notification 2
                            </button>
                            <span className="badge badge-primary badge-pill">New</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button class = "btn btn-primary" type="button" onclick="func(3)">
                                Notification 3
                            </button>
                            <span className="badge badge-secondary badge-pill">Seen</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button class = "btn btn-primary" type="button" onclick="func(4)">
                                Notification 4
                            </button>
                            <span className="badge badge-secondary badge-pill">Seen</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <button class = "btn btn-primary" type="button" onclick="func(5)">
                                Notification 5
                            </button>
                            <span className="badge badge-secondary badge-pill">Seen</span>
                        </li>
                    </ul>
                </div>
    
                {/* <!-- Notification Detail --> */}
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div id="N1">
                            <div className="card-header"> Notification 1 </div>
                            <div className="card-body">
                                <p className="card-text">New Posting</p> <a href="./profile1" className="btn btn-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
    );

}