import React, { useContext } from 'react';
import { DatePick, Subtitle } from '../../../../elements';
import { above, centerCenter, yellow } from '../../../../utilities';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { AuthContext } from '../../../../contexts/AuthContext';
import { ReserveContext } from '../../../../contexts/ReserveContext';

const DateAndTime = () => {
  const { currentUser } = useContext(AuthContext);
  const { message, label, handleSelectDateAndTime, selectedDate } = useContext(
    ReserveContext
  );

  return (
    <>
      <Div>
        <Subtitle>Welcome back, {currentUser.displayName}</Subtitle>
        <p>
          You can reserve 7 days in advance. <br />
          We are open 12PM – 11PM. <br />
        </p>
        <Warning>{message}</Warning>
      </Div>

      <Div>
        <label htmlFor="date">{label}</label>
        <DatePick
          name="date"
          value={selectedDate}
          onChange={handleSelectDateAndTime}
        />
      </Div>
    </>
  );
};

export default DateAndTime;

const Div = styled.div`
  ${centerCenter({ fd: 'column' })};
  ${above.med`
    width: 85%;
  `}

  p {
    text-align: center;
    color: ${rgba('#cccccc', 0.6)};
  }
`;

const Warning = styled.div`
  color: ${yellow};
  margin-top: 3vh;
  text-align: center;
  width: 85%;
`;
