import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = object().shape({
  name: string()
    .max(20)
    .matches(nameRegex, {
      message:
        "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
    })
    .required(),
  number: string()
    .min(3)
    .matches(numberRegex, {
      message:
        'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
    })
    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const check = contacts.filter(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (check.length) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      resetForm({
        name: '',
        number: '',
      });
    }
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
    >
      <StyledForm autoComplete=" off">
        <StyledLabel>
          Name
          <StyledInput type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </StyledLabel>
        <StyledButton type="submit">Add contacts</StyledButton>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.object,
};
