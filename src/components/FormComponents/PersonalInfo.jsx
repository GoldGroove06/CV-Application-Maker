import { useState } from "react";
import Button from "@radui/ui/Button"

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
            <form onSubmit={submited? handleEdit : handleSubmit}>
                Name: <input name="name" type="text" onChange={(e) => setName(e.target.value) }/> <br/>
                Email: <input name="email" type="email" onChange={(e) => setEmail(e.target.value) }/> <br/>
                Phone number: <input name="ph-number" type="tel" onChange={(e) => setPhone(e.target.value) }/> <br/>
                <Button type="submit" >{submited ? 'edit' : "Add info"}</Button>
            </form>
        </div>
    );
}

export default PersonalInfo;