import React, { useContext } from 'react';
import { HiddenButton } from '../HiddenButton';
import TableFor2Red from '../../../../../assets/images/tables/TableFor2Red.png';
import TableFor2Yellow from '../../../../../assets/images/tables/TableFor2Yellow.png';
import { ReserveContext } from '../../../../../contexts/ReserveContext';

const LeftTableFunc = () => {
  const { tableSelected, handleTableSelected } = useContext(ReserveContext);
  return Object.keys(tableSelected)
    .filter(table => +table.slice(-1) < 5)
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
          src={tableSelected[table] ? TableFor2Red : TableFor2Yellow}
          alt="table"
        />
      </HiddenButton>
    ));
};

export default LeftTableFunc;
