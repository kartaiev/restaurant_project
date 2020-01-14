import React from 'react';
import DateAndTime from './elements/DateAndTime';
import { Button } from '../../../elements';
import styled from 'styled-components';
import { above, betweenCenter } from '../../../utilities';
import { auth } from '../../../config/fbConfig';

const SelectDateandTime = ({
  value,
  onChange,
  displayName,
  toggle,
  message
}) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ReserveWrap>
      <DateAndTime
        message={message}
        value={value}
        onChange={onChange}
        displayName={displayName}
      />

      <BtnsWrap>
        <Button onClick={handleSignOut}>
          <span>Sign Out</span>
        </Button>

        <Button onClick={toggle}>
          <span>Tables</span>
        </Button>
      </BtnsWrap>
    </ReserveWrap>
  );
};

export default SelectDateandTime;

const ReserveWrap = styled.div`
  width: 85%;
  height: 80%;
  ${betweenCenter({ fd: 'column' })};
  margin-top: 5vh;

  ${above.med`
    width: 40%;
    overflow: hidden;    
  `}

  label {
    padding-bottom: 1vh;
  }
`;

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  margin-top: 5vh;

  ${above.med`
    width: 85%;  
  `}

  ${Button} {
    width: 45%;
    height: 100%;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
    }
  }
`;
