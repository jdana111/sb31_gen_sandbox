// Test 07 (Synthetic Events)
// Source = https://react.dev/learn/responding-to-events (Search for "Barbara Hepworth.")
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(event) {
    setPerson({
      ...person,
      firstName: event.target.value
    });
  }

  function handleLastNameChange(event) {
    setPerson({
      ...person,
      lastName: event.target.value
    });
  }

  function handleEmailChange(event) {
    setPerson({
      ...person,
      email: event.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

