import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactsForm/Form';

// import {
  // selectContacts,
  // selectError,
  // selectFilteredContacts,
  // selectIsLoading,
// } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContainerPhoneBook } from './Contacts.styled';

// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const filteredContacts = useSelector(selectFilteredContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContainerPhoneBook>
        <ContactForm />
          <ContactsList />
      </ContainerPhoneBook>
    </>
  );
}