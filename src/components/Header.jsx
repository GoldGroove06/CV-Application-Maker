import  { any } from 'prop-types';

function Header({state}) {
    return (
        <div> 
            
            {state.name}
            {state.email}
            {state.phoneNumber}

            
        </div>
    );
}

Header.propTypes ={
    state: any
}

export default Header;