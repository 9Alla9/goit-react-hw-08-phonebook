import { useState } from 'react';
import css from './ContactForm.module.css';
import { addContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name: inputName, value } = e.currentTarget;
    if (inputName === 'name') {
      setname(value);
    } else if (inputName === 'number') {
      setnumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(name + ' is already in contacts');
      return;
    }
    dispatch(addContacts({ name, number, id: nanoid() }));
    setname('');
    setnumber('');
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.item}>
        Name
        <input
          type="text"
          className={css.input}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={css.item}>
        Number
        <input
          type="tel"
          name="number"
          className={css.input}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;
