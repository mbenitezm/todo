/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonColor, buttonType, onClick }) => (
  <div>
    <button
      className={`btn ${buttonColor === 'success' ? 'btn-success' : 'btn-default'}`}
      type={buttonType}
      onClick={onClick}
    >
      {text}
    </button>

    <style jsx>
      {`
        .btn {
          border: none;
          color: white;
          padding: 8px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          position: relative;
        }
        .btn-default {
          background-color: #cccccc;
        }
        .btn-success {
          background-color: #4caf50;
        }
        .btn-success:hover {
          background-color: #266d15;
        }
        .btn-default:hover {
          background-color: #aaaaaa;
        }
      `}
    </style>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  buttonColor: 'default',
  buttonType: 'button',
};

export default Button;
