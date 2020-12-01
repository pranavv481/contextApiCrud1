import React, { useContext } from 'react'
import { ContactData } from "../Context/ContactData";
import ContactDetails from "../components/ContactDetails";
const Contacts = () => {
    const { contacts } = useContext(ContactData);

    console.log(contacts)
    return (
        contacts.length > 0
            ?
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(data => (
                        <tr key={data.id}>
                            <ContactDetails user= {data}/>
                            {/* <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td> */}
                        </tr>
                    ))}


                </tbody>
            </table>
            : <h1>No Data</h1>
    )
}

export default Contacts
