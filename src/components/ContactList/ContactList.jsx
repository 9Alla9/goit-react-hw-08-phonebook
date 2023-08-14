import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removeContacts } from 'redux/contacts/operations';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.container}>
      {visibleContacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          idx={id}
          onRemove={() => {
            dispatch(removeContacts(id));
          }}
        />
      ))}
    </ul>
  );
};

export default ContactList;
