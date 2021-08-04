import React, { Component } from 'react'
import './Contact.css';
import { API_BASE_URL } from '../environment/environment';

function escapeHtmlChars(text) {
    return text.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;");
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            email: '',
            message: '',
            emailError: '',
            messageError: '',
            feedbackMessage: '',
            feedbackMessageType: 'success'
        }

    }

    componentDidMount() {
        document.title = 'Steve\'s Web Development Portfolio | Contact';
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.setState({ 
                emailError: '',
                messageError: '',
                feedbackMessage: '',
            });
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.validateInput()) {
            const name = escapeHtmlChars(this.state.name.length <= 100 ? this.state.name : this.state.name.slice(0, 99));
            const email = escapeHtmlChars(this.state.email);
            const message = escapeHtmlChars(this.state.message);
            this.sendEmail(name, email, message);
        }
    }

    sendEmail = async (name, email, message) => {
        const url = `${API_BASE_URL}/send`;
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({name, email, message})
        }
        try {
            console.log('fetchOptions', fetchOptions);
            const request = await fetch(url, fetchOptions);
            const data = await request.json();
            console.log('message response:', data);
            if ('errorMessage' in data) {
                this.handleResponseErrors(data);
            }
            else {
                this.setState({
                    feedbackMessage: 'Thank you. Your message has been sent.',
                    feedbackMessageType: 'success',
                    name: '',
                    email: '',
                    message: ''
                });
            }
        }
        catch(err) {
            this.handleResponseErrors(err);
        }
    }

    handleResponseErrors(err) {
        this.setState({
            feedbackMessage: 'Sorry, an error occurred while sending your message, please recheck the values and try again.',
            feedbackMessageType: 'error'
        });
    }

    ///////////////////////////////////////////////////////////////////////////////////

    validateInput = () => {
        const emailValid = this.validateEmail(this.state.email);
        const messageValid = this.validateMessage(this.state.message);
        return emailValid && messageValid;
    }

    validateEmail(email) {
        if (email.length === 0) {
            this.setState({ emailError: 'Your email address is required' });
            return false;
        }
        else if (email.length > 100) {
            this.setState({ emailError: 'Emails should not be longer than 100 characters' });
            return false;
        }
        else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/)) {
            this.setState({ emailError: 'Please enter a valid email address' });
            return false;
        }
        else {
            this.setState({ emailError: '' });
            return true;
        }
    }

    validateMessage(message) {
        if (message.length === 0) {
            this.setState({ messageError: 'Please enter a message' });
            return false;
        }
        else {
            this.setState({ messageError: '' });
            return true;
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////

    render() { 
        return (  
            <div className="contact-page-container fadeInAnimation">
                <div className="feedback-message" style={{color: this.state.feedbackMessageType === 'success' ? 'springgreen' : 'red'}}>
                    { this.state.feedbackMessage }
                </div>
                <div className="form-container">
                    <form className="form" autoComplete="on">
                        <label className="form__label">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form__input" 
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Please enter your name" 
                        />
                        <label className="form__label">Email<span className="form__required">*</span></label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form__input" 
                            onChange={this.handleChange} 
                            value={this.state.email}
                            placeholder="Please enter your email address" 
                        />
                        <div className="form__error">{ this.state.emailError }</div>
                        <label className="form__label form__textarea-label">Message<span className="form__required">*</span></label>
                        <textarea 
                            name="message" 
                            className="form__textarea" 
                            onChange={this.handleChange} 
                            value={this.state.message}
                            placeholder="Please enter a message" 
                        />
                        <div className="form__error">{ this.state.messageError }</div>
                        <button className="form__button" onClick={this.handleSubmit}>Send</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Contact;
 
