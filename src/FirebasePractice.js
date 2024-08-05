import React, { useState, useEffect } from "react";
import { app, db } from "./firebase";
import { ref, set, get } from "firebase/database";
import AdminSide from "./AdminSide";

function FirebasePractice({ lakewood, setLakewood, tomsRiver, setTomsRiver }) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");

  const [userID, setUserID] = useState("");

  const addData = async () => {
    if (place === "Lakewood (0)" || place === "Toms River (0)") {
      alert("Chosen Location is full");
    } else {
      try {
        await set(ref(db, "users/" + userID), {
          Name: name,
          Place: place,
        });
      } catch (error) {
        console.error("Error saving data:", error);
      }

      if (place.includes("Lakewood")) {
        setLakewood(lakewood - 1);
      } else if (place.includes("Toms River")) {
        setTomsRiver(tomsRiver - 1);
      }
    }
  };

  return (
    <>
      <br></br>Enter UserName FB:
      <input value={userID} onChange={(e) => setUserID(e.target.value)}></input>
      <br></br>Enter Name for FB:
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <br></br>Select Place for FB:
      <select value={place} onChange={(e) => setPlace(e.target.value)}>
        <option>--</option>
        <option>Lakewood ({lakewood})</option>
        <option>Toms River ({tomsRiver})</option>
      </select>
      <br></br>
      <button onClick={addData}>Save to FB</button>
    </>
  );
}

export default FirebasePractice;
