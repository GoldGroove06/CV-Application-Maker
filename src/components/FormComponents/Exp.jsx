import { useState } from "react";

function Exp({dispatch}) {
    const [compName, setCompName] = useState(null)
    const [position, setPosition] = useState(null)
    const [respo, setRespo] = useState(null)
    const [workDate, setWorkDate] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "Exp", payload: {compName: compName, position: position, respo:respo, workDate: workDate}})
    }
    return (
        <div>
            Experience 
            <form onSubmit={handleSubmit}>
                Company Name: <input name="comp-name" type="text" onChange={(e) => setCompName(e.target.value) }/>
                Position : <input name="position" type="text" onChange={(e) => setPosition(e.target.value) }/>
                Responbilities: <input name="respo" type="text" onChange={(e) => setRespo(e.target.value) }/>
                Work Date: <input name="workDate" type="text" onChange={(e) => setWorkDate(e.target.value) }/>
                <input type="submit" value='Add info'/>
            </form>
        </div>
    );
}

export default Exp;