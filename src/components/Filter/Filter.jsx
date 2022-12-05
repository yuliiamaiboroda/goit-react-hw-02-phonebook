import { Component } from "react";
import {Label, Input} from "./Filter.styled"
import PropTypes from 'prop-types';


class Filter extends Component{
    onChangeInput = (e) => {
        const value = e.currentTarget.value.toLowerCase();
        this.props.newFilter( value );
      }

    render(){
      return ( <Label>
        Find contacts by name
        <Input
        type="text"
        name="Filter"
        onChange={this.onChangeInput}
        />
        </Label>)
    }
}

export default Filter;

Filter.propTypes={
    newFilter: PropTypes.func.isRequired
}