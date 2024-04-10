import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem } from "./styles"; // Importando estilos
import ContactItem from "./ContactItem";

function ContactList() {
    const contacts = useSelector((state) => state.contacts);

    return (
        <List>
            {contacts.map((contact) => (
                <ListItem key={contact.id}>
                    <ContactItem contact={contact} />
                </ListItem>
            ))}
        </List>
    );
}

export default ContactList;
