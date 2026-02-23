const Car = () => {
    const car = ['Ford', 'BMW', 'Audi'];
    return (
        <>
        <h1>My Cars</h1>
        <ul>
           {car.map((car, index) => <li key = {index}>I am { car }</li>)}
        </ul>
        </>
    );
}
export default Car;