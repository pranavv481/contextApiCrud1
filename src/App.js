import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import ContactDataProvider from "./Context/ContactData";
import Contacts from "./components/Contacts";
import React from "react";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container my-5">
        <ContactDataProvider>
        <ContactForm/>
          <Contacts />
        </ContactDataProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
