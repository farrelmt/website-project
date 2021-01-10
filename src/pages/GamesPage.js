import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Content from '../components/Content';

function GamesPage(props) {
    return(
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Content>
                <Carousel />
            </Content>
        
        </div>
            
    );
}

export default GamesPage;