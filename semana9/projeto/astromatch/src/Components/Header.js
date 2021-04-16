import React from 'react'
import styled from "styled-components";
import logo from './img/logo.png'
import {FaTrashAlt } from "react-icons/fa";
import { CgUserList } from "react-icons/cg";
import { ImProfile } from "react-icons/im";

const DivHeader = styled.div `
    display: flex;
    width: 100%;
    height: 50px;
    align-items:center;
    justify-content:space-between;
`
const ButtonReset = styled.button `
  background-color:white;
  border:none;
`

const ImgLogo = styled.img `
  width: 50%;
  
  
`

const ButtonChangePages = styled.button `
  background-color:white;
  border:none;
  button:hover{
    text-decoration: none;
    color:red;
  }
`

export default function Header(props) {
  
    return (
    <div>
        <DivHeader>
          
          <ButtonReset onClick ={props.deleteMatches}> <FaTrashAlt size = {18}/></ButtonReset>

          
          <ImgLogo src ={logo} />
  
          <ButtonChangePages onClick ={props.changePage}>
              { props.page
              ? <CgUserList size = {20}/>
              : <ImProfile />
              } 
          </ButtonChangePages>
  
        </DivHeader>
      
      </div>
    );
  }