import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
// import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactFormStyled';

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

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onSubmit(values, actions);
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
  onSubmit: PropTypes.func.isRequired,
};
