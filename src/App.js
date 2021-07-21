import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("IDLE");

  const handleClick = async () => {
    try {
      setData([]);
      setStatus("PENDING");
      const resp = await axios.get(`https://api.nationalize.io/?name=${name}`);
      setData(resp?.data?.country ?? []);
      setStatus("IDLE");
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <main className="app">
      <section className="app-wrapper">
        <div>
          <h1>Predict the nationality of your name 🗺</h1>
          <div className="name">
            <label htmlFor="name-age">Enter your name:</label>
            <input
              id="name-age"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={name === ""} onClick={handleClick}>
            Check!
          </button>
          <h3>Probabilities are:</h3>
          {status === "PENDING" && <p>Loading ⌛</p>}
          {status === "ERROR" && <p>An error occurred 😱</p>}
          {status === "IDLE" && (
            <ul>
              {data.length > 0
                ? data.map((c, i) => (
                    <li>
                      {`${Math.floor(data[i]?.probability * 100)}% ➡ ${
                        data[i]?.country_id
                      }`}
                    </li>
                  ))
                : "No data 🤷‍♂️"}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
