import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, ReservedButton, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import { TablesBtnsWrap } from './elements/ReserveContainers';

import AllTables from './elements/AllTables';

const SelectTable = () => {
  const {
    handleSendingReserveToTheUserAcc,
    handleCheckingAvailability,
    tableSelected,
    dateSelected
  } = useContext(ReserveContext);

  useEffect(() => {
    handleCheckingAvailability();
  }, [dateSelected]);

  return (
    <>
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
            onClick={handleSendingReserveToTheUserAcc}
          >
            <span>Select</span>
          </ReservedButton>
        </Link>
      </TablesBtnsWrap>
    </>
  );
};

export default SelectTable;
