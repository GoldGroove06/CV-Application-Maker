import { useState } from "react";

function EduBack({dispatch, el}) {
    const [instName, setInstName] = useState(null)
    const [studyTitle, setStudyTitle] = useState(null)
    const [studyDate, setStudyDate] = useState(null)
    const [submited, setSubmited] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setSubmited(true)
        dispatch({type: "EduBack", payload: {id: el, instName: instName, studyTitle:studyTitle, studyDate:studyDate}})
    }

    function handleEdit(e) {
        e.preventDefault()
        dispatch({type: "editEduBack", payload: {id: el, instName: instName, studyTitle:studyTitle, studyDate:studyDate}})
    }
   
    return (
        <div>
            
            <form onSubmit={submited? handleEdit : handleSubmit}>
                Institue Name: <input name="inst-name" type="text" onChange={(e) => setInstName(e.target.value) }/>
                Study Title: <input name="study-title" type="text" onChange={(e) => setStudyTitle(e.target.value) }/>
                Study Date: <input name="studyDate" type="text" onChange={(e) => setStudyDate(e.target.value) }/>
                <input type="submit" value={submited ? 'edit' : "Add info"}/>
            </form>
        </div>
    );
}

export default EduBack;