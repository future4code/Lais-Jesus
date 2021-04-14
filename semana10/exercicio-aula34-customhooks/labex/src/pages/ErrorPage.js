import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  return (
    <>
      <p>Erro 404 - "=.=" (Imagine aqui um gatinho fofinho)</p>
      <button onClick={history.goBack}>Voltar</button>
    </>
  );
};

export default ErrorPage;