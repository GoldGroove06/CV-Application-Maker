import  { any } from 'prop-types';

function Header({state}) {
    return (
        <p> 
            
        {state.name} {state.email} {state.phoneNumber}

            
        </p>
    );
}

Header.propTypes ={
    state: any
}

export default Header;