const App = () => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    car: {
      brand: "Ford",
      model: "Mustang",
    }
  };

  const {firstName, car: {brand, model}} = person;

  return (
    <>
    My name is {firstName} and I drive a {brand} {model};
    </>
  );
}

export default App;