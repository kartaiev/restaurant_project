import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { pageVideoElement } from '../../elements';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import reserveVid from '../../assets/video/restaurantVid.mp4';
import SelectDateandTime from './components/SelectDateandTime';
import SelectTable from './components/SelectTable';
import 'firebase';
import ThanksForReservation from './components/ThanksForReservation';
import {
  MainReserveContainer,
  ReserveContainer
} from './components/elements/ReserveContainers';
import Reservations from './components/Reservations';

const Reserve = () => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(reserveVid);

  return (
    <MainReserveContainer>
      {Vid}
      <Switch>
        <ReserveContainer>
          <Route path="/reserve" component={SelectDateandTime} exact />
          <Route path="/reserve/table" component={SelectTable} exact />
          <Route
            path="/reserve/thanks"
            component={ThanksForReservation}
            exact
          />
          <Route path="/reserve/reservations" component={Reservations} exact />
        </ReserveContainer>
      </Switch>
    </MainReserveContainer>
  );
};

export default Reserve;
