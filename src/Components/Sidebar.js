import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Monitor from './Monitor';
import Post from './Post';
import Edit from './Edit';
import View from './View';
import Notification from './Notification';
import Profile  from './Profile';
import Profile1  from './Profile1';
export default function Sidebar()
{
    return(
        <Router>

        <div className="">
            <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabIndex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">

                <div className="offcanvas-body p-0">
                    <nav className="navbar-dark">
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold text-uppercase px-3">
                                    MENU
                                </div>
                            </li>
                            <li>
                                <Link to="/dashboard" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-solid fa-gauge"></i>
                                    </span>
                                    <span>
                                        DASHBOARD
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/monitor" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <span>
                                        MONITOR
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link className="nav-link px-3 sidebar-link nav-item-dark" data-bs-toggle="collapse"
                                    to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <span className="me-2">
                                        <i className="fa-solid fa-person-chalkboard"></i>
                                    </span>
                                    <span>
                                        RECRUITMENT
                                    </span>
                                    <span className="right-icon ms-auto">
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </span>
                                </Link>
                                <div className="collapse" id="collapseExample">
                                    <div>
                                        <ul className="navbar-nav ps-3">
                                            <li>
                                                <Link to="/post" className="nav-link px-3">
                                                    <span className="me-2">
                                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                                    </span>
                                                    <span>
                                                        POST A VACANCY
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/edit" className="nav-link px-3">
                                                    <span className="me-2">
                                                        <i className="fa-regular fa-pen-to-square"></i>
                                                    </span>
                                                    <span>
                                                        EDIT VACANCY
                                                    </span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/view" className="nav-link px-3">
                                                    <span className="me-2">
                                                        <i className="fa-regular fa-file-lines"></i>
                                                    </span>
                                                    <span>
                                                        VIEW APPLICATIONS
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link to="/notification" className="nav-link px-3 active">
                                    <span className="me-2">
                                        <i className="fa-regular fa-bell"></i>
                                    </span>
                                    <span>
                                        NOTIFICATIONS
                                        <span className="badge bg-secondary px-1 mx-2">New</span>
                                    </span>
                                </Link>
                            </li>
                            <li className="my-2">
                                <hr className="dropown-divider" />
                            </li>

                            {/* <li>
                                <Link to="./profile.html" className="nav-link px-3 active">
                                    <span className="me-2">
                                    <i className="fa-regular fa-user me-2"></i>
                                    </span>
                                    <span>
                                            PROFILE
                                    </span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/" className="nav-link px-3 active">
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
        </div>
        <Routes>
            <Route exact path='dashboard' element={<Dashboard/>}/>
            <Route exact path='monitor' element={<Monitor/>}/>
            <Route exact path='post' element={<Post/>}/>
            <Route exact path='edit' element={<Edit/>}/>
            <Route exact path='view' element={<View/>}/>
            <Route exact path='notification' element={<Notification/>}/>
            <Route exact path='profile' element={<Profile/>}/>
            <Route exact path='profile1' element={<Profile1/>}/>

        </Routes>
        </Router>
    );
}