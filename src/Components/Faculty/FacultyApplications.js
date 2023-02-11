import React from 'react'

export default function FacultyApplications() {
  return (
    <div>
        <main>
        <div className="container-fluid mt-5">

              <h2 className="mt-5 py-2" id="Academics">APPLICATIONS</h2>   
              <div className="table-responsive p-2">
                  <table className=" table table-dark table-hover table-striped table-bordered border-light">
                    <thead>
                        <tr>
                                <th style={{color:"white"}}>Serial No.</th>
                                <th style={{color:"white"}}>Institution</th>
                                <th style={{color:"white"}}>Department</th>
                                <th style={{color:"white"}}>Subject</th>
                                <th style={{color:"white"}}>Job Description</th>
                                <th style={{color:"white"}}>Status</th>
                        </tr>

                    </thead>
                    <tbody>

                        <tr id="rows" height = "40" >
                            <td>1</td>
                            <td>KMEC</td>
                            <td>CSE</td>
                            <td>C++</td>
                            <td>PDF</td>
                            <td>Processing</td>
                        </tr>
                        <tr id="rows" height = "40" >
                            <td>2</td>
                            <td>NGIT</td>
                            <td>CSE</td>
                            <td>Python</td>
                            <td>PDF</td>
                            <td>Accepted</td>
                        </tr>
                        <tr id="rows" height = "40" >
                            <td>3</td>
                            <td>KMIT</td>
                            <td>CSE</td>
                            <td>Java</td>
                            <td>PDF</td>
                            <td>Rejected</td>
                        </tr>
                       
                    </tbody>
                  </table>
              </div>
        
        </div>
    </main>
    </div>
  )
}
