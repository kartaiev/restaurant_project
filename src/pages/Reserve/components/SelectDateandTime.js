import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DateAndTime from './elements/DateAndTime';
import { Button, ReservedButton } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import { DateTimeBtnsWrap } from './elements/ReserveContainers';

const SelectDateandTime = () => {
  const { dateIsCorrect, setMessage, handleSignOut } = useContext(
    ReserveContext
  );

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <>
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
    </>
  );
};

export default SelectDateandTime;
