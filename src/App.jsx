const App = () => {
  const numbers = [1,2,3,4];
  const doubled = numbers.map(x => x * 2);

  return(
    <>
    {doubled.join(",")}
    </>
  );
}

export default App;