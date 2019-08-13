import React from 'react';
import PropTypes from 'prop-types';
import NewTodo from '../molecules/NewTodo';

const NewTodoForm = ({ showForm }) => showForm && <NewTodo />;

NewTodoForm.propTypes = {
  showForm: PropTypes.bool,
};

export default NewTodoForm;
