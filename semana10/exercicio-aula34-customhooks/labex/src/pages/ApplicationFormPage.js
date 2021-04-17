import React from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage, goToListTripsPage } from '../router/coordinator';

function ApplicationFormPage() {
  const history = useHistory();
  const [apply, setApply] = useState({})
  // useEffect(() => {    
  //   postApplyTrip();
  // }, [setApply])

  const postApplyTrip = (id) => {
    const body = 
      {
        name: "Astrodev",
        age: 20,
        applicationText: "Quero muuuuuuito ir!!!",
        profession: "Chefe",
        country: "Brasil"
      } 
    
    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trips/${id}/apply`)
    .then((res) => setApply(res.data))
    .catch((err) => console.log (err))
  };

  const mapTrips = trips.map((trip) => {
    return (
      <TripDiv key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Data: {trip.date}</p>
      </TripDiv>
    )
  })




  return (
    <div>
      <p>ApplicationFormPage</p>

      <button onClick={() => goToLastPage(history)}>Voltar</button>

      <select>
        <option>Escolha uma viagem</option>
        <option>Marte</option>
        <option>Dagobah</option>
      </select>
      <input placeholder="Nome"/>
      <input placeholder="E-mail"/>
      <input placeholder="Porque você quer ir a essa viagem?"/>

      <button onClick={() => goToListTripsPage(history)}>Enviar</button>
    </div>
  );
}

export default ApplicationFormPage;
