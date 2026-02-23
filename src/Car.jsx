const Car = () => {
    const cars = [
        {id: 1001, brand: 'Ford'},
        {id: 1002, brand: 'BMW'},
        {id: 1003, brand: 'Audi'}
    ];
    return (
        <>
        <h1>My Cars</h1>
        <ul>
            {cars.map((cars) => <li key = {cars.id}>I am {cars.brand}</li>)}
        </ul>
        </>
    );
}

export default Car;