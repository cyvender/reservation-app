import "./App.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const Field = ({ label, placeholder }) => (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );

  return (
    <div className="App">
      Reservations <br></br>
      Name:
      <input placeholder="First..."></input>
      <input placeholder="Last..."></input>
      <Field placeholder="MM/DD/YYYY" label="Date of Birth:" />
      Gender:
      <select>
        <option>--</option>
        <option>Male</option>
        <option>Female</option>
        <option>I'm mentally ill</option>
      </select>
      <br></br>
      <Field label="Email:" />
      <Field label="Phone:" />
      Reservation Date:
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br></br>
      Location:
      <select>
        <option>--</option>
        <option>Lakewood</option>
        <option>Toms River</option>
      </select>
      <br></br>
      <button>Submit</button>
    </div>
  );
}

export default App;
