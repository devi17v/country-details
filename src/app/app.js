import React, { useState, useEffect } from "react";
import Country from "./country";
import "./app.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Country Details</h1>
      <h3>In this page we have to see {data.length} countries</h3>
      <div className="app-wrapper">
        {data.map((country) => (
          <Country country={country} />
        ))}
      </div>
    </>
  );
};
export default App;
