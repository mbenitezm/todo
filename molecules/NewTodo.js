import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

const NewTodo = ({ close, values }) => (
  <div>
    <div className="newTodo">
      <Text text="Title: " />
      <Field name="title" component={Input} id="title" value={values.title} />
      <br />
      <Text text="Description: " />
      <Field name="description" component={Input} id="description" value={values.description} />

      <br />
      <div className="btn-right">
        <Button text="Save" buttonColor="success" buttonType="submit" />
      </div>
      <div className="btn-left">
        <Button text="Close" onClick={close} />
      </div>
    </div>

    <style jsx>
      {`
        .newTodo {
          border: 1.5px solid black;
          width: 80%;
          padding: 40px 25px;
          margin: 20px 20px;
          box-sizing: border-box;
        }

        .btn-right {
          float: right;
        }

        .btn-left {
          float: left;
        }
      `}
    </style>
  </div>
);

NewTodo.propTypes = {
  close: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NewTodo;
