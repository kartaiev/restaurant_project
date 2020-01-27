import React, { useContext, useEffect, useState } from 'react';
import fb from '../../../config/fbConfig';
import { AuthContext } from '../../../contexts/AuthContext';
import { MainDateTimeContainer } from './elements/ReserveContainers';
import { Subtitle } from '../../../elements';
import { Roller } from 'react-awesome-spinners';
import { yellow } from '../../../utilities';

const Reservations = () => {
  const { currentUser } = useContext(AuthContext);
  const [reservations, setReservations] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const getReservations = async () => {
      try {
        setFetching(true);
        const reserves = await fb
          .collection('reservations')
          .where('userId', '==', currentUser.id)
          .get();
        reserves.forEach(doc =>
          setReservations(prevState => [...prevState, doc.data()])
        );
        setFetching(false);
        console.log(reserves);
        console.log(reservations);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReservations();
  }, []);

  return (
    <MainDateTimeContainer>
      <Subtitle>Your reservations:</Subtitle>
      {fetching ? (
        <Roller style={{ color: `${yellow}` }} />
      ) : (
        reservations.map((doc, id) => <Subtitle key={id}>{doc.table}</Subtitle>)
      )}
    </MainDateTimeContainer>
  );
};

export default Reservations;
