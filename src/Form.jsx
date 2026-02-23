import {useState} from 'react';
const Form = () => {
    const [name, setName] = useState("");

    function handlechange(e) {
        setName(e.target.value);
    }

    function handlesubmit(e) {
        e.preventDefault();
        alert(name);
    }

    return (
        <>
        <form onSubmit={handlesubmit}>
            <label>Enter your name: </label>
            <input type="text" value={name} onChange={handlechange} />
            <input type="submit" />
        </form>
        </>
    );
}

export default Form;