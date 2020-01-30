import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DateAndTime from './elements/DateAndTime';
import { Button, ReservedButton } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  DateTimeBtnsWrap,
  MainDateTimeContainer
} from './elements/ReserveContainers';

const SelectDateandTime = () => {
  const { dateIsCorrect, setMessage, handleSignOut } = useContext(
    ReserveContext
  );

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <MainDateTimeContainer>
      <DateAndTime />

      <DateTimeBtnsWrap>
        <Button onClick={handleSignOut}>
          <span>Sign Out</span>
        </Button>

        <Link to="/reserve/table">
          <ReservedButton disabled={!dateIsCorrect}>
            <span>Tables</span>
          </ReservedButton>
        </Link>
      </DateTimeBtnsWrap>
    </MainDateTimeContainer>
  );
};

export default SelectDateandTime;
