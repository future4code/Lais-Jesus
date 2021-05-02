import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"

const FeedDetailsPage = () => {
  useProtectedPage()
  return (
    <S.MainContainer>
        <Header/>
        <S.Container>

            <S.PostContainer>
                Post detalhado aqui
            </S.PostContainer>

        </S.Container>
    </S.MainContainer>
  );
};

export default FeedDetailsPage;