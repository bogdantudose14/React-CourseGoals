//USING CSS MODULES

import React from "react";

//the import is slightly different
//the CSS file should be also renamed => etc.module.css

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {/* the className has a "styles" object as a value with the CSS classes as properties; */}
      {/* the button will now have the CSS properties of the .button class but with other unique className to avoid applying styles to undesired elements; */}
      {props.children}
    </button>
  );
};

//USING STYLED-COMPONENTS

// import styled from "styled-components";

// //import "./Button.css";

// //we can use instead of .button (pseudoselector)
// // by using the styled components, in the developer tools, some complex classes are dinamically generated => every classname is unique;
// const Button = styled.button`
//    {
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `; // we do not store a functional component, but a styled one => `` syntax;
// // button is a method of the styled object and what we pass between the `` will kind of end up in that method;

// // const Button = props => {
// //   return (
// //     <button type={props.type} className="button" onClick={props.onClick}>
// //       {props.children}
// //     </button>
// //   );
// // };

export default Button;
