import React from "react";
import { useSelector } from "react-redux";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

function App() {
    const contacts = useSelector((state) => state.contacts);

    return (
        <Container>
            <h1>Lista de Contatos</h1>
            <AddContactForm />
            <ContactList contacts={contacts} />
        </Container>
    );
}

export default App;
