import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThanksBtnsWrap, ThanksReservationInfo } from './elements/ReserveContainers';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';

const ThanksForReservation = () => {
  const { tableReserved, dateSelected } = useContext(ReserveContext);

  return (
    <>
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
        <Link to="/reserve/reservations">
          <Button>
            <span>Your reservations</span>
          </Button>
        </Link>
      </ThanksBtnsWrap>
    </>
  );
};

export default ThanksForReservation;
