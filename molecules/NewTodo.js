import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Input from '../atoms/Input';

const NewTodo = () => (
  <div>
    <div className="newTodo">
      <Text text="Title: " />
      <Input inputId="title" inputName="title" />
      <br />
      <Text text="Description: " />
      <Input inputId="description" inputName="description" />
      <br />
      <div className="btn-right">
        <Button text="Save" buttonType="success" />
      </div>
      <div className="btn-left">
        <Button text="Close" />
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

export default NewTodo;
