import React, { useState } from "react";
import PropTypes from 'prop-types';


function Duplicator({component, dispatch, name}) {
    const [counter, setCounter] = useState([1])

    function handleClick(){
        const lastElement = counter.slice(-1)
        setCounter([...counter, Number(lastElement) + 1])
    }

    function handleRemove(id){
        dispatch({type:`remove${name}`, payload:id})
    }
    return (
        <div>
            <button onClick={handleClick}>Add new</button>
            {counter.map(
                (el) => {
                    
                    return <div key={el} style={{padding:10, border:"solid", margin:4}}>
                         {React.cloneElement(component, {el})}
                         <button onClick={() => handleRemove(el)}>Remove</button>
                    </div>
                }
            )}
           
            
        </div>
    );
}




export default Duplicator;