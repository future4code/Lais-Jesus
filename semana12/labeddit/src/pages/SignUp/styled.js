import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #1338BE;
    height:100vh;
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items:center;
    div {
        display:flex;
        flex-direction:column;
        justify-content:center;
        color:#F27649;
    }
    
`

export const Container = styled.div`
    width:480px;
    height:350px;
    background-color:white;
    box-shadow: 8px 8px 8px #F27649;
    h1{
        text-align:center;
        align-self:middle;
    }

`
export const ImgLogo = styled.img`
    width: 100px;

`
export const Forms = styled.form`
    width:380px;
    padding: 0 50px;
    color:black;
    
`