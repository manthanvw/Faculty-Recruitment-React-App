import React, { useState } from 'react'
import './Testing1.css'
export default function Test() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSidebar = () => {
        console.log("It works")
      setIsToggled(!isToggled);
    }
  
   
    return (
        <>
            <div  className="d-flex mt-5 " id="wrapper">
                <div className="bg-dark text-white" id="sidebar-wrapper">

                    <div className="list-group list-group-flush my-3">
                        <div className="text-muted small fw-bold text-uppercase px-3">
                            MENU
                        </div>

                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active">
                            <i className="fa-solid fa-gauge me-2"></i>DASHBOARD
                        </a>
                        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <i className="fa-solid fa-magnifying-glass me-2 "></i>MONITOR
                        </a>
                        <a className="list-group-item list-group-item-action bg-transparent second-text fw-bold" data-bs-toggle="collapse"
                            href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <span className="me-2">
                                <i className="fa-solid fa-person-chalkboard"></i>
                            </span>
                            <span>
                                RECRUITMENT
                            </span>
                            <span className="right-icon ms-auto">
                                <i className="fa-solid fa-chevron-down"></i>
                            </span>
                        </a>
                        <div className="collapse" id="collapseExample">
                            <div>
                                <ul className="navbar-nav ps-3">
                                    <li>
                                        <a href="./Post.html" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                            <span className="me-2">
                                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                            </span>
                                            <span>
                                                POST A VACANCY
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./Edit.html" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                            <span className="me-2">
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </span>
                                            <span>
                                                EDIT VACANCY
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./View.html" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                            <span className="me-2">
                                                <i className="fa-regular fa-file-lines"></i>
                                            </span>
                                            <span>
                                                VIEW APPLICATIONS
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="./Notifications.html" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                            <span className="me-2">
                                <i className="fa-regular fa-bell"></i>
                            </span>
                            <span>
                                NOTIFICATIONS
                            </span>
                        </a>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" onClick={toggleSidebar}></i>
                            <h2 className="fs-2 m-0">Applications</h2>
                        </div>

                        <button className="navbar-toggler"  type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user me-2"></i>John Doe
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}