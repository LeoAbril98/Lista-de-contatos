// src/components/AddContactForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addContact } from "../action";
import { Form, Input, Button } from "./styles";

function AddContactForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(formData));
        setFormData({ fullName: "", email: "", phone: "" });
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        const formattedValue = formatPhoneNumber(value);
        setFormData({ ...formData, phone: formattedValue });
    };

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ("" + phoneNumber).replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
        if (match) {
            return !match[2]
                ? match[1]
                : `(${match[1]}) ${match[2]}${match[3] ? "-" + match[3] : ""}`;
        }
        return phoneNumber;
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nome completo"
                required
            />
            <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                required
            />
            <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Telefone"
                maxLength="15"
                required
            />
            <Button type="submit">Adicionar</Button>
        </Form>
    );
}

export default AddContactForm;
