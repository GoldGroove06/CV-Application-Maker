import EduBack from "./FormComponents/EduBack";
import Exp from "./FormComponents/Exp";
import PersonalInfo from "./FormComponents/PersonalInfo";



function Form({dispatch}) {
    return (
        <div>
            <PersonalInfo dispatch={dispatch} />
            <EduBack dispatch={dispatch} />
           <Exp dispatch={dispatch} />


            
        </div>
    );
}



export default Form;