import React from 'react';
import Hero from '../components/Hero';



function CanvasPage(props) {
    return(
        <div>
            <Hero title={props.title} />
        </div>
    );
}

export default CanvasPage;