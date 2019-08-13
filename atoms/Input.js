import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputId, inputName }) => (
  <div>
    <input type="text" id={inputId} name={inputName} />

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
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default Input;
