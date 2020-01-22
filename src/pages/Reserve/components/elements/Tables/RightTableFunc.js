import React, { useContext } from 'react';
import { HiddenButton } from '../HiddenButton';
import TableFor4Red from '../../../../../assets/images/tables/TableFor4Red.png';
import TableFor4Yellow from '../../../../../assets/images/tables/TableFor4Yellow.png';
import { ReserveContext } from '../../../../../contexts/ReserveContext';

const RightTableFunc = () => {
  const { tableSelected, handleTableSelected } = useContext(ReserveContext);
  return Object.keys(tableSelected)
    .filter(table => +table.slice(-1) > 6)
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
          src={tableSelected[table] ? TableFor4Red : TableFor4Yellow}
          alt="table"
        />
      </HiddenButton>
    ));
};

export default RightTableFunc;
