import { any } from 'prop-types';
import Separator from "@radui/ui/Separator"

function EduExp({state}) {
    return (
        <div className='font-bold'>
            <Separator/> 
            Educational Exp 
            {state.eduExp.map((edu) => {
      
                return(
                    <div key={edu.studyTitle} className='m-4 font-semibold p-4'>
                       <div className='float-start '>{edu.instName}</div><div className='float-end'> {edu.studyDate}</div>
                       <br/>
                       <div className='font-light'>{edu.studyTitle}</div>
                       
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