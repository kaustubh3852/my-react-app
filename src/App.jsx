const App = () => {
  const dateInfo = (dat) => {
    const d = dat.getDate();
    const m = dat.getMonth();
    const y = dat.getYear();

    return [d, m, y];
  };

  const [date, month, year]  = dateInfo(new Date());

  return (
    <>
    The year is {year}
    </>
  );
}

export default App;