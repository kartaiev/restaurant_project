import React, { useContext } from 'react';
import { ReserveContext } from '../../../../contexts/ReserveContext';
import { PaginationNav } from './PaginationNav';

const Pagination = () => {
  const pageNums = [];

  const { reservationsPerPage, reservations, handlePaginate } = useContext(
    ReserveContext
  );

  for (
    let i = 1;
    i <= Math.ceil(reservations.length / reservationsPerPage);
    i++
  ) {
    pageNums.push(i);
  }

  return (
    <PaginationNav>
      <ul>
        {pageNums.map(num => {
          return (
            <li key={num}>
              <a onClick={() => handlePaginate(num)} href="#">
                {num}
              </a>
            </li>
          );
        })}
      </ul>
    </PaginationNav>
  );
};

export default Pagination;
