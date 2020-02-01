import React, { useContext } from 'react';
import {
  LeftRightTablesContainer,
  MiddleTablesContainer,
  TablesContainer
} from './ReserveContainers';
import { ReserveContext } from '../../../../contexts/ReserveContext';
import TableFor2Grey from '../../../../assets/images/tables/TableFor2Grey.png';
import TableFor2Red from '../../../../assets/images/tables/TableFor2Red.png';
import TableFor2Yellow from '../../../../assets/images/tables/TableFor2Yellow.png';
import TableFor6Grey from '../../../../assets/images/tables/TableFor6Grey.png';
import TableFor6Red from '../../../../assets/images/tables/TableFor6Red.png';
import TableFor6Yellow from '../../../../assets/images/tables/TableFor6Yellow.png';
import TableFor4Grey from '../../../../assets/images/tables/TableFor4Grey.png';
import TableFor4Red from '../../../../assets/images/tables/TableFor4Red.png';
import TableFor4Yellow from '../../../../assets/images/tables/TableFor4Yellow.png';

const AllTables = () => {
  const { tablesSectionFunc } = useContext(ReserveContext);

  return (
    <TablesContainer>
      <LeftRightTablesContainer>
        {tablesSectionFunc(
          table => +table.slice(-1) < 5,
          TableFor2Grey,
          TableFor2Red,
          TableFor2Yellow
        )}
      </LeftRightTablesContainer>
      <MiddleTablesContainer>
        {tablesSectionFunc(
          table => +table.slice(-1) > 4 && +table.slice(-1) < 7,
          TableFor6Grey,
          TableFor6Red,
          TableFor6Yellow
        )}
      </MiddleTablesContainer>
      <LeftRightTablesContainer>
        {tablesSectionFunc(
          table => +table.slice(-1) > 6,
          TableFor4Grey,
          TableFor4Red,
          TableFor4Yellow
        )}
      </LeftRightTablesContainer>
    </TablesContainer>
  );
};

export default AllTables;
