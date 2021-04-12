import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header'
import ChooseProfile from './Pages/ChooseProfile/ChooseProfile';


import AllMatches from './Pages/AllMatches/AllMatches';
import styled from "styled-components";

const AppContainer = styled.div`
  width: 300px;
  height: 550px;
  background-color: white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  
  align-items:center;
  padding:20% 40%;
`

export default function App() {
  const [profileList, setProfileList] = useState([]);
  const [liked, setLiked] = useState(true);
  const [matches, setMatches] = useState([])
  const [page, setPage] = useState("ChooseProfile")
 
  const choosePerson = async (id, choice) => {
    
    const body = {
      id: "71gMbZs2txS9LDvGK5Ew",
	    choice: true
    }

    try {
      const res = await axios
        .post ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-jesus-cruz/choose-person",
         body)
        setLiked(res.data);
        console.log (liked, "liked")
      } catch (err) {
          console.log(err, "Não foi possível dar match");
        } 
        
  };

  const getMatches = async (id, choice) => {
    try {
      const res = await axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-jesus-cruz/matches")
        setMatches(res.data.matches);
      } catch (err) {
          console.log("Não foi possível mostrar os matches");
      }
      console.log (matches,"deu match")
  }


  const addMatchesList = () => {
    if( liked === true) {
      matches.push("blza")
    } console.log(matches)
  }

  
  const matchesList = matches.map((profiles)=> {
    return (
     <p key={profiles.id}>{profiles.name}</p> 
    )
  })

  const changePage = () => {
    if (page === "AllMatches")
    return <AllMatches/>
    console.log("clicou")
  };

  const deleteMatches = (id) => {
    if (window.confirm("Deseja mesmo deletar todos os Matches")) {
      axios
        .pute(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-jesus-cruz/clear",
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  const telaInicial = page;

  return (
    <div>
        <AppContainer>
          <Header 
            deleteMatches ={deleteMatches}
            page={page}
            changePage={changePage}
            
          />

        { telaInicial
        ? <ChooseProfile 
        profileList={profileList}
        setProfileList={setProfileList}
        choosePerson={choosePerson}
        getMatches={getMatches}
        />
        : <AllMatches 
        getMatches={getMatches}
        matchesList={matchesList}
        addMatchesList={addMatchesList}
        />  
        
        }

        

        
    
      </AppContainer>

    </div>
    
  );
};

