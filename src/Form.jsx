import {useState} from 'react';
const Form = () => {
    const [name, setName] = useState("");

    function handleChange(e)  {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(name);
    };

    return (

   

    <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input type="text"
        value={name} 
        onChange={handleChange}/>

        <input type="submit" />

    </form>

     );
}

export default Form;