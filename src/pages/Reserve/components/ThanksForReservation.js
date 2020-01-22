import React, { useContext, useEffect } from 'react';
import { MainThanksContainer, ThanksBtnsWrap, ThanksReservationInfo } from './elements/ReserveContainers';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';

const ThanksForReservation = ({ toggle }) => {
  const {
    tableReserved,
    dateSelected,
    handleGetReservationInfo,
    handleDateAndTimeDeselected,
    handleDeleteReservation,
    handleTableDeselected,
    setIsReserved
  } = useContext(ReserveContext);

  useEffect(() => {
    handleGetReservationInfo();
    console.log('test4');
  }, []);

  const handleCancelReservation = () => {
    setIsReserved(false);
    handleDeleteReservation();
    handleTableDeselected();
    handleDateAndTimeDeselected();
    toggle();
  };

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
        <Button onClick={handleCancelReservation}>
          <span>Cancel your reservation</span>
        </Button>
      </ThanksBtnsWrap>
    </MainThanksContainer>
  );
};

export default ThanksForReservation;
