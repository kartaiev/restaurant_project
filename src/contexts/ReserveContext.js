import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import useDidUpdate from '../hooks/useDidUpdate';
import moment from 'moment';
import fb from '../config/fbConfig';

export const ReserveContext = createContext(undefined, undefined);

export const ReserveProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  //* Date and Time selection //
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDateAndTime = date => setSelectedDate(date);

  // //* Table availability //
  // const [tableAvailible, setTableAvailible] = useState({
  //   table1: false,
  //   table2: false,
  //   table3: false,
  //   table4: false,
  //   table5: false,
  //   table6: false,
  //   table7: false,
  //   table8: false,
  //   table9: false
  // });

  //* Table selection //
  const [tableSelected, setTableSelected] = useState({
    table1: false,
    table2: false,
    table3: false,
    table4: false,
    table5: false,
    table6: false,
    table7: false,
    table8: false,
    table9: false
  });

  const handleTableSelected = table => () => {
    setTableSelected({ ...tableSelected, [table]: !tableSelected[table] });
  };

  //* Table reserved //
  const [tableReserved, setTableReserved] = useState('');

  useEffect(() => {
    setTableReserved(
      Object.keys(tableSelected).find(key => tableSelected[key] === true)
    );
  }, [tableSelected]);

  //* Sending reservation to the back //
  const handleSendingReservation = async e => {
    e.preventDefault();
    try {
      await fb.collection('reservations').add({
        userId: currentUser.id,
        dateTime: +selectedDate,
        table: tableReserved
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  //* Warning messages if the wrong time was selected //
  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('Select date and time:');

  useDidUpdate(() => {
    const presentHour = moment(new Date()).hour();
    const selectedHour = moment(selectedDate).hour();
    const presentDate = moment(new Date()).date();
    const date = moment(selectedDate).date();
    const openingHour = 12;
    const closingHour = 23;
    const warningMessage1 =
      'Sorry, we are not open at this time. Select time between 12PM and 11PM';
    const warningMessage2 = `We'd like to be prepared for your visit. So, select time at least 2 hours from now`;

    if (date !== presentDate) {
      selectedHour > closingHour || selectedHour < openingHour
        ? setMessage(warningMessage1)
        : setMessage('');
      setLabel('You selected:');
    } else {
      if (selectedHour > closingHour || selectedHour < openingHour) {
        setMessage(warningMessage1);
      } else if (
        (selectedHour > presentHour && selectedHour < presentHour + 2) ||
        selectedHour < presentHour
      ) {
        setMessage(warningMessage2);
      } else setMessage('');
      setLabel('You selected:');
    }
  }, [selectedDate]);

  return (
    <ReserveContext.Provider
      value={{
        selectedDate,
        handleSelectDateAndTime,
        handleSendingReservation,
        label,
        message,
        setTableSelected,
        tableSelected,
        handleTableSelected
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};
