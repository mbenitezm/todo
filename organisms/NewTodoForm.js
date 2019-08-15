import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { Mutation } from 'react-apollo';
import NewTodo from '../molecules/NewTodo';
import GET_TODOS_QUERY from '../queries/getTodosQuery';
import CREATE_TODO_MUTATION from '../mutations/createTodoMutation';

const initialValues = {
  title: '',
  description: '',
};

// eslint-disable-next-line max-len
const NewTodoForm = ({ formVisible, close }) => {
  const updateCache = (cache, { data: { createTodo } }) => {
    const { allTodos } = cache.readQuery({ query: GET_TODOS_QUERY });

    cache.writeQuery({
      query: GET_TODOS_QUERY,
      data: {
        allTodos: [createTodo].concat(allTodos),
      },
    });
  };

  return (
    formVisible && (
      <Mutation mutation={CREATE_TODO_MUTATION} update={updateCache}>
        {(createTodo) => {
          const handleSubmit = (values, { setSubmitting }) => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(values));
            setSubmitting(false);
            createTodo({ variables: { input: { ...values } } });
            close();
          };

          return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values }) => (
                <Form autoComplete="off">
                  <NewTodo close={close} values={values} />
                </Form>
              )}
            </Formik>
          );
        }}
      </Mutation>
    )
  );
};

NewTodoForm.propTypes = {
  formVisible: PropTypes.bool,
  setFormVisible: PropTypes.func,
};

export default NewTodoForm;
