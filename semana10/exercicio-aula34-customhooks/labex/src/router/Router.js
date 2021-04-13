import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components'

import AdminHomePage from "../pages/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>

        <Route exact path="/trips">
          <ListTripsPage />
        </Route>

        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/application-form">
          <ApplicationFormPage />
        </Route>
        
        <Route exact path="/login">
          <LoginPage />
        </Route>
        
        <Route exact path="/admin">
          <AdminHomePage />
        </Route>
        
        <Route exact path="/trip-details">
          <TripDetailsPage />
        </Route>
        
        <Route exact path="/create-trip">
          <CreateTripPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
