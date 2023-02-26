import React, { useState } from "react";
import Contact from "./Components/Contact.js";
import "./styles/app.css";
import "./Components/ContactAdder";
import ContactAdder from "./Components/ContactAdder";
function App() {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };
  const loggedIn = true;
  return (
    <>
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div
        className="contact_list"
        style={{ color: loggedIn ? "green" : "red" }}
      >
        <h3>Contact list</h3>

        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}

        <button onClick={clearAllContacts}>Clear All Contacts</button>
      </div>
    </>
  );
}

export default App;
