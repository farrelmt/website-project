import React from 'react';
import Hero from '../components/Hero';


function LoginPage(props) {
    return(
        <div>
            <Hero title={props.title} />
        </div>
    );
}

export default LoginPage;