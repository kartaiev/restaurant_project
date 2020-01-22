import React, { useContext } from 'react';
import { HiddenButton } from '../HiddenButton';
import TableFor6Red from '../../../../../assets/images/tables/TableFor6Red.png';
import TableFor6Yellow from '../../../../../assets/images/tables/TableFor6Yellow.png';
import { ReserveContext } from '../../../../../contexts/ReserveContext';

const MiddleTableFunc = () => {
  const { tableSelected, handleTableSelected } = useContext(ReserveContext);
  return Object.keys(tableSelected)
    .filter(table => +table.slice(-1) > 4 && +table.slice(-1) < 7)
    .map((table, i) => (
      <HiddenButton
        key={i}
        onClick={handleTableSelected(`${table}`)}
        state={tableSelected[table] ? 'selected' : ''}
      >
        <span state={tableSelected[table] ? 'selected' : ''}>
          {table.slice(-1)}
        </span>
        <img
          src={tableSelected[table] ? TableFor6Red : TableFor6Yellow}
          alt="table"
        />
      </HiddenButton>
    ));
};

export default MiddleTableFunc;
