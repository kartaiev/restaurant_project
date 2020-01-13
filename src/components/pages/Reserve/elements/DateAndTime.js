import React from 'react';
import { DatePick, Subtitle } from '../../../../elements';
import { centerCenter } from '../../../../utilities';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

const DateAndTime = ({ displayName, value, onChange }) => {
  return (
    <>
      <Div>
        <Subtitle>Welcome back, {displayName}</Subtitle>
        <p>
          You can reserve 7 days in advance. <br />
          We are open 10am – 11pm.
        </p>
      </Div>

      <Div>
        <label htmlFor="date">Select date and time:</label>
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
