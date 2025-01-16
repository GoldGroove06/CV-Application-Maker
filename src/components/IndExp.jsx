import {any} from 'prop-types';

function IndExp({state}) {
    return (
        <div>
            Industry Exp 
            {state.indExp.map((ind) => {
                console.log(ind)
                return(
                    <div key={ind.studyTitle} style={{padding:10, border:"solid", margin:4}}>
                       {ind.compName}<br/>
                       {ind.positionTitle}<br/>
                       {ind.responbilites}<br/>
                       {ind.workDate}
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