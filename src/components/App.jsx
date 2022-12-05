import { Component } from "react";
import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";

export class App extends Component{
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: ''
  }

 addContact = ({contact})=>{ 
  const contactNameLowerCase = contact.name.toLowerCase();
  const nameOfContact = this.state.contacts.map(el=>el.name.toLowerCase());

    if(!nameOfContact.includes(contactNameLowerCase)){
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
