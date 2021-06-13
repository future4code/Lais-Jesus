import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from '../routes/coordinator'


export const login = async (form, resetForm, history) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, form);
        localStorage.setItem("token", response.data.token)
        resetForm()
        goToFeedPage(history)
    } catch (err) {
        alert(err.response.data.message)
    };    
}

export const signUp = async (form, resetForm, history) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, form);
        
        localStorage.setItem("token", response.data.token)
        resetForm()
        goToFeedPage(history)
    } catch (err) {
        console.log(form)
        alert(err.response.data.message)
    };
}