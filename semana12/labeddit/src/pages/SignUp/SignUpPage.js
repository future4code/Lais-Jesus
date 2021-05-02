import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styled";
import { Button } from "@material-ui/core"
import { goToFeedPage } from "../../routes/coordinator";
import useForm from '../../hooks/useForm'
import { signUp } from "../../services/user"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

const SignUpPage = () => {
  useUnprotectedPage()
  const [form, onChange, resetForm] = useForm({ email: "", password: "", username: "" })
  const history = useHistory();
  
  // const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, resetForm, history)
  }

  return (
    <S.MainContainer>
      <S.ImgLogo>
      </S.ImgLogo>
      <S.Container>
          <S.Forms>
              <form onSubmit={onSubmitForm}>
                    <input name={"username"}
                        value={form.username}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                        placeholder={"Digite seu nome aqui"}
                        
                  />
                  <input name={"email"}
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

                  <input name={"password"}
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
                    color="primary"
                    type={"submit"}
                    fullWidth
                  >
                      CADASTRAR
                  </Button>
                  
              </form>            
          </S.Forms>
      </S.Container>
    </S.MainContainer>
  );
};

export default SignUpPage;