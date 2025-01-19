import {any} from 'prop-types';
import Separator from "@radui/ui/Separator"

function IndExp({state}) {
    return (
        <div>
            <Separator/> 
            Industry Exp 
            {state.indExp.map((ind) => {
                console.log(ind)
                return(
                    <div key={ind.compName} className='m-4 p-4'>
                        <div className='float-start font-semibold'>{ind.compName}</div> <div className='float-end font-semibold '>{ind.workDate}</div>
                        <br/>
                        <div className='font-light'>{ind.positionTitle}</div>
                        <br/>
                       {ind.respo}
                       
                    </div>
                )
            })}
        </div>
    );
}

IndExp.propTypes = {
    state: any
} 
export default IndExp;