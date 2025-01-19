import React, { useState } from "react";
import Button from "@radui/ui/Button"

function Duplicator({component, dispatch, name}) {
    const [counter, setCounter] = useState([0])

    function handleClick(){
        const lastElement = counter.slice(-1)
        setCounter([...counter, Number(lastElement) + 1])
    }

    function handleRemove(id){
        dispatch({type:`remove${name}`, payload:id})
        const list = counter
        setCounter(list.filter((i) => i !== id))
    }
    return (
        <div>
            <Button onClick={handleClick}>Add new</Button>
            {counter.map(
                (el) => {
                    
                    return <div key={el} style={{padding:10, border:"solid", margin:4}}>
                         {React.cloneElement(component, {el})}
                         <Button onClick={() => handleRemove(el)}>Remove</Button>
                    </div>
                }
            )}
           
            
        </div>
    );
}




export default Duplicator;