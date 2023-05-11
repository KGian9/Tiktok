import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "~/App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./components/GlobalStyles";

//* Fake Comments bài fake chat app
// function emitComments(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id}`,
//       })
//     );
//   }, 2000);
// }

// emitComments(1);
// emitComments(2);
// emitComments(3);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
