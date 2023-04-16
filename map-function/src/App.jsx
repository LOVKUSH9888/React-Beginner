function App() {
  const data = [
    { id: 1, city: "New York", population: 854321 },
    { id: 2, city: "Los Angeles", population: 765432 },
    { id: 3, city: "Chicago", population: 276543 }
  ];

  console.log(data);

  const employees = [{
    id: 12345,
    name: "John",
    salary: "25,000",
    age: 21
  }];

  console.log(employees);

  return (
    <>
      {data.map((item) => (
        <ul key={item.id}>
          <li>id: {item.id}</li>
          <li>city: {item.city}</li>
          <li>population: {item.population}</li>
        </ul>
      ))}

      {employees.map((identifier)=>{
        return (
          <ul key = {identifier.id}>
            <li>id: {identifier.id}</li>
            <li>name: {identifier.name}</li>
          </ul>
        );
      })}
    </>
  );
}

export default App;
