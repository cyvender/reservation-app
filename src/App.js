import "./App.css";
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import Popup from "reactjs-popup";
import "react-datepicker/dist/react-datepicker.css";
import "reactjs-popup/dist/index.css";

import ImgItem from "./TextDisplay";
import { app } from "./firebase";
import FirebasePractice from "./FirebasePractice";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import AdminSide from "./AdminSide";
// import PageManagement from "./PageMangement";
import PassingProps from "./PassingPropsPractice";

export default function App({
  lakewood,
  setLakewood,
  tomsRiver,
  setTomsRiver,
}) {
  const [userInfo, setUserInfo] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [pprops, setPprops] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      email: email,
      phone: phone,
      startDate: startDate,
      location: location,
    };

    // try {
    //   const response = await;
    //   fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await;
    //   response.text();
    //   alert(data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // setUserInfo([...userInfo, formData]);
    // setFirstName("");
    // setLastName("");
    // setDob("");
    // setGender("");
    // setEmail("");
    // setPhone("");
    // setStartDate(new Date());
    // setLocation("");
  };

  const Field = ({ label, placeholder, onChange, value }) => (
    <div>
      <label>{label}</label>
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
  console.log("AppPage");

  return (
    <div className="App">
      Reservations <br></br>
      Name:
      <input
        value={firstName}
        placeholder="First..."
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <input
        value={lastName}
        placeholder="Last..."
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <Field
        value={dob}
        placeholder="MM/DD/YYYY"
        label="Date of Birth:"
        onChange={(e) => setDob(e.target.value)}
      />
      Gender:
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>--</option>
        <option>Male</option>
        <option>Female</option>
        <option>I'm mentally ill</option>
      </select>
      <br></br>
      <Field
        value={email}
        label="Email:"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Field
        value={phone}
        label="Phone:"
        onChange={(e) => setPhone(e.target.value)}
      />
      Reservation Date:
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <br></br>
      Location:
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option>--</option>
        <option>Lakewood</option>
        <option>Toms River</option>
      </select>
      <br></br>
      <button onClick={handleInput}>Submit</button>
      <br></br>
      <Popup
        trigger={<button onClick={handleInput}> Click to open popup </button>}
        position="right center"
      >
        <div>GeeksforGeeks</div>
        <button onClick={handleInput}>Click here</button>
      </Popup>
      <br></br>
      <ImgItem />
      <FirebasePractice
        lakewood={lakewood}
        setLakewood={setLakewood}
        tomsRiver={tomsRiver}
        setTomsRiver={setTomsRiver}
      />
      <PassingProps pprops={pprops} setPprops={setPprops} />
      Home Page APP
      {/* <nav>
        <ul>
          <li>
            <Link to="/second">Admin Side</Link>
          </li>
        </ul>
      </nav>
      <hr /> */}
      {/* <Outlet /> */}
    </div>
  );
}
