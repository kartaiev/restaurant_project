import React, { useContext, useState } from 'react';
import { Button } from '../../../elements';
import { AuthContext } from '../../../contexts/AuthContext';
import { auth } from '../../../config/fbConfig';
import DateAndTime from './elements/DateAndTime';
import {
  above,
  betweenCenter,
  centerCenter,
  fullScreen
} from '../../../utilities';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Reserve = () => {
  const { currentUser } = useContext(AuthContext);
  const [selectedDate, setSelectDate] = useState(new Date());

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ReserveContainer>
      <ReserveWrap>
        <DateAndTime
          value={selectedDate}
          onChange={date => setSelectDate(date)}
          displayName={currentUser.displayName}
        />

        <BtnsWrap>
          <Button onClick={handleSignOut}>
            <span>Sign Out</span>
          </Button>
          <NavLink to="/tables">
            <Button>
              <span>Tables</span>
            </Button>
          </NavLink>
        </BtnsWrap>
      </ReserveWrap>
    </ReserveContainer>
  );
};

export default Reserve;

const ReserveContainer = styled.div`
  ${fullScreen}
  ${centerCenter({ fd: 'column' })}
`;

const ReserveWrap = styled.div`
  width: 80%;
  height: 80%;
  ${betweenCenter({ fd: 'column' })};
  margin-top: 5vh;

  label {
    padding-bottom: 1vh;
  }
`;

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  margin-top: 5vh;
  button {
    width: 45%;
  }

  a {
    width: 45%;
    height: 100%;

    ${Button} {
      width: 100%;
      height: 100%;
      text-align: center;

      span {
        position: relative;
        z-index: 1;
      }
    }
  }

  ${above.med`
    width: 80%;
  `}
`;
