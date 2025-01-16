

function Form() {
    return (
        <div>
            Personal details
            <form>
                Name: <input name="name" type="text"/>
                Email: <input name="email" type="email"/>
                Phone number: <input name="ph-number" type="tel"/>
            </form>
            <br/>
            Education Background
            <form>
            Institue Name: <input name="inst-name" type="text"/>
            Study Title: <input name="study-title" type="text"/>
            Study Date: <input name="studyDate" type="text"/>
            </form>
            <br/>
            Experience 
            <form>
            Company Name: <input name="comp-name" type="text"/>
            Position : <input name="position" type="text"/>
            Responbilities: <input name="respo" type="text"/>
            Work Date: <input name="studyDate" type="text"/>
            </form>
        </div>
    );
}

export default Form;