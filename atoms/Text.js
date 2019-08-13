import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => (
  <div>
    <p>{text}</p>
    <style jsx>
      {`
        p {
          color: #616161;
          font-size: 14px;
        }
      `}
    </style>
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
