import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MainThanksContainer,
  ThanksBtnsWrap,
  ThanksReservationInfo
} from './elements/ReserveContainers';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';

const ThanksForReservation = () => {
  const {
    tableReserved,
    dateSelected,
    handleGetReservationInfo,
    handleCancelReservation
  } = useContext(ReserveContext);

  useEffect(() => {
    handleGetReservationInfo();
  }, []);

  return (
    <MainThanksContainer>
      <Subtitle>Thank you for being our guest!</Subtitle>
      <ThanksReservationInfo>
        <h3>YOUR RESERVATION:</h3>
        <p>
          Table: <span>#{tableReserved.slice(-1)}</span>
        </p>
        <p>
          Date: <span>{moment(dateSelected).calendar()}</span>{' '}
        </p>
      </ThanksReservationInfo>
      <ThanksBtnsWrap>
        <Link to="/reserve">
          <Button onClick={handleCancelReservation}>
            <span>Cancel</span>
          </Button>
        </Link>
        <Link to="/reserve/reservations">
          <Button>
            <span>Reservations</span>
          </Button>
        </Link>
      </ThanksBtnsWrap>
    </MainThanksContainer>
  );
};

export default ThanksForReservation;
