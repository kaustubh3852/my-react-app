const App = () => {
  let greeting = (name, age) => {
    return `Hello ${name}! You are ${age} years old`;
  };

  return (
    <>
    {greeting("John", 30)}
   </>
  );
}

export default App; 