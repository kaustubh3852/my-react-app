const App = () => {
  const fruitlist = ['apple', 'banana', 'cherry'];
  return (
    <ul>
      {fruitlist.map(fruit => 
        <li key = {fruit}>{fruit}</li>
      )}
    </ul>
  );
}

export default App;