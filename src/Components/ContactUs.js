import React from 'react'
import Navbar from './Navbar';

export default function ContactUs()
{
    return(
        <>
        <div className="container mt-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="row">
          {/* <!-- Contact Form --> */}
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="nameInput">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="Enter your name"/>
              </div>
              <div className="form-group">
                <label for="emailInput">Email</label>
                <input type="email" className="form-control" id="emailInput" placeholder="Enter your email"/>
              </div>
              <div className="form-group">
                <label for="messageInput">Message</label>
                <textarea className="form-control" id="messageInput" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary my-3">Send Message</button>
            </form>
          </div>
      
          {/* <!-- Contact Details --> */}
          <div className="col-md-6">
            <h2>Our Location</h2>
            <p>123 Main Street</p>
            <p>City, State 12345</p>
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
        </>
    );
}