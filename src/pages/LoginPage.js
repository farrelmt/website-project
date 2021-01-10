import React from 'react';
import Hero from '../components/Hero';
import AppLogin from '../AppLogin';


function LoginPage(props) {
    return(
        <div>
            <Hero title={props.title}/>
            <AppLogin/>
        </div>
    );
}

export default LoginPage;