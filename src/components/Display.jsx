import Header from './Header';
import { any } from 'prop-types';
import EduExp from './EduExp';
import IndExp from './IndExp';

function Display({state}) {
   
    return (
        <p>
            <Header state={state}/>
            <br></br>
            <EduExp state={state}/>
           
            <IndExp state={state} />
            <br></br>
            
        </p>
    );
}

Display.propTypes ={
    state: any
}
export default Display;