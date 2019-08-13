import React from 'react';

function styleDecorator(storyFn) {
  return (
    <div>
      <div id="modal" />

      <style>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

        html {
          box-sizing: border-box;
        }

        * {
          /* This feature is non-standard, it will not work for every user */
          -webkit-tap-highlight-color: transparent;
          box-sizing: inherit;
        }

        *::after {
          box-sizing: inherit;
        }

        *::before {
          box-sizing: inherit;
        }

        *:not(input) {
          user-select: none;
        }

        *:focus {
          outline: none;
        }

        body {
          font-family: 'Open Sans', sans-serif;
          margin: 0;
          position: inherit;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
        }

        ul,
        ol {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        button {
          border: 0;
          cursor: pointer;
          margin: 0;
          padding: 0;
        }

        select::-ms-expand {
          display: none;
        }

        input::-ms-clear {
          display: none;
          height: 0;
          width: 0;
        }

        a {
          text-decoration: none;
        }

        input,
        select {
          appearance: none;
          -webkit-appearance: none;
        }

        /* Hide HTML5 Up and Down arrows. */
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
 
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>

      {storyFn()}
    </div>
  );
}

export default styleDecorator;
