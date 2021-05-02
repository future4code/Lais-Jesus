import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage";


const FeedPage = () => {
    useProtectedPage()
  
  return (
    <S.MainContainer>
        <Header/>
        <S.Container>
            <S.Forms>
                <form>

                    <input/>
                    
                </form>

                <button>Postar</button>
            </S.Forms>

            <S.PostContainer>
                TODOS OS POSTS AQUI
            </S.PostContainer>

        </S.Container>
    </S.MainContainer>
  );
};

export default FeedPage;