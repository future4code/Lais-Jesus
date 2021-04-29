import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";
import { goToFeedPage } from "../../routes/coordinator";

const SignUpPage = () => {
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

                  <input/>
                  
              </form>

              <button onClick={history.goToFeedPage}>Cadastre-se</button>
          </S.Forms>
      </S.Container>
    </S.MainContainer>
  );
};

export default SignUpPage;