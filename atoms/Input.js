import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <div>
      <input type="text" {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
    </div>

    <style jsx>
      {`
        input[type='text'] {
          width: 60%;
          padding: 8px 20px;
          margin: 8px 0;
          box-sizing: border-box;
        }

        input[type='text']:focus {
          background-color: lightblue;
        }
      `}
    </style>
  </div>
);

Input.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
};

export default Input;
