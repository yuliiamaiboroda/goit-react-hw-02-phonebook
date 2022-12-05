import { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";

export class App extends Component{
  state = {
    contacts: [],
    filter: ''
  }

 addContact = ({contact})=>{
  const nameOfContact = this.state.contacts.map(el=>el.name);
    if(!nameOfContact.includes(contact.name)){
      return this.setState({contacts: [...this.state.contacts, contact]})}
    else {
      alert(`${contact.name} is already in contact`)
  }
}
 filterContacts = (array)=>{
  const newArray = array.filter(el=>el.name.toLowerCase().includes(this.state.filter));
  return newArray;
 }

 addInFilter =(filterData)=>{
  this.setState({...this.state, filter:filterData})
 }

 deleteFromlist = id => {
  this.setState((prevState) => {
    return {
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== id
      )}})
 }

  render(){
   return (
    <>
    <Section title="Phonebook">
      <Phonebook addContact={this.addContact}/>
    </Section>
    
    <Section title="Contacts">
     {this.state.contacts.length===0?
    <Notification message="There is no contact yet"/>:
    <>
    <Filter newFilter={this.addInFilter}/>
    <Contacts contactList={this.filterContacts(this.state.contacts)} deleteFromlist={this.deleteFromlist}/></>}
    </Section>
    </>
  );}
};
