import React, { useContext, useEffect, useState } from 'react';
import { pageVideoElement } from '../../../elements';
import { AuthContext } from '../../../contexts/AuthContext';
import { above, betweenCenter, centerCenter, fullScreen } from '../../../utilities';

import styled from 'styled-components';

import { useWindowWidth } from '../../../hooks/useWindowWidth';
import reserveVid from '../../../assets/video/restaurantVid.mp4';
import SelectDateandTime from './SelectDateandTime';
import SelectTable from './SelectTable';
import moment from 'moment';

const Reserve = ({ on, toggle }) => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(reserveVid);

  const { currentUser } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [message, setMessage] = useState('');

  useEffect(() => {
    !on && toggle();
  }, []);

  useEffect(() => {
    const presentHour = moment(new Date()).hour();
    const hour = moment(selectedDate).hour();
    const presentDate = moment(new Date()).date();
    const date = moment(selectedDate).date();

    if (date === presentDate) {
      if (
        (hour < presentHour + 2 && hour > presentHour) ||
        hour < presentHour
      ) {
        setMessage(
          'We want to be prepared for your visit. So, select time at least 2 hours from now'
        );
      } else {
        setMessage('');
      }
    } else {
      setMessage('');
    }
  }, [selectedDate]);

  return (
    <ReserveContainer>
      {Vid}
      {on ? (
        <SelectDateandTime
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
