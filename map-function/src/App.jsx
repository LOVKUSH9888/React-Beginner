import data from "./Components/data";
import employees from "./Components/employees";
function App() {

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
