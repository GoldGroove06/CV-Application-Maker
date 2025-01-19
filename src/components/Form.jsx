import Duplicator from "./FormComponents/Duplicator";
import EduBack from "./FormComponents/EduBack";
import Exp from "./FormComponents/Exp";
import PersonalInfo from "./FormComponents/PersonalInfo";



function Form({dispatch}) {
    return (
        <div style={{ flex:1}} className="overflow-scroll overflow-x-hidden">
            <PersonalInfo dispatch={dispatch} />
            <br/>
            Education Background
            <Duplicator component={<EduBack dispatch={dispatch} /> } dispatch={dispatch} name='eduBack'>
            </Duplicator>
            <br/>
            Experience
            <Duplicator component={<Exp dispatch={dispatch} />} dispatch={dispatch} name="exp"/>
                
          
            
        </div>
    );
}



export default Form;