import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";
import { Button } from "@material-ui/core"
import { goToSignUpPage, goToFeedPage } from "../../routes/coordinator";
import useForm from '../../hooks/useForm'
import { login } from "../../services/user"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import TextField from '@material-ui/core/TextField'


const LoginPage = () => {
  useUnprotectedPage()
  const [form, onChange, resetForm] = useForm({ email: "", password: "" })
  const history = useHistory();
  
  // const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, resetForm, history)
  }
  return (
    <S.MainContainer background-color="primaryColor" >
      <div>
        <S.ImgLogo src={"https://seeklogo.com/images/R/reddit-logo-3C1C5DDEB9-seeklogo.com.png"}/>
      </div>      
      <S.Container>
          <h1>LabEddit</h1>
          <S.Forms onSubmit={onSubmitForm}>
                  <TextField name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                        placeholder={"Digite seu e-mail aqui"}
                        
                  />

                  <TextField name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                        placeholder={"Digite sua senha"}
                  />

                  <Button
                    variant="contained"
                    color={"primary"}
                    type={"submit"}
                    fullWidth
                  >
                      Login
                  </Button>
          </S.Forms>

          <Button onClick={() => goToSignUpPage(history)}
              type={"submit"}
              fullWidth
              variant={"text"}
              color={"primary"}
              text-decoration={"underline"}
          >
          <u>Clique aqui e Cadastre-se</u> 
          </Button>

      </S.Container>
    </S.MainContainer>
  );
};

export default LoginPage;