import React, { useContext, useEffect } from 'react';
import {
  MainReservationsContainer,
  ReservationContent,
  ReservationsBtnWrap,
  ReservationsContainer,
  ReservationWrap
} from './elements/ReserveContainers';
import { Subtitle } from '../../../elements';
import { Roller } from 'react-awesome-spinners';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';
import Pagination from './elements/Pagination';
import { HiddenButton } from './elements/HiddenButton';
import { FiEdit } from 'react-icons/fi';
import { DelBtn, EditBtn } from './elements/PseudoBtns';

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
    <MainReservationsContainer>
      <Subtitle>Reservations:</Subtitle>
      <ReservationsContainer>
        {fetching ? (
          <Roller />
        ) : (
          currReservations.map((doc, id) => (
            <ReservationWrap key={id}>
              <ReservationContent time={doc.dateTime <= +new Date() && 'past'}>
                <p>{moment(doc.dateTime).format('LLL')}</p>
                <p>table {doc.table.slice(-1)}</p>
              </ReservationContent>
              {doc.dateTime > +new Date() && (
                <ReservationsBtnWrap>
                  <HiddenButton>
                    <EditBtn>
                      <FiEdit />
                    </EditBtn>
                  </HiddenButton>
                  <HiddenButton onClick={handleDeleteReserveFromUser(doc.id)}>
                    <DelBtn>
                      <span />
                      <span />
                    </DelBtn>
                  </HiddenButton>
                </ReservationsBtnWrap>
              )}
            </ReservationWrap>
          ))
        )}
      </ReservationsContainer>
      <Pagination />
    </MainReservationsContainer>
  );
};

export default Reservations;
