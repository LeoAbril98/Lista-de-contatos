import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${({ isEdit }) => (isEdit ? "#3B5998" : "#4CAF50")};
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 10px; /* Adiciona margem à esquerda */

    &:hover {
        background-color: ${({ isEdit }) => (isEdit ? "#2E4474" : "#45a049")};
    }

    ${({ isRemove }) =>
        isRemove &&
        `
    background-color: #f44336;
    &:hover {
      background-color: #d32f2f;
    }
  `}
`;

export const EditButton = styled(Button)`
    background-color: #3b5998;
    &:hover {
        background-color: #2e4474;
    }
`;

export const DeleteButton = styled(Button)`
    background-color: #f44336;
    &:hover {
        background-color: #d32f2f;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    color: white;
`;
