import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";
// import { baseUrl, axiosConfig } from "./parameters";

import { FaHeart, FaHeartBroken } from "react-icons/fa";


const ChooseProfileContainer = styled.div `
  background-color:#DCDCDC;
  text-align:center;
  padding:20px;
  height:80%;
  box-shadow: 0 4px 8px rgb(68 68 68 / 50%);
  box-sizing: border-box;
  border-radius: 10px;
  
`

const CardContainer = styled.div `
  display:flex;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  height:90%;

  img {
    height: 250px;
    width: 250px;
  }
`
const Buttons = styled.div `
  button {
    margin-top:10px;
    color:purple;
    background-color:#DCDCDC;
    border: none;
  }
  button:hover{
    text-decoration: none;
    color:red;
  }

  
`


export default function ChooseProfile(props) {
  
  useEffect (() => {

    getProfiles();
    
  }, [props.setProfileList]);

    const getProfiles = async () => {
      try {
        const res = await axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:lais-jesus-cruz/person")
        props.setProfileList(res.data.profile);
      } catch (err) {
          console.log("Não foi possível carregar novo Perfil");
        }
    }

    const changeProfile =(event) => {
      props.choosePerson();
      getProfiles();
    }

  
    return (
      <ChooseProfileContainer >
        
        <CardContainer key={props.profileList.id}>
          <img src={props.profileList.photo}/>
          <div>
            {props.profileList.name}, {props.profileList.age}
            <br/>
            {props.profileList.bio}
          </div>
        </CardContainer>
        <Buttons>
          <button onClick = {() => changeProfile("71gMbZs2txS9LDvGK5Ew", false)}><FaHeartBroken size = {40}/></button>
          <button onClick = {() => changeProfile("71gMbZs2txS9LDvGK5Ew", true)} ><FaHeart  size = {40}/></button>
        </Buttons>
        
      </ChooseProfileContainer >
    );
  }
  
  
  