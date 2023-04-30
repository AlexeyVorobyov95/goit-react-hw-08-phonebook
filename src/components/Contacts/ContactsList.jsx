import { nanoid } from 'nanoid';
import { ContactsItem } from './ContactsItem';
import { ContainerContacts, List, Title, Text, ContainerMassage } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { fetchDeleteContact } from 'redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };
  return (
    <>
      <ContainerContacts>
        <Title>Contacts</Title>
        <Filter />
        <ContainerMassage>
          {error ? (
            <Text>{error}</Text>
          ) : isLoading && !error ? (
            <Text>Request in progress...</Text>
          ) : contacts.length === 0 ? (
            <Text>The phonebook is empty. Please add a contact.</Text>
          ) : (
            filteredContacts.length === 0 && <Text>Contact not found</Text>
          )}
        </ContainerMassage>

        {contacts.length > 0 && (
          <List>
            {filteredContacts.map(({ name, number, id }) => (
              <ContactsItem
                key={nanoid()}
                name={name}
                number={number}
                id={id}
                onClick={removeContact}
              />
            ))}
          </List>
        )}
      </ContainerContacts>
    </>
  );
};
