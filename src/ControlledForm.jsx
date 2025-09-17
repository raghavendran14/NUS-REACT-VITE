import { useState } from "react";
function ControlledForm() {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value); // React state updates input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Name:", name);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}       // controlled by React state
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm;
