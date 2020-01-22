import React from 'react';
import {
  LeftRightTablesContainer,
  MiddleTablesContainer,
  TablesContainer
} from '../ReserveContainers';
import LeftTablesFunc from './LeftTablesFunc';
import MiddleTableFunc from './MiddleTableFunc';
import RightTableFunc from './RightTableFunc';

const AllTables = () => (
  <TablesContainer>
    <LeftRightTablesContainer>{LeftTablesFunc()}</LeftRightTablesContainer>
    <MiddleTablesContainer>{MiddleTableFunc()}</MiddleTablesContainer>
    <LeftRightTablesContainer>{RightTableFunc()}</LeftRightTablesContainer>
  </TablesContainer>
);

export default AllTables;
