import { useState } from "react";
import Button from "@radui/ui/Button"

function Exp({dispatch, el}) {
    const [compName, setCompName] = useState(null)
    const [position, setPosition] = useState(null)
    const [respo, setRespo] = useState(null)
    const [workDate, setWorkDate] = useState(null)
    const [submited, setSubmited] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmited(true)
        dispatch({type: "Exp", payload: {id: el, compName: compName, position: position, respo:respo, workDate: workDate}})
    }

    function handleEdit(e) {
        e.preventDefault()
        dispatch({type: "editExp", payload: {id: el, compName: compName, position: position, respo:respo, workDate: workDate}})
    }

    return (
        <div>
            
            <form onSubmit={submited? handleEdit : handleSubmit}>
                Company Name: <input name="comp-name" type="text" onChange={(e) => setCompName(e.target.value) }/> <br/>
                Position : <input name="position" type="text" onChange={(e) => setPosition(e.target.value) }/> <br/>
                Responbilities: <input name="respo" type="text" onChange={(e) => setRespo(e.target.value) }/> <br/>
                Work Date: <input name="workDate" type="text" onChange={(e) => setWorkDate(e.target.value) }/> <br/>
                <Button type="submit" >{submited ? 'edit' : "Add info"}</Button>
            </form>
        </div>
    );
}

export default Exp;