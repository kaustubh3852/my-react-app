const App = () => {
  const authenticated = true;

  if (authenticated) {
    return <h1>Welcome</h1> 
  } else {
    return <h1>Please log in</h1>
  }
};
export default App;