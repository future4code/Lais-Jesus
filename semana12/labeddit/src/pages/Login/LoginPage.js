import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";
import { goToSignUpPage, goToFeedPage } from "../../routes/coordinator";

const LoginPage = () => {
  const history = useHistory();
  return (
    <S.MainContainer>
      <S.ImgLogo>
      </S.ImgLogo>
      <S.Container>
          <S.Forms>
              <form>

                  <input/>

                  <input/>
                  
              </form>

              <button onClick={history.goToFeedPage}>Login</button>
          </S.Forms>

          <button onClick={history.goToSignUpPage}>Cadastre-se</button>

      </S.Container>
    </S.MainContainer>
  );
};

export default LoginPage;