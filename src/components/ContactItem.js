// src/components/ContactItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ListItem, EditButton, DeleteButton, Icon } from "./styles";
import { removeContact, editContact } from "../action"; // Importando a função editContact corretamente
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function ContactItem({ contact }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState(contact);

    const handleRemove = () => {
        dispatch(removeContact(contact.id));
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSave = () => {
        dispatch(editContact(editedData));
        setIsEditing(false);
    };

    return (
        <ListItem>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="fullName"
                        value={editedData.fullName}
                        onChange={handleChange}
                        placeholder="Nome completo"
                    />
                    <input
                        type="email"
                        name="email"
                        value={editedData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={editedData.phone}
                        onChange={handleChange}
                        placeholder="(xx) xxxxx-xxxx"
                        maxLength="15"
                    />
                    <EditButton onClick={handleSave} isEdit>
                        <Icon icon={faEdit} /> Salvar
                    </EditButton>
                </>
            ) : (
                <>
                    <span>
                        {contact.fullName} - {contact.email} - {contact.phone}
                    </span>
                    <EditButton onClick={handleEdit} isEdit>
                        <Icon icon={faEdit} />
                    </EditButton>
                    <DeleteButton onClick={handleRemove} isRemove>
                        <Icon icon={faTrashAlt} />
                    </DeleteButton>
                </>
            )}
        </ListItem>
    );
}

export default ContactItem;
