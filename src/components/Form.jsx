import { useState } from "react";

const person={
    firstName: "Barbara",
    lastName: "Hepworth",
    contact:{
        email: "bhepworth@sculpture.com",
    }
}

const muna = {
    ...person,
    contact: { /* for copy the contact */
        ...person.contact
    }
}

export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });



  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
        ...person,
        lastName: e.target.value,
        // ...person,
    });
  }

  function handleEmailChange(e) {
    setPerson({
        ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
