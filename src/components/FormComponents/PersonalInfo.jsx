import { useState } from "react";

function PersonalInfo({dispatch}) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type:"persInfo", payload: {name: name, email: email, phone: phone}})
    }
    return (
        <div>
            Personal details
            <form onSubmit={handleSubmit}>
                Name: <input name="name" type="text" onChange={(e) => setName(e.target.value) }/>
                Email: <input name="email" type="email" onChange={(e) => setEmail(e.target.value) }/>
                Phone number: <input name="ph-number" type="tel" onChange={(e) => setPhone(e.target.value) }/>
                <input type="submit" value='Add info'/>
            </form>
        </div>
    );
}

export default PersonalInfo;