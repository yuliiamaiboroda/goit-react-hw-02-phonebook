import { Component } from "react";
import {Ul, Li, Span, Button} from "./Contacts.styled"
import PropTypes from 'prop-types';

class Contacts extends Component {

handleDelete = e =>{
    const id= e.currentTarget.id;
    this.props.deleteFromlist(id)
}

    render(){
        const {contactList}= this.props;
        return(
            <Ul>
                {contactList.map(el=>(
                    <Li key={el.id}>{el.name}: <Span>{el.number}</Span>
                    <Button type="button" id={el.id} onClick={this.handleDelete}>Delete</Button></Li>
                ))}
            </Ul>
        )

    }
};

export default Contacts;

Contacts.propTypes={
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
    }).isRequired).isRequired,
    deleteFromlist: PropTypes.func.isRequired
}