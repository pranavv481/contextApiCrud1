import React,{useContext} from 'react'
import {ContactData} from "../Context/ContactData";
import ContactForm from './ContactForm';

const ContactDetails = (props) => {
  const { user } = props
  console.log(user)
  const {removeContact} = useContext(ContactData)
  
  return (
    <>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><a onClick={()=>removeContact(user.id)} className="btn btn-danger">Delete</a></td>
    </>
  )
}

export default ContactDetails
