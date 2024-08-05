import React, { useState } from "react";
import { Link } from "react-router-dom";
// import App from "./App";
import { app, db } from "./firebase";
import { ref, set, get } from "firebase/database";
import FirebasePractice from "./FirebasePractice";

export default function AdminSide({
  lakewood,
  setLakewood,
  tomsRiver,
  setTomsRiver,
}) {
  // console.log("Props received:", {
  //   lakewood,
  //   setLakewood,
  //   tomsRiver,
  //   setTomsRiver,
  // });
  const [userData, setUserData] = useState({});
  const [newLakewood, setNewLakewood] = useState("");
  const [newTomsRiver, setNewTomsRiver] = useState("");
  const [newCity, setNewCity] = useState("");
  const [city, setCity] = useState("");
  const [num, setNum] = useState("");
  const [pass, setPass] = useState("");

  async function getData() {
    try {
      const snapshot = await get(ref(db, "users/"));
      if (snapshot.exists()) {
        const data = snapshot.val();
        setUserData(data);
        console.log(data);
        console.log("Data available");
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }
  // function setLocation() {
  //   setLakewood(newLakewood);
  //   console.log("setLocation");
  // }

  const consoleFunction = () => {
    console.log("consoleFunction");
  };
  console.log("Admin Page");

  return (
    <div>
      {pass !== "123" && (
        <>
          Password:<input onChange={(e) => setNum(e.target.value)}></input>
          <button onClick={() => setPass(num)}>enter</button>
        </>
      )}
      {pass === "123" && (
        <div>
          Welcome Admin
          <button onClick={getData}>Get data</button>
          <ul>
            {Object.entries(userData).map(([userID, userData]) => (
              <li key={userID}>
                User ID: {userID}, Name: {userData.Name}, Email:{" "}
                {userData.Email}, Location: {userData.Place}
              </li>
            ))}
          </ul>
          <br></br>
          Update Locations:<br></br>
          Lakewood{" "}
          <input
            value={newLakewood}
            onChange={(e) => setNewLakewood(e.target.value)}
          ></input>
          <button onClick={() => setLakewood(newLakewood)}>Enter</button>
          <br></br>
          Toms River{" "}
          <input
            value={newTomsRiver}
            onChange={(e) => setNewTomsRiver(e.target.value)}
          ></input>
          <button onClick={() => setTomsRiver(newTomsRiver)}>Enter</button>
          <br></br>
          New City Name:
          <input
            // value={newTomsRiver}
            onChange={(e) => setNewCity(e.target.value)}
          ></input>
          <button onClick={() => setCity(newCity)}>Enter</button>
          <br></br>
          {city} <br></br>
          <button onClick={() => setPass("0")}>Log out</button>
          <hr />
        </div>
      )}
    </div>
  );
}
