import React,{useState} from 'react'

export default function FacultySearch() {
    let d =
    [{ No: 1, Ins: "KMIT", Dept: 'CSE', Sub: "C++", Job: "PDF" },
    { No: 2, Ins: "KMEC", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
    { No: 3, Ins: "NGIT", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },
    { No: 4, Ins: "KMEC", Dept: 'CSE', Sub: "C++", Job: "PDF" },
    { No: 5, Ins: "NGIT", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
    { No: 6, Ins: "KMIT", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },
    { No: 7, Ins: "NGIT", Dept: 'CSE', Sub: "C++", Job: "PDF" },
    { No: 8, Ins: "KMIT", Dept: 'CSM', Sub: "Introduction to Machine Learning", Job: "PDF" },
    { No: 9, Ins: "KMEC", Dept: 'CSD', Sub: "Data Science", Job: "PDF" },

    ]
    const [data, setData] = useState(d);
    const [selectedIns, setSelectedIns] = useState("All");
    const [selectedDept, setSelectedDept] = useState("All");
    const [selectedSub, setSelectedSub] = useState("All");
    const optionIns = ["All", "KMIT", "NGIT", "KMEC"]
    const optionDept = ["All", "CSE", "CSM", "CSD"];
    const optionSub = ["All", "Data Science", "Introduction to Machine Learning","C++"];

    const handleChangeIns = event => {
        setSelectedIns(event.target.value);
    };
    const handleChangeDept = event => {
        setSelectedDept(event.target.value);
    };
    const handleChangeSub = event => {
        setSelectedSub(event.target.value);
    };

    let filteredData = data;

    if (selectedIns !== "All") {
        filteredData = filteredData.filter(val => val.Ins === selectedIns);
        // selectedNo = selectedDept = selectedSub = "All" ;
    }
    if (selectedDept !== "All") {
        filteredData = filteredData.filter(val => val.Dept === selectedDept);
    }
    if (selectedSub !== "All") {
        filteredData = filteredData.filter(val => val.Sub === selectedSub);
    }

  return (
    <div>
        <main className="mt-5 pt-2">
        <span className="nav-item mr-5">
            <i className="fas fa-user text-success"></i>
            <span className="text-success">Logged In</span>
          </span>
        <div className="container-fluid col-md-8 table-responsive ">
        <div>
        <div className='container-fluid px-2 btn-group'>
                <p className='col-sm-4'>
                    Institution: 
                    <select className='btn btn-secondary dropdown-toggle ms-2 p-0 ' value={selectedIns} onChange={handleChangeIns}>
                        {optionIns.map(val => (
                            <option key={val} value={val}>
                                {val}
                            </option>
                        ))}
                    </select>
                </p>
                <p className='col-sm-4'>
                    Department:
                    <select className='btn btn-secondary dropdown-toggle ms-2 p-0' value={selectedDept} onChange={handleChangeDept}>
                        {optionDept.map(val => (
                            <option key={val} value={val}>
                                {val}
                            </option>
                        ))}
                    </select>
                </p>
                <p className='col-sm-4'>
                    Subject:
                    <select className='btn btn-secondary dropdown-toggle ms-2 p-0 col-md-2' value={selectedSub} onChange={handleChangeSub}>
                        {optionSub.map(val => (
                            <option key={val} value={val}>
                                {val}
                            </option>
                        ))}
                    </select>
                </p>
                    </div>

            <table className=" table table-dark table-hover table-striped table-bordered border-light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Institution</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Job Description</th>
                        <th>Apply</th>
                    </tr>

                </thead>
                <tbody>
                    {filteredData.map(val => (
                        <tr>
                            <td>{val.No}</td>
                            <td>{val.Ins}</td>
                            <td>{val.Dept}</td>
                            <td>{val.Sub}</td>
                            <td>{val.Job}</td>
                            <td>
                                <a href="#">

                                    <button type="button" className="btn btn-primary" >
                                        APPLY
                                    </button>


                                    
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    </main>

    </div>
  )
}
