const App = () => {
  const myElement = () => {
    return (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );
  };

  return (
    <>
    {myElement()}
    </>
  );
}

export default App;