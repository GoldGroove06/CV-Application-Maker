import { useState } from "react";

function PersonalInfo({dispatch}) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [submited, setSubmited] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setSubmited(true)
        dispatch({type:"persInfo", payload: {name: name, email: email, phone: phone}})
    }

    function handleEdit(e){
        e.preventDefault();
       
        dispatch({type:"editpersInfo", payload: {name: name, email: email, phone: phone}})
    }
    return (
        <div>
            Personal details
            <form onSubmit={submited? handleEdit : handleSubmit}>
                Name: <input name="name" type="text" onChange={(e) => setName(e.target.value) }/> <br/>
                Email: <input name="email" type="email" onChange={(e) => setEmail(e.target.value) }/> <br/>
                Phone number: <input name="ph-number" type="tel" onChange={(e) => setPhone(e.target.value) }/> <br/>
                <input type="submit" value={submited ? 'edit' : "Add info"}/>
            </form>
        </div>
    );
}

export default PersonalInfo;