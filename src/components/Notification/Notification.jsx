import { Component } from "react";
import { H2 } from "./Notification.styled";
import PropTypes from 'prop-types';

class Notification extends Component{
    render(){
        const {message}= this.props;
        return (
            <H2>{message}</H2>
        )
    }
}

export default Notification;

Notification.propTypes={
    message: PropTypes.string.isRequired
}