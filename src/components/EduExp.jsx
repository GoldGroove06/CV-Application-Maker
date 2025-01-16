import { any } from 'prop-types';

function EduExp({state}) {
    return (
        <div>
            Educational Exp 
            {state.eduExp.map((edu) => {
                console.log(edu)
                return(
                    <div key={edu.studyTitle} style={{padding:10, border:"solid", margin:4}}>
                       {edu.instName}<br/>
                       {edu.studyTitle}<br/>
                       {edu.studyDate}
                    </div>
                )
            })}
        </div>
    );
}

EduExp.propTypes ={
    state: any 
}

export default EduExp;