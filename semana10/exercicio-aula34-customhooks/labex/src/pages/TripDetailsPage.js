import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from '../router/coordinator';
import styled from 'styled-components'

function TripDetailsPage() {
  const history = useHistory();
  const [tripDetails, setTripDetails] = useState([])

  // useEffect(() => {
  //   const getTrips = () => {
  //     axios
  //     .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trip/NoIFVcOiSgTKTIPVZwXS")
  //     .then((res) => setTrips(res.data.trips))
  //     .catch((err) => console.log (err))
  //   };
    
  //   getTrips();
  // }, [setTrips])

  // const getTripDetail = (id) => {
  //   const token = window.localStorage.getItem("token");

  //   axios
  //     .get(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-jesus-cruz/trip/${id}`,
  //       {
  //         headers: {
  //           auth: token
  //         }
  //       }
  //     )
  //     .then((res) => {
  //       setTrip(res.data.trip);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const mapTrips = trips.map((trip) => {
  //   return (
  //     <TripDiv key={trip.id}>
  //       <p>Nome: {trip.name}</p>
  //       <p>Descrição: {trip.description}</p>
  //       <p>Planeta: {trip.planet}</p>
  //       <p>Duração: {trip.durationInDays}</p>
  //       <p>Data: {trip.date}</p>
  //     </TripDiv>
  //   )
  // })

  return (
    <div>
      <p>TripDetailsPage</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
