import React from 'react'
import * as S from './PostCardStyled'

const PostCard = (props) => {

  return (

        <S.PostCard key={props.id}>

          <S.DivTitle>
              <h2>{props.title}</h2>
            
          </S.DivTitle>
          <S.DivPost>
              <p>{props.text}</p>
          </S.DivPost>
          <S.DivCount>

              <S.DivVotes>
                  <p>{props.votesCount}</p>
              </S.DivVotes>
              <S.DivComents>
                  <p>{props.commentsCount}</p>
              </S.DivComents>

          </S.DivCount>
        </S.PostCard>
  )
}
export default PostCard;