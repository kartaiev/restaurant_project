import React, { useContext, useEffect, useState } from 'react';
import { pageVideoElement } from '../../elements';
import { AuthContext } from '../../contexts/AuthContext';
import {
  above,
  betweenCenter,
  centerCenter,
  fullScreen
} from '../../utilities';
import styled from 'styled-components';
import useDidUpdate from '../../hooks/useDidUpdate';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import reserveVid from '../../assets/video/restaurantVid.mp4';
import SelectDateandTime from './SelectDateandTime';
import SelectTable from './SelectTable';
import moment from 'moment';

const Reserve = ({ on, toggle }) => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(reserveVid);

  const { currentUser } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('Select date and time:');

  //* Always brings client to 'select Date and Time' page //
  useEffect(() => {
    !on && toggle();
  }, []);

  //* Warning messages if the wrong time was selected //
  useDidUpdate(() => {
    const presentHour = moment(new Date()).hour();
    const selectedHour = moment(selectedDate).hour();
    const presentDate = moment(new Date()).date();
    const date = moment(selectedDate).date();
    const openingHour = 12;
    const closingHour = 23;
    const warningMessage1 =
      'Sorry, we are not open at this time. Select time between 12am and 11pm';
    const warningMessage2 =
      'We want to be prepared for your visit. So, select time at least 2 hours from now';

    if (date !== presentDate) {
      selectedHour > closingHour || selectedHour < openingHour
        ? setMessage(warningMessage1)
        : setMessage('');
      setLabel('You selected:');
    } else {
      if (selectedHour > closingHour || selectedHour < openingHour) {
        setMessage(warningMessage1);
      } else if (
        (selectedHour > presentHour && selectedHour < presentHour + 2) ||
        selectedHour < presentHour
      ) {
        setMessage(warningMessage2);
      } else setMessage('');
      setLabel('You selected:');
    }
  }, [selectedDate]);

  return (
    <ReserveContainer>
      {Vid}
      {on ? (
        <SelectDateandTime
          label={label}
          message={message}
          on={on}
          toggle={toggle}
          value={selectedDate}
          onChange={date => setSelectedDate(date)}
          displayName={currentUser.displayName}
        />
      ) : (
        <SelectTable on={on} toggle={toggle} />
      )}
    </ReserveContainer>
  );
};

export default Reserve;

const ReserveContainer = styled.div`
  ${fullScreen}
  ${centerCenter({ fd: 'column' })}
  ${above.med`
    ${betweenCenter};
    overflow: hidden;
  `}
`;
