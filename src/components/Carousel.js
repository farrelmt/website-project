import React from 'react';

import Card from '../components/Card'

import header1 from '../Img/0.png';
import header2 from '../Img/1.png';
import header3 from '../Img/2.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Title 1',
                    subtitle: 'Subtitle 1',
                    imgSrc: header1,
                    link: 'http://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Title 2',
                    subtitle: 'Subtitle 2',
                    imgSrc: header2,
                    link: 'http://youtube.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Title 3',
                    subtitle: 'Subtitle 3',
                    imgSrc: header3,
                    link: 'http://github.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {
                        this.makeItems(this.state.items)
                    }
                </Row>
            </Container>
        );
    }

}

export default Carousel;