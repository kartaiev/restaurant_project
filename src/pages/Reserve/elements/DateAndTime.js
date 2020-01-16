import React from 'react';
import { DatePick, Subtitle } from '../../../elements';
import { centerCenter, yellow } from '../../../utilities';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

const DateAndTime = ({ displayName, value, onChange, message, label }) => {
  return (
    <>
      <Div>
        <Subtitle>Welcome back, {displayName}</Subtitle>
        <p>
          You can reserve 7 days in advance. <br />
          We are open 12am – 11pm. <br />
        </p>
        <Warning>{message}</Warning>
      </Div>

      <Div>
        <label htmlFor="date">{label}</label>
        <DatePick name="date" value={value} onChange={onChange} />
      </Div>
    </>
  );
};

export default DateAndTime;

const Div = styled.div`
  ${centerCenter({ fd: 'column' })}

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
