import Header from './DisplayComponents/Header';
import { any } from 'prop-types';
import EduExp from './DisplayComponents/EduExp';
import IndExp from './DisplayComponents/IndExp';

function Display({state}) {
   
    return (
        <p style={{ flex:2}}>
            <Header state={state}/>
            <br></br>
            <EduExp state={state}/>
            <br/>
            <IndExp state={state} />
            <br></br>
            
        </p>
    );
}

Display.propTypes ={
    state: any
}
export default Display;