import React, { useState } from 'react';

export default function Table(props) {

    const [data, setData] = useState([
        { name: "John", age: 30, country: "USA", gender: "male" },
        { name: "Jane", age: 25, country: "Canada", gender: "female" },
        { name: "Bob", age: 35, country: "USA", gender: "male" },
        { name: "Kab", age: 35, country: "USA", gender: "female" }
      ]);
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
            <p className='container-fluid px-2'>
                Select Institution:
                <select className="btn btn-secondary dropdown-toggle mx-2 p-0" value={selectedIns} onChange={handleChangeIns}>
                    {optionIns.map(val => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
                Select Department:
                <select className='mx-2' value={selectedDept} onChange={handleChangeDept}>
                    {optionDept.map(val => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
                Select Subject:
                <select className='mx-2' value={selectedSub} onChange={handleChangeSub}>
                    {optionSub.map(val => (
                        <option key={val} value={val}>
                            {val}
                        </option>
                    ))}
                </select>
                    </p>

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

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        APPLY
                                    </button>


                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">Alert!</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    Login to apply!
                                                </div>
                                                <div className="modal-footer">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
