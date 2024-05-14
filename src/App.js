import "./App.css";

function App() {
  const Field = ({ label, placeholder }) => (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );

  return (
    <div className="App">
      Reservations <br></br>
      Name: <br></br>
      <input placeholder="First..."></input>
      <input placeholder="Last..."></input>
      <Field placeholder="MM/DD/YYYY" label="Date of Birth:" />
      Gender:
      <select placeholder="select">
        <option>--</option>
        <option>Male</option>
        <option>Female</option>
        <option>I'm mentally ill</option>
      </select>
      <br></br>
      Email:<input></input>
      <br></br>Phone:<input></input>
    </div>
  );
}

export default App;
