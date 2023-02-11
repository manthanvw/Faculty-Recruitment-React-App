import React, { useState } from 'react';

export default function Table1() {
  const [data, setData] = useState([
    { name: "John", age: 30, country: "USA", gender: "male" },
    { name: "Jane", age: 25, country: "Canada", gender: "female" },
    { name: "Bob", age: 35, country: "USA", gender: "male" },
    { name: "Kab", age: 35, country: "USA", gender: "female" }
  ]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const countryOptions = ["All", "USA", "Canada"];
  const genderOptions = ["All", "male", "female"];

  const handleCountryChange = event => {
    setSelectedCountry(event.target.value);
  };
  
  const handleGenderChange = event => {
    setSelectedGender(event.target.value);
  };

  let filteredData = data;
  if (selectedCountry !== "All") {
    filteredData = filteredData.filter(val => val.country === selectedCountry);
  }
  if (selectedGender !== "All") {
    filteredData = filteredData.filter(val => val.gender === selectedGender);
  }

  return (
    <div>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countryOptions.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select value={selectedGender} onChange={handleGenderChange}>
        {genderOptions.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(val => (
            <tr>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.country}</td>
              <td>{val.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
