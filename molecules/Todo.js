import React from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Todo = ({ title, description }) => (
  <div>
    <div className="todo">
      <Text text={title} />
      <br />
      <Text text={description} />
      <br />
      <div className="btn-right">
        <Button text="Delete" />
      </div>
    </div>

    <style jsx>
      {`
        .todo {
          border: 1px dotted black;
          width: 80%;
          padding: 40px 25px;
          margin: 20px 20px;
          box-sizing: border-box;
        }

        .btn-right {
          float: right;
        }
      `}
    </style>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Todo;
