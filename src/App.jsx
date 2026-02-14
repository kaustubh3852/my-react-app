const App = () => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  }

  const {firstName, lastName, age, country = "Norway"} = person;

  return (
    <>
    {country}
    </>
  );
}

export default App;