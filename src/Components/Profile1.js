import React from 'react'
import ComponentProfile1 from './ComponentProfile1'
import Logo from './Picture1.png'
export default function Profile() {
    return (
        <div>
            <main>
                <div className="container-fluid mt-5 ml-2">
                    <img src={Logo} className="img-thumbnail rounded float-end" alt="..." id="profilePic" />
                    <div>

                        <h1 className='py-2'>
                            ABCD XYZ
                        </h1>
                        <p>abcdxyz@gmail.com</p>
                    </div>
                    <hr />



                    <h2 id="Academics"><b>EXPERIENCE</b></h2>
                    <div className="table-responsive">
                        <table className=" table table-dark table-hover table-striped table-bordered border-light">
                            <thead>

                                <tr  >
                                    <th style={{color:"white"}}>Duration</th>
                                    <th style={{color:"white"}}>Institution</th>
                                    <th style={{color:"white"}}>University/Board</th>
                                    <th style={{color:"white"}}>Postion</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr id="rows" height="40" >
                                    <td>2019-2022</td>
                                    <td>ABC ENG. COLLEGE</td>
                                    <td>JNTUH</td>
                                    <td>SR. PROFESSOR</td>
                                </tr>
                                <tr id="rows" height="40">
                                    <td>2017-2019</td>
                                    <td>Narayana ENG College,TS</td>
                                    <td>JNTUH</td>
                                    <td>PROFESSOR</td>
                                </tr>
                                <tr id="rows" height="40">
                                    <td>2007-2017</td>
                                    <td>XYZ ENG COLLEGE</td>
                                    <td>OU</td>
                                    <td>PROFESSOR</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 id="Academics"><b>Academic Information</b></h2>
                    <div className="table-responsive">
                        <table className=" table table-dark table-hover table-striped table-bordered border-light">
                            <thead>

                                <tr  >
                                    <th style={{color:'white'}}>Course Details</th>
                                    <th style={{color:'white'}}>Institution</th>
                                    <th style={{color:'white'}}>University/Board</th>
                                    <th style={{color:'white'}}>Year of passing</th>
                                    <th style={{color:'white'}}>CGPA</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr id="rows" height="40" >
                                    <td>Bachelor of Technology(Computer Science)</td>
                                    <td>Keshav Memorial Institute of Technology</td>
                                    <td>JNTUH</td>
                                    <td>2025</td>
                                    <td>8.8</td>
                                </tr>
                                <tr id="rows" height="40">
                                    <td>Intermediate - MPC</td>
                                    <td>Narayana Junior College,TS</td>
                                    <td>TS-BIE</td>
                                    <td>2021</td>
                                    <td>97%</td>
                                </tr>
                                <tr id="rows" height="40">
                                    <td>School of Secondary Certificate</td>
                                    <td>All Saints High School,TS</td>
                                    <td>SSC</td>
                                    <td>2019</td>
                                    <td>9.5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ComponentProfile1/>
                    <div className="btn-group">
                        <button type="button" className="btn btn-success mx-2 my-2">Accept</button>
                        <button type="button" className="btn btn-danger mx-2 my-2">Reject</button>
                    </div>
                </div>
            </main>

        </div>
    )
}
