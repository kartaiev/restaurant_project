import React, { useEffect } from 'react';
import { pageVideoElement } from '../../elements';
import { above, betweenCenter, centerCenter, fullScreen } from '../../utilities';
import styled from 'styled-components';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import reserveVid from '../../assets/video/restaurantVid.mp4';
import SelectDateandTime from './components/SelectDateandTime';
import SelectTable from './components/SelectTable';
import 'firebase';


const Reserve = ({ on, toggle }) => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(reserveVid);

  //* Always brings client to 'select Date and Time' page //
  useEffect(() => {
    !on && toggle();
  }, []);

  return (
    <ReserveContainer>
      {Vid}
      {on ? (
        <SelectDateandTime on={on} toggle={toggle} />
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
