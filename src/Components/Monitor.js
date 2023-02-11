import React from 'react'


export default function Monitor() {
    return (
        <>
            <main className="mt-5 pt-2">
                <span className="nav-item mr-5">
                    <i className="fas fa-user text-success"></i>
                    <span className="text-success px-2">Logged In</span>
                </span>
                <div className="conatainer-fluid ms-2">
                    <nav>
                        <ul className="nav nav-tabs">
                            <div className="nav nav-tab" id="nav-tab" role="tablist">
                                <a className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home"
                                    type="button" role="tab" aria-controls="nav-home" aria-selected="true">CSE</a>

                                <a className="nav-link " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                                    type="button" role="tab" aria-controls="nav-profile" aria-selected="true">CSM</a>

                                <a className="nav-link " id="nav-contacts-tab" data-bs-toggle="tab" data-bs-target="#nav-contacts"
                                    type="button" role="tab" aria-controls="nav-contacts" aria-selected="true">CSD</a>
                            </div>
                        </ul>
                    </nav>
                    </div>
                    
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="container-fluid col-md-8 table-responsive ">
                                <div className="container mt-3">
                                    
                                            <table className=" table table-dark table-hover table-striped table-bordered border-light">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name of Faculty</th>
                                                        <th scope="col">Designation</th>
                                                        <th scope="col">Qualification</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tableData_CSE">
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td><a href="./profile">FACULTY 1</a></td>
                                                        <td>H.O.D</td>
                                                        <td>Ph.D</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td><a href="./profile">FACULTY 2</a></td>
                                                        <td>PROFESSOR</td>
                                                        <td>Ph.D</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td><a href="./profile">FACULTY 3</a></td>
                                                        <td>PROFESSOR</td>
                                                        <td>Ph.D</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td><a href="./profile">FACULTY 4</a></td>
                                                        <td>ASSOCIATE PROFESSOR</td>
                                                        <td>Ph.D</td>
                                                    </tr>

                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td><a href="./profile">FACULTY 5</a></td>
                                                        <td>ASSOCIATE PROFESSOR</td>
                                                        <td>Ph.D</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td><a href="./profile">FACULTY 6</a></td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>M.Tech</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td><a href="./profile">FACULTY 7</a></td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>M.Tech</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td><a href="./profile">FACULTY 8</a></td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>M.Tech</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td><a href="./profile">FACULTY 9</a></td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>M.Tech</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">10</th>
                                                        <td><a href="./profile">FACULTY 10</a></td>
                                                        <td>ASSISTANT PROFESSOR</td>
                                                        <td>M.Tech</td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                            </div>
                            <div className="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="container-fluid col-md-8 table-responsive ">
                                    <div className="container mt-3">
                                        
                                                <table className=" table table-dark table-hover table-striped table-bordered border-light">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Name of Faculty</th>
                                                            <th scope="col">Designation</th>
                                                            <th scope="col">Qualification</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="tableData_CSM">
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td><a href="./profile">FACULTY 1</a></td>
                                                            <td>H.O.D</td>
                                                            <td>Ph.D</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td><a href="./profile">FACULTY 2</a></td>
                                                            <td>PROFESSOR</td>
                                                            <td>Ph.D</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td><a href="./profile">FACULTY 3</a></td>
                                                            <td>PROFESSOR</td>
                                                            <td>Ph.D</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <td><a href="./profile">FACULTY 4</a></td>
                                                            <td>ASSOCIATE PROFESSOR</td>
                                                            <td>Ph.D</td>
                                                        </tr>

                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <td><a href="./profile">FACULTY 5</a></td>
                                                            <td>ASSOCIATE PROFESSOR</td>
                                                            <td>Ph.D</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">6</th>
                                                            <td><a href="./profile">FACULTY 6</a></td>
                                                            <td>ASSISTANT PROFESSOR</td>
                                                            <td>M.Tech</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">7</th>
                                                            <td><a href="./profile">FACULTY 7</a></td>
                                                            <td>ASSISTANT PROFESSOR</td>
                                                            <td>M.Tech</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">8</th>
                                                            <td><a href="./profile">FACULTY 8</a></td>
                                                            <td>ASSISTANT PROFESSOR</td>
                                                            <td>M.Tech</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">9</th>
                                                            <td><a href="./profile">FACULTY 9</a></td>
                                                            <td>ASSISTANT PROFESSOR</td>
                                                            <td>M.Tech</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">10</th>
                                                            <td><a href="./profile">FACULTY 10</a></td>
                                                            <td>ASSISTANT PROFESSOR</td>
                                                            <td>M.Tech</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                    </div>

                                </div>
                                <div className="tab-pane fade p-3" id="nav-contacts" role="tabpanel" aria-labelledby="nav-contacts-tab">
                                    <div className="container-fluid col-md-8 table-responsive ">
                                        <div className="container mt-3">
                                        
                                                    <table className=" table table-dark table-hover table-striped table-bordered border-light">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">Name of Faculty</th>
                                                                <th scope="col">Designation</th>
                                                                <th scope="col">Qualification</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="tableData_CSD">
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td><a href="./profile">FACULTY 1</a></td>
                                                                <td>H.O.D</td>
                                                                <td>Ph.D</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td><a href="./profile">FACULTY 2</a></td>
                                                                <td>PROFESSOR</td>
                                                                <td>Ph.D</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td><a href="./profile">FACULTY 3</a></td>
                                                                <td>PROFESSOR</td>
                                                                <td>Ph.D</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">4</th>
                                                                <td><a href="./profile">FACULTY 4</a></td>
                                                                <td>ASSOCIATE PROFESSOR</td>
                                                                <td>Ph.D</td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">5</th>
                                                                <td><a href="./profile">FACULTY 5</a></td>
                                                                <td>ASSOCIATE PROFESSOR</td>
                                                                <td>Ph.D</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">6</th>
                                                                <td><a href="./profile">FACULTY 6</a></td>
                                                                <td>ASSISTANT PROFESSOR</td>
                                                                <td>M.Tech</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">7</th>
                                                                <td><a href="./profile">FACULTY 7</a></td>
                                                                <td>ASSISTANT PROFESSOR</td>
                                                                <td>M.Tech</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">8</th>
                                                                <td><a href="./profile">FACULTY 8</a></td>
                                                                <td>ASSISTANT PROFESSOR</td>
                                                                <td>M.Tech</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">9</th>
                                                                <td><a href="./profile">FACULTY 9</a></td>
                                                                <td>ASSISTANT PROFESSOR</td>
                                                                <td>M.Tech</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">10</th>
                                                                <td><a href="./profile">FACULTY 10</a></td>
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