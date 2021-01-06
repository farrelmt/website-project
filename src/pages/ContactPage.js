import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

class ContactPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
            //emailSent: true,
        });
    }
    
    render(){
        return(
            <div>
                 <Hero title={this.props.title} />

                 <Content>
                     <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                             <Form.Label htmlFor="full-name">
                                 Full Name
                             </Form.Label>
                             <Form.Control 
                                id="full-name" 
                                name="name" 
                                type="text" 
                                value={this.state.name} onChange={this.handleChange}
                             />
                         </Form.Group>
                        <Form.Group>
                             <Form.Label htmlFor="email">
                                 Email
                             </Form.Label>
                             <Form.Control 
                                id="email" 
                                name="email" 
                                type="text" 
                                value={this.state.email} onChange={this.handleChange}
                             />
                         </Form.Group>
                        <Form.Group>
                             <Form.Label htmlFor="message">
                                 Message
                             </Form.Label>
                             <Form.Control 
                                id="message" 
                                name="message" 
                                as="textarea" 
                                row="3"
                                value={this.state.message} onChange={this.handleChange}
                             />
                         </Form.Group>

                        <Button className="btn btn-dark d-inline-block btn-lg btn-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            SUBMIT
                        </Button>

                        {this.state.emailSent === true && 
                        <p className="d-inline success-msg">Message Sent</p>}

                        {this.state.emailSent === false && 
                        <p className="d-inline error-msg">Message Not Sent</p>}

                     </Form>
                 </Content>
            </div>
        );
    }
}

export default ContactPage;