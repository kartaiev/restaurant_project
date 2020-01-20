import React, { useContext } from 'react';
import { Button, Subtitle } from '../../../elements';
import { ReserveContext } from '../../../contexts/ReserveContext';
import {
  LeftRightTablesContainer,
  MainReservedContainer,
  MiddleTablesContainer,
  ReserveBtnsWrap,
  TablesContainer
} from './elements/ReserveContainers';
import LeftTablesFunc from './elements/Tables/LeftTablesFunc';
import RightTableFunc from './elements/Tables/RightTableFunc';
import MiddleTableFunc from './elements/Tables/MiddleTableFunc';

const SelectTable = ({ toggle }) => {
  const { handleSendingReservation } = useContext(ReserveContext);

  return (
    <MainReservedContainer>
      <Subtitle>Select a table</Subtitle>
      <TablesContainer>
        <LeftRightTablesContainer>{LeftTablesFunc()}</LeftRightTablesContainer>
        <MiddleTablesContainer>{MiddleTableFunc()}</MiddleTablesContainer>
        <LeftRightTablesContainer>{RightTableFunc()}</LeftRightTablesContainer>
      </TablesContainer>
      <ReserveBtnsWrap>
        <Button onClick={toggle}>
          <span>Back</span>
        </Button>
        <Button onClick={handleSendingReservation}>
          <span>Select</span>
        </Button>
      </ReserveBtnsWrap>
    </MainReservedContainer>
  );
};

export default SelectTable;
