import React, { useContext, useEffect } from 'react';
import { pageVideoElement } from '../../elements';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import reserveVid from '../../assets/video/restaurantVid.mp4';
import SelectDateandTime from './components/SelectDateandTime';
import SelectTable from './components/SelectTable';
import 'firebase';
import { ReserveContext } from '../../contexts/ReserveContext';
import ThanksForReservation from './components/ThanksForReservation';
import { MainReserveContainer } from './components/elements/ReserveContainers';

const Reserve = ({ on, toggle }) => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(reserveVid);
  const { isReserved, setIsReserved } = useContext(ReserveContext);

  //* Always brings client to 'select Date and Time' page //
  useEffect(() => {
    !on && toggle();
  }, []);

  useEffect(() => {
    setIsReserved(false);
  }, []);

  return (
    <MainReserveContainer>
      {Vid}

      {isReserved ? (
        <ThanksForReservation toggle={toggle} />
      ) : on ? (
        <SelectDateandTime on={on} toggle={toggle} />
      ) : (
        <SelectTable on={on} toggle={toggle} />
      )}
    </MainReserveContainer>
  );
};

export default Reserve;
