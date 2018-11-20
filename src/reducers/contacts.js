const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  fields: [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' },
    { name: 'phone', label: 'Phone Number', type: 'tel' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'dateOfBirth', label: 'Date of birth' }
  ]
};

const setContacts = (state, contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));

  return Object.assign({}, state, { contacts });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return setContacts(state, [...state.contacts, Object.assign(
        {},
        { id: new Date().getTime() },
        action.contact
      )]);
    
    case 'EDIT_CONTACT':
      return setContacts(state, state.contacts.map(contact => {
        if (contact.id === action.contact.id) {
          return action.contact;
        }

        return contact;
      }));
    
    case 'REMOVE_CONTACT':
      return setContacts(state, state.contacts.filter(contact => contact.id !== action.id));
    
    default:
  }

  return state;
};
