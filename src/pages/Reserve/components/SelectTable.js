import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  MainTablesContainer,
  TablesBtnsWrap
} from './elements/ReserveContainers';

import AllTables from './elements/Tables/AllTables';

const SelectTable = () => {
  const { handleSendingReservation } = useContext(ReserveContext);

  return (
    <MainTablesContainer>
      <Subtitle>Select a table</Subtitle>
      <AllTables />
      <TablesBtnsWrap>
        <Link to="/reserve">
          <Button>
            <span>Back</span>
          </Button>
        </Link>
        <Link to="/reserve/thanks">
          <Button onClick={handleSendingReservation}>
            <span>Select</span>
          </Button>
        </Link>
      </TablesBtnsWrap>
    </MainTablesContainer>
  );
};

export default SelectTable;
