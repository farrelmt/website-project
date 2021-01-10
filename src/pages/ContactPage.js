import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Content from '../components/Content';
import fire from "../fire";

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

        fire.collection('contact').add({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        });

        fire.then(()=>{
           alert('Message Sent');
        });

        fire.catch(error =>{
            alert(error.message);
        });

        this.state.name = ('');
        this.state.email = ('');
        this.state.message = ('');
    }
    
    render(){
        return(
            <div>
                 <Hero title={this.props.title} />
                 <Content>
                    <ContactForm />
                 </Content>
            </div>
        );
    }
}

export default ContactPage;