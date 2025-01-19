import  { any } from 'prop-types';

import Separator from "@radui/ui/Separator"


function Header({state}) {
    return (
        <div > 
        CV <Separator/>         
        <div className='flex'>
        {state.name}  <Separator orientation="vertical" /> {state.email}  <Separator orientation="vertical" />{state.phoneNumber}
        </div>  
            
        </div>
    );
}

Header.propTypes ={
    state: any
}

export default Header;