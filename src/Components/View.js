import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

export default function View() {
    return (
        <>

            <main className="mt-5 pt-2">
                <span className="nav-item mr-5">
                    <i className="fas fa-user text-success"></i>
                    <span className="text-success">Logged In</span>
                </span>
                <div className="text-center py-2 mb-3" id="hp">
                    <h2>Applications</h2>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="container-fluid col-md-8 table-responsive ">
                            <div className="container">
                            
                                <table className=" table table-dark table-hover table-striped table-bordered border-light">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name of Faculty</th>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Qualification</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tableData">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td><a href="./profile1">FACULTY 1</a></td>
                                            <td>H.O.D</td>
                                            <td>Ph.D</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td><a href="./profile1">FACULTY 2</a></td>
                                            <td>PROFESSOR</td>
                                            <td>Ph.D</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td><a href="./profile1">FACULTY 3</a></td>
                                            <td>PROFESSOR</td>
                                            <td>Ph.D</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td><a href="./profile1">FACULTY 4</a></td>
                                            <td>ASSOCIATE PROFESSOR</td>
                                            <td>Ph.D</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">5</th>
                                            <td><a href="./profile1">FACULTY 5</a></td>
                                            <td>ASSOCIATE PROFESSOR</td>
                                            <td>Ph.D</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td><a href="./profile1">FACULTY 6</a></td>
                                            <td>ASSISTANT PROFESSOR</td>
                                            <td>M.Tech</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td><a href="./profile1">FACULTY 7</a></td>
                                            <td>ASSISTANT PROFESSOR</td>
                                            <td>M.Tech</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td><a href="./profile1">FACULTY 8</a></td>
                                            <td>ASSISTANT PROFESSOR</td>
                                            <td>M.Tech</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td><a href="./profile1">FACULTY 9</a></td>
                                            <td>ASSISTANT PROFESSOR</td>
                                            <td>M.Tech</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td><a href="./profile1">FACULTY 10</a></td>
                                            <td>ASSISTANT PROFESSOR</td>
                                            <td>M.Tech</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </main>
        </>
    );
} 