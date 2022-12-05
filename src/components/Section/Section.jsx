import { Component } from "react";
import { H2, SectionTag } from "./Section.styled";
import PropTypes from 'prop-types';


class Section extends Component {
    render(){
        return(
            <SectionTag>
                {this.props.title&&<H2>{this.props.title}</H2>}
                {this.props.children}
            </SectionTag>
        )
    }
}

export default Section;
Section.propTypes={
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}