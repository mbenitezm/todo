import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import NewTodo from '../molecules/NewTodo';

// eslint-disable-next-line max-len
const NewTodoForm = ({ formVisible, close }) => {
  const initialValues = {
    title: '',
    description: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    setSubmitting(false);
    close();
  };

  return (
    formVisible && (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form autoComplete="off">
            <NewTodo close={close} values={values} />
          </Form>
        )}
      </Formik>
    )
  );
};

NewTodoForm.propTypes = {
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func,
};

export default NewTodoForm;
