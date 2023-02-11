import React from 'react'
import BarChart from './BarChart';
import Navbar from './Navbar';
import PieChart from './PieChart';
import Sidebar from './Sidebar';
// import './style.css';

export default function Dashboard() {
    return (
        <>
    
        <div className="">
            <main className="mt-5 pt-2">
        <span className="nav-item mr-5">
            <i className="fas fa-user text-success"></i>
            <span className="text-success">Logged In</span>
          </span>
        <section id="analytics">
            <div className="container mt-5">
                <h2 className="text-center mb-5">Dashboard</h2>
                <div className="row">
                    {/* <!-- Bar Chart --> */}
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                Vacancies in each branch
                            </div>
                            <div className="card-body">
                               <BarChart/>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Pie Chart --> */}
                    <div className="col-md-6">
                        <div className="card mb-4">
                            <div className="card-header">
                                Applications
                            </div>
                            <div className="card-body">
                                <PieChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </main>
            {/* <BarChart/> */}
            
        </div>
 </>
    );
}