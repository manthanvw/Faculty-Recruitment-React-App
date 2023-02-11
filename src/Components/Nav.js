import React from 'react'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div className="container-fluid">
                            <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                            </button>
                            <Link className="navbar-brand me-auto " to='/'>Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Routes>
                    <Route path='about' element={<AboutUs />} />
                    <Route path='contact' element={<ContactUs />} />
                </Routes>
        </Router>
        </>
    );
}