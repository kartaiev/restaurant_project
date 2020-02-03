import React, { useContext, useEffect } from 'react';
import {
  ReservationContent,
  ReservationsContainer,
  ReservationWrap
} from './elements/ReserveContainers';
import { Subtitle } from '../../../elements';
import { HourGlass } from 'react-awesome-spinners';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';
import Pagination from './elements/Pagination';
import { HiddenButton } from './elements/HiddenButton';
import { DelBtn } from './elements/PseudoBtns';

const Reservations = () => {
  const {
    handleGettingAllReservations,
    fetching,
    currReservations,
    handleDeleteReserveFromUser,
    handleFilterReservations
  } = useContext(ReserveContext);

  useEffect(() => {
    handleGettingAllReservations();
  }, []);

  useEffect(() => {
    handleFilterReservations();
  }, [handleFilterReservations]);

  return (
    <>
      <Subtitle>Reservations:</Subtitle>
      <ReservationsContainer>
        {fetching ? (
          <HourGlass />
        ) : (
          currReservations.map((doc, id) => (
            <ReservationWrap key={id}>
              <ReservationContent time={doc.dateTime <= +new Date() && 'past'}>
                <p>{moment(doc.dateTime).format('LLL')}</p>
                <p>table {doc.table.slice(-1)}</p>
              </ReservationContent>
              {doc.dateTime > +new Date() && (
                <HiddenButton onClick={handleDeleteReserveFromUser(doc.id)}>
                  <DelBtn>
                    <span />
                    <span />
                  </DelBtn>
                </HiddenButton>
              )}
            </ReservationWrap>
          ))
        )}
      </ReservationsContainer>
      <Pagination />
    </>
  );
};

export default Reservations;
