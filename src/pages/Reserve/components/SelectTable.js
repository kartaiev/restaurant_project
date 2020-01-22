import React, { useContext } from 'react';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  MainTablesContainer,
  TablesBtnsWrap
} from './elements/ReserveContainers';

import AllTables from './elements/Tables/AllTables';

const SelectTable = ({ toggle }) => {
  const { handleSendingReservation } = useContext(ReserveContext);

  return (
    <MainTablesContainer>
      <Subtitle>Select a table</Subtitle>
      <AllTables />
      <TablesBtnsWrap>
        <Button onClick={toggle}>
          <span>Back</span>
        </Button>
        <Button onClick={handleSendingReservation}>
          <span>Select</span>
        </Button>
      </TablesBtnsWrap>
    </MainTablesContainer>
  );
};

export default SelectTable;
