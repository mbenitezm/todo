import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, buttonType, onClick }) => (
  <div>
    <button
      className={`btn ${buttonType === 'success' ? 'btn-success' : 'btn-default'}`}
      type="button"
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
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  buttonType: 'default',
};

export default Button;
