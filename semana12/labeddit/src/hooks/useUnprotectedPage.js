import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

export const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      history.push("/");
    }
  }, [history]);
};