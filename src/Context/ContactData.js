import React,{useState, createContext} from 'react';

export const ContactData = createContext()

const ContactDataProvider = (props) => {

    const [contacts, setContacts]= useState([
        {id:1, name:"test1", email:"test1@gmail.com", phone:"434465465"},
        {id:2, name:"test2", email:"test2@gmail.com", phone:"434465465"},
        {id:3, name:"test3", email:"test3@gmail.com", phone:"434465465"},
        {id:4, name:"test4", email:"test4@gmail.com", phone:"434465465"},
    ])

    const addContact = (contact)=>{
        setContacts([...contacts,contact])
    }

    const removeContact = (id) =>{
        if(window.confirm("Are you really want to delete this no?")){
            const filtered = contacts.filter(data=>data.id!==id) 
            setContacts(filtered)   
        }
    }
    return (
        <ContactData.Provider value={{contacts, addContact, removeContact}}>
            {props.children}
        </ContactData.Provider>
    )
}

export default ContactDataProvider
