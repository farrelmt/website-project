import React from 'react';

import Card from '../components/Card'

import header1 from '../Img/0.png';
import header2 from '../Img/1.png';
import header3 from '../Img/2.png';
import header4 from '../Img/3.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'A Hat In Time',
                    subtitle: 'Gears for Breakfast',
                    imgSrc: header1,
                    link: 'https://store.steampowered.com/app/253230/A_Hat_in_Time/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Fall Guys: Ultimate Knockout',
                    subtitle: 'Mediatonic',
                    imgSrc: header2,
                    link: 'https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/',
                    selected: false
                },
                {
                    id: 2,
                    title: "Tom Clancy's Rainbow Six® Siege",
                    subtitle: 'Ubisoft',
                    imgSrc: header3,
                    link: 'https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/',
                    selected: false
                },
                {
                    id: 3,
                    title: "Dishonored 2",
                    subtitle: 'Arkane Studios',
                    imgSrc: header4,
                    link: 'https://store.steampowered.com/app/403640/Dishonored_2/',
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
                <Row className="justify-content-around ">
                    {
                        this.makeItems(this.state.items)
                    }
                </Row>
            </Container>
        );
    }

}

export default Carousel;