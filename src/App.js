import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ChatPage from "./components/ChatPage/ChatPage";

export default function App() {
  return (
      <Switch>
          <Route exact path="/" component={ChatPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
      </Switch>
  );
}
