import React, { useState, useEffect } from "react";
//even though Router is not used, without it it throws an error
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import App from "./App";
import AdminSide from "./AdminSide";
//import FirebasePractice, { lakewood, setLakewood } from "./FirebasePractice";

export default function Pages() {
  const [lakewood, setLakewood] = useState(4);
  const [tomsRiver, setTomsRiver] = useState(4);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="app"
            element={
              <App
                lakewood={lakewood}
                setLakewood={setLakewood}
                tomsRiver={tomsRiver}
                setTomsRiver={setTomsRiver}
              />
            }
          />
          <Route
            path="admin"
            element={
              <AdminSide
                lakewood={lakewood}
                setLakewood={setLakewood}
                tomsRiver={tomsRiver}
                setTomsRiver={setTomsRiver}
              />
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/nothing-here">Nothing Here</Link>
        </li>
        <li>
          <Link to="/app">App</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
      <hr />
      {/* Don't understand what Outlet does */}
      <Outlet />
    </div>
  );
}

// function In() {
//   const [lock, setLock] = useState(true);
//   const [num, setNum] = useState(0);
//   const [pass, setPass] = useState(0);
//   ;
// }

function Home() {
  console.log("Home");
  const [num, setNum] = useState(0);
  const [pass, setPass] = useState(0);

  return (
    <>
      {pass !== "123" && (
        <>
          Password:<input onChange={(e) => setNum(e.target.value)}></input>
          <button onClick={() => setPass(num)}>enter</button>
        </>
      )}
      {pass === "123" && "Home Page"}
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
