const App = () => {
  const items = ['apple', 'banana', 'cherry'];
  const list = `You have ${items.length} items:
${items.join("\n")}`;


  return (
    <pre>
    {list}
    </pre>
  );
}

export default App;