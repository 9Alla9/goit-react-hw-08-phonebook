import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
const css = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
  },
};

const Contacts = () => {
  return (
    <div style={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
