
import {useState} from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

const LoginControl = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   let button = (isLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
   return(
     <>
        <div id='login'>
         <Greeting isLoggedIn={isLoggedIn}/>
         {button}
        </div>
     </>
   )
}

export default LoginControl;