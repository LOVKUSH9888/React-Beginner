import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  // State variable to hold the fetched data
  const [data, setData] = useState([]);

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setData(response.data); // Set the fetched data in the state variable
        console.log(response); // Log the response to the console for debugging
      })
      .catch((error) => {
        console.error("Error fetching data", error); // Log any error that occurred during the data fetching
      });
  }, []);

  // Rendering the component
  return (
    <>
      <h1>Data Fetching</h1>

      <ul>
        {data.map((todos) => (
          <li key={todos.id}>{todos.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
