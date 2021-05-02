import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import PostCard from './PostCard'

const FeedDetailsPage = () => {
  useProtectedPage()
  const params = useParams()
  const postDetail = useRequestData({}, `${BASE_URL}/posts/${params.id}`)
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}`)
  
  

  // const commentsCard = comments && comments.comemnts.map((comment) => {
  //   return (
  //       <S.CardComments key={comment.id}>
  //         <p>{comment.username}: {comment.text}</p>
  //       </S.CardComments>
  //   )
  // })

  return (
    <S.MainContainer>
        <Header/>
        <S.Container>
        
            <PostCard 
              title = {postDetail.title}
              text = {postDetail.text}
              id = {postDetail.id}
              votesCount = {postDetail.votesCount}
              commentsCount = {postDetail.commentsCount}

            />

            {/* {commentsCard}  */}

        </S.Container>
    </S.MainContainer>
  );
};

export default FeedDetailsPage;