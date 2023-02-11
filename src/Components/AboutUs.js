import React from 'react'
import Navbar from './Navbar';
import Logo from './AboutUs.jpg';

export default function AboutUs() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-5">About Us</h1>
        <div className="row">
          {/* <!-- About Us Image --> */}
          <div className="col-md-6">
            <img src={Logo} alt="About Us Image" className="img-fluid mb-4" />
          </div>

          {/* <!-- About Us Text --> */}
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at massa in tellus maximus varius eu eu erat. Vivamus sed dapibus tellus. Duis ut massa tempus, suscipit est ut, elementum lectus.</p>
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at massa in tellus maximus varius eu eu erat. Vivamus sed dapibus tellus. Duis ut massa tempus, suscipit est ut, elementum lectus.</p>
            <h2>Meet the Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at massa in tellus maximus varius eu eu erat. Vivamus sed dapibus tellus. Duis ut massa tempus, suscipit est ut, elementum lectus.</p>
          </div>
        </div>
      </div>
    </>
  );
}