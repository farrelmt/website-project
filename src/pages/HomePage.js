
import React from 'react';

import Hero from '../components/Hero';


function HomePage(props) {
    return(
        <div className="py-5">
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
        
        </div>
            
    );
}

export default HomePage;