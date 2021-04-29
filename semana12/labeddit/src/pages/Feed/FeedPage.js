import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header"


const FeedPage = () => {
  
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