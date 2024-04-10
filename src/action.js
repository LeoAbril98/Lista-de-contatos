export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
}

export function removeContact(contactId) {
    return {
        type: REMOVE_CONTACT,
        payload: contactId,
    };
}

export function editContact(contact) {
    return {
        type: EDIT_CONTACT,
        payload: contact,
    };
}
