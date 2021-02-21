import React from 'react';
import ReactDOM from 'react-dom';
import UserContext from "./userContext"
import App from './App';


ReactDOM.render(
  <UserContext.Provider value={"Nicki123"}>
    <App />
  </UserContext.Provider>,
  document.getElementById("root")
)





