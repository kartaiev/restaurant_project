import React, { useContext } from 'react';
import { HiddenButton } from '../HiddenButton';
import TableFor2Red from '../../../../../assets/images/tables/TableFor2Red.png';
import TableFor2Yellow from '../../../../../assets/images/tables/TableFor2Yellow.png';
import TableFor2Grey from '../../../../../assets/images/tables/TableFor2Grey.png';
import { ReserveContext } from '../../../../../contexts/ReserveContext';
import { useSpring } from 'react-spring';

const LeftTableFunc = () => {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  });

  const {
    tableSelected,
    handleTableSelected,
    whichTable,
    tablesNotAvailable
  } = useContext(ReserveContext);

  return Object.keys(tableSelected)
    .filter(table => +table.slice(-1) < 5)
    .map((table, i) => (
      <HiddenButton
        disabled={tablesNotAvailable.indexOf(table) !== -1}
        key={i}
        onClick={handleTableSelected(`${table}`)}
        state={tableSelected[table] ? 'selected' : ''}
      >
        <span state={tableSelected[table] ? 'selected' : ''}>
          {table.slice(-1)}
        </span>
        <img
          style={fade}
          src={whichTable(table, TableFor2Grey, TableFor2Red, TableFor2Yellow)}
          alt="table"
        />
      </HiddenButton>
    ));
};

export default LeftTableFunc;
