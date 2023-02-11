import React, { useState } from 'react'
import Table from './Table';

export default function Home() {
    
    let data =
        [{ No: 1, Ins: "KMIT", Dept: 'CSE', Sub: "C++", Job: "PDF" },
        { No: 2, Ins: "KMEC", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
        { No: 3, Ins: "NGIT", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },
        { No: 4, Ins: "KMEC", Dept: 'CSE', Sub: "C++", Job: "PDF" },
        { No: 5, Ins: "NGIT", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
        { No: 6, Ins: "KMIT", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },
        { No: 7, Ins: "NGIT", Dept: 'CSE', Sub: "C++", Job: "PDF" },
        { No: 8, Ins: "KMIT", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
        { No: 9, Ins: "KMEC", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },

        ]


    return (
        <div >
            <div className="row align-items-md-stretch mt-5">
                <div className="container-fluid col-md-8 table-responsive ">
                    <div className="container mt-3">
                        <Table d={data} />
                    </div >
                </div >
                <div className="container-fluid col-md-3 mt-5">
                    <div className="h bg-light border rounded-3">
                        <div id="signup">
                            <form>
                                <h1 className="h3 mb-4 fw-normal">Sign in</h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <br />
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <br />
                                <a className="btn btn-primary p-1" href="dashboard" role="button" id="Submit" >Sign In</a>
                                <br />
                                <br />
                                <div className="checkbox mb-3">
                                    <label>
                                        <p> Create an account?
                                            <a className="btn btn-primary ms-2 p-1" href="./signup.html" role="button">Sign Up</a>
                                        </p>
                                    </label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label>
                                        <input type="checkbox" value="remember-me" /> Remember me
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* {(document).ready(function () {
                    ("#myInput").on("keyup", function () {
                        var value = (this).val().toLowerCase();
                        ("#tableData tr").filter(function () {
                            (this).toggle((this).text().toLowerCase().indexOf(value) > -1)
                        });
                    });
                })} */}
        </div>
    );
}

