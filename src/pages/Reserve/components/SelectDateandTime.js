import React, { useContext, useEffect } from 'react';
import DateAndTime from './elements/DateAndTime';
import { Button, ReservedButton } from '../../../elements';
import { auth } from '../../../config/fbConfig';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  DateTimeBtnsWrap,
  MainDateTimeContainer
} from './elements/ReserveContainers';

const SelectDateandTime = ({ toggle }) => {
  const { dateIsCorrect, setMessage } = useContext(ReserveContext);

  useEffect(() => {
    setMessage('');
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <MainDateTimeContainer>
      <DateAndTime />

      <DateTimeBtnsWrap>
        <Button onClick={handleSignOut}>
          <span>Sign Out</span>
        </Button>

        <ReservedButton disabled={!dateIsCorrect} onClick={toggle}>
          <span>Tables</span>
        </ReservedButton>
      </DateTimeBtnsWrap>
    </MainDateTimeContainer>
  );
};

export default SelectDateandTime;
