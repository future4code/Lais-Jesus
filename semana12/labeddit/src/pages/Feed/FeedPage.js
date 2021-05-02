import React, {useState} from 'react'
import * as S from "./styled";
import { Button } from "@material-ui/core"
import TextField from '@material-ui/core/TextField'
import Header from "../../components/Header/Header"
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import {createPost} from "../../services/post"
import { goToFeedDetailsPage } from "../../routes/coordinator";
import CircularProgress from '@material-ui/core/CircularProgress'

const FeedPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, resetForm] = useForm({ title: "", text: ""})
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, resetForm, setIsLoading)
    }

    const onClickPost = (id) => {
        goToFeedDetailsPage(history, id)

    }

    const postCard = posts && posts.map((post) => {
        return (
            <S.PostCard key={post.id}
                onClick= { () => onClickPost(post.id) }
            >
    
                <S.DivTitle>
                    <h4>@{post.username}: </h4>
                    <h2>{post.title}</h2>
                    <h6>--</h6>
                </S.DivTitle>
                <S.DivPost>
                    <p>{post.text}</p>
                </S.DivPost>
                <S.DivCount>

                    <S.DivVotes>
                        <p>{post.votesCount}</p>
                    </S.DivVotes>
                    <S.DivComents>
                        <p>{post.commentsCount}</p>
                    </S.DivComents>

                </S.DivCount>
                
                
            </S.PostCard>
        )
    })

  
  return (
    <S.MainContainer>
        <Header/>
        <S.Container>
            <S.Forms onSubmit={onSubmitForm}>

                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField name={"text"}
                            value={""}
                            onChange={""}
                            label={"Texto"}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            type={"text"}
                            placeholder={"O que você quer compartilhar?"}
                            
                    />
                    <Button
                    variant="contained"
                    color="secondary"
                    type={"submit"}
                    fullWidth
                  >
                      {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Postar</>}
                  </Button>
            </S.Forms>
            {postCard}
        </S.Container>

    </S.MainContainer>
  );
};

export default FeedPage;