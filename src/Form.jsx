import {useState} from 'react';
const Form = () => {
    const [name, setname] = useState("");

    return (
        <form>
            <label>Enter your Name: </label>
            <input type="text"
            value={name}
            onChange={(e) => setname(e.target.value)} />

            <p>Current Value: {name}</p>
        </form>
    );
}

export default Form;