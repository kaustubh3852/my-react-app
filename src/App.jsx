const App = () => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  const {firstName, lastName, age} = person;

  return (
    <>
    
    {firstName}

    </>
  );
}

export default App;