// / This hook is used to perform side effects, such as fetching data or updating the DOM.
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); //in the array we ca fill varioous kind of dependencies

  return (
    <div>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
}
