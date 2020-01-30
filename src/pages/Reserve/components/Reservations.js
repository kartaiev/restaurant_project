import React, { useContext, useEffect } from 'react';
import {
  MainReservationsContainer,
  ReservationContent,
  ReservationsContainer,
  ReservationWrap
} from './elements/ReserveContainers';
import { Subtitle } from '../../../elements';
import { Roller } from 'react-awesome-spinners';
import {
  centerCenter,
  easeOut,
  fixed,
  grey,
  red,
  yellow
} from '../../../utilities';
import { ReserveContext } from '../../../contexts/ReserveContext';
import moment from 'moment';
import styled from 'styled-components';
import Pagination from './elements/Pagination';
import { HiddenButton } from './elements/HiddenButton';

const Reservations = () => {
  const {
    handleGettingAllReservations,
    fetching,
    currReservations,
    handleDeleteReservation
  } = useContext(ReserveContext);

  useEffect(() => {
    handleGettingAllReservations();
  }, []);

  return (
    <MainReservationsContainer>
      <Subtitle>Reservations:</Subtitle>
      <ReservationsContainer>
        {fetching ? (
          <Roller style={{ color: yellow }} />
        ) : (
          currReservations.map((doc, id) => (
            <ReservationWrap key={id}>
              <ReservationContent>
                <p>{moment(doc.dateTime).format('LLL')}</p>
                <p>{doc.table}</p>
              </ReservationContent>
              <HiddenButton onClick={handleDeleteReservation}>
                <DelBtn>
                  <span />
                  <span />
                </DelBtn>
              </HiddenButton>
            </ReservationWrap>
          ))
        )}
      </ReservationsContainer>
      <Pagination />
    </MainReservationsContainer>
  );
};

export default Reservations;

const DelBtn = styled.div`
  height: 10vh;
  width: 25px;
  ${centerCenter};
  cursor: pointer;
  ${fixed({ x: '3%', y: '1,5rem', xProp: 'right' })};

  &:hover > span {
    background-color: ${red};
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${grey};
    position: absolute;
    left: 0;
    ${easeOut};

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;
