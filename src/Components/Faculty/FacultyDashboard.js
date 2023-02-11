import React from 'react'
import PieChart from '../PieChart'

export default function FacultyDashboard() {
  return (
    <div>
         <main className="mt-5 pt-2">
        <span className="nav-item mr-5">
            <i className="fas fa-user text-success"></i>
            <span className="text-success">Logged In</span>
          </span>
        <section id="analytics">
            <div className="container mt-2">
                <h2 className="text-center mb-5">Dashboard</h2>
                <div className="row">

    
                    {/* <!-- Pie Chart --> */}
                    <div className="col-md-3"></div>
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
    </div>
  )
}
