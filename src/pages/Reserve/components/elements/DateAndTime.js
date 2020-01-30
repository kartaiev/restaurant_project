import React, { useContext } from 'react';
import { DatePick, Subtitle } from '../../../../elements';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ReserveContext } from '../../../../contexts/ReserveContext';
import { DateTimeContainer, Warning } from './ReserveContainers';
import { Link } from 'react-router-dom';

const DateAndTime = () => {
  const { currentUser } = useContext(AuthContext);
  const { message, label, handleSelectDateAndTime, dateSelected } = useContext(
    ReserveContext
  );

  return (
    <>
      <DateTimeContainer>
        <Subtitle>Welcome back, {currentUser.displayName}</Subtitle>
        <p>
          You can reserve 7 days in advance. <br />
          We are open 12PM – 11PM. <br />
        </p>
        <Link to="/reserve/reservations">Your reservations</Link>
        <Warning>{message}</Warning>
      </DateTimeContainer>

      <DateTimeContainer>
        <label htmlFor="date">{label}</label>
        <DatePick
          name="date"
          value={dateSelected}
          onChange={handleSelectDateAndTime}
        />
      </DateTimeContainer>
    </>
  );
};

export default DateAndTime;
