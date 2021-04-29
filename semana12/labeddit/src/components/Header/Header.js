import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <p>Header </p>
      <button onClick={history.goBack}>Voltar</button>
    </>
  );
};

export default Header;