import axios from "axios"
import { BASE_URL } from '../constants/urls'

export const createPost = (body, resetForm, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data.message)
        resetForm()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.message)
        setIsLoading(false)
      })
  }