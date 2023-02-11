import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FacultyNotification from './FacultyNotification'
import FacultyApplications from './FacultyApplications'
import FacultyDashboard from './FacultyDashboard'
import FacultyProfile from './FacultyProfile'
import FacultySearch from './FacultySearch'
export default function FacultySidebar() {
    return (
        <div>
            <Router>
            <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">

                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted medium fw-bold text-uppercase px-3">
                                    MENU
                                </div>
                            </li>
                            <li>
                                <Link to="/fdashboard" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-solid fa-gauge"></i>
                                    </span>
                                    <span>
                                        DASHBOARD
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/fapplication" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <span>
                                        APPLICATIONS
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/fsearch" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <span>
                                        SEARCH JOBS
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/fnotification" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-regular fa-bell"></i>
                                    </span>
                                    <span>
                                        NOTIFICATIONS
                                        <span className="badge bg-secondary">New</span>
                                    </span>
                                </Link>
                            </li>
                            <li className="my-4">
                                <hr className="dropown-divider" />
                            </li>
                            <li>
                                <Link className="nav-link px-3 active" to="/fprofile">
                                    <span className="me-2">
                                        <i className="fa-regular fa-user me-2"></i>
                                    </span>
                                    <span>
                                        PROFILE
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link px-3 active" to="./index.html">
                                    <span className="me-2">
                                        <i className="fa-solid fa-right-from-bracket me-2"></i>
                                    </span>
                                    <span>
                                        LOGOUT
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
            <Routes>
                <Route path='fapplication' element={<FacultyApplications/>}/>
                <Route path='fdashboard' element={<FacultyDashboard/>}/>
                <Route path='fprofile' element={<FacultyProfile/>}/>
                <Route path='fsearch' element={<FacultySearch/>}/>
                <Route path='fnotification' element={<FacultyNotification/>}/>
            </Routes>
            </Router>
        </div>
    )
}
