import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/Feed/FeedPage";
import FeedDetailsPage from "../pages/FeedDetails/FeedDetailsPage";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import ErrorPage from "../pages/Error/ErrorPage";
import Header from "../components/Header/Header"

const Router = () => {
    return (
      <BrowserRouter>
               
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/">
            <FeedPage />
          </Route>
  
          <Route exact path="/detail/:id">
            <FeedDetailsPage />
          </Route>

          <Route exact path="/signup">
            <SignUpPage />
          </Route>
  
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;
  
