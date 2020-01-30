import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ReservedButton, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  MainTablesContainer,
  TablesBtnsWrap
} from './elements/ReserveContainers';

import AllTables from './elements/Tables/AllTables';

const SelectTable = () => {
  const {
    handleSendingReservation,
    checkingAvailability,
    tableSelected,
    dateSelected
  } = useContext(ReserveContext);

  useEffect(() => {
    checkingAvailability();
  }, [dateSelected]);

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
          <ReservedButton
            disabled={!Object.values(tableSelected).find(val => val === true)}
            onClick={handleSendingReservation}
          >
            <span>Select</span>
          </ReservedButton>
        </Link>
      </TablesBtnsWrap>
    </MainTablesContainer>
  );
};

export default SelectTable;
