import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [rows, setRows] = useState([]); // State to store table rows

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Define the function inside the component to have access to the state
  const handleButtonClick = () => {
    fetch(`http://localhost/project2/backend/date.php ? date=${selectedDate}`)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data);
        // Update the rows in the Table component
        setRows(data.map(row => createData(row.time, row.delhi, row.date)));
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  // Helper function to structure data
  const createData = (timeStamp, delhi, date) => {
    return { timeStamp, delhi, date };
  };

  return (
    <div className="MainDash">
      <div className="MainDashHeader">
        
        <h1>Dashboard</h1>
        <div className="DateSelector">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="DateInput"
          />
          <button onClick={handleButtonClick} className="DateButton">
            Predict
          </button>
        </div>
      </div>
      <Cards />
      <Table rows={rows} /> {/* Pass rows as a prop to the Table component */}
    </div>
  );
};

export default MainDash;
