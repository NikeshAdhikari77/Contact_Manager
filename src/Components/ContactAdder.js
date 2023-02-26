import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("John");
  const [mobile, setMobile] = useState("9742892184");
  const [location, setLocation] = useState("Nepal");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, number: mobile, location };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("pleasefill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        Contact adder:
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <button>Click me</button>
        </form>
      </div>
    </>
  );
};
export default ContactAdder;
