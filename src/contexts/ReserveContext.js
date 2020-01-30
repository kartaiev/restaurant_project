import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import useDidUpdate from '../hooks/useDidUpdate';
import moment from 'moment';
import fb, { auth } from '../config/fbConfig';

export const ReserveContext = createContext(undefined, undefined);

export const ReserveProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  //* Signing out //
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  //* Date and Time selection / deselection //
  const [dateSelected, setDateSelected] = useState(new Date());

  const handleDateAndTimeDeselected = () => setDateSelected(new Date());

  //* Warning messages if the wrong time was selected //
  useEffect(() => {
    setDateIsCorrect(false);
  }, []);
  const [message, setMessage] = useState('');
  const [label, setLabel] = useState('Select date and time:');
  const [dateIsCorrect, setDateIsCorrect] = useState(false);

  useDidUpdate(() => {
    const presentHour = moment(new Date()).hour();
    const selectedHour = moment(dateSelected).hour();
    const presentDate = moment(new Date()).date();
    const date = moment(dateSelected).date();
    const openingHour = 12;
    const closingHour = 23;
    const warningMessage1 =
      'Sorry, we are not open at this time. Select a time between 12PM and 11PM';
    const warningMessage2 = `We'd like to be prepared for your visit. So, select a time at least 2 hours from now`;

    if (date !== presentDate) {
      if (selectedHour > closingHour || selectedHour < openingHour) {
        setMessage(warningMessage1);
        setDateIsCorrect(false);
      } else {
        setMessage('');
        setLabel('You selected:');
        setDateIsCorrect(true);
      }
    } else {
      if (selectedHour > closingHour || selectedHour < openingHour) {
        setMessage(warningMessage1);
        setDateIsCorrect(false);
      } else if (
        (selectedHour > presentHour && selectedHour < presentHour + 2) ||
        selectedHour < presentHour
      ) {
        setMessage(warningMessage2);
        setDateIsCorrect(false);
      } else if (selectedHour === presentHour) {
        setMessage(warningMessage2);
        setDateIsCorrect(false);
      } else {
        setMessage('');
        setLabel('You selected:');
        setDateIsCorrect(true);
      }
    }
  }, [dateSelected]);

  //* Table availability //
  const [tablesNotAvailable, setTablesNotAvailable] = useState([]);
  const checkingAvailability = async () => {
    try {
      await fb
        .collection('reservations')
        .where('dateTime', '>', dateSelected - 3600000)
        .where('dateTime', '<', dateSelected + 3600000)
        .onSnapshot(querySnapshot => {
          querySnapshot.forEach(doc =>
            setTablesNotAvailable(prevState => [...prevState, doc.data().table])
          );
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  //* Which table to render //

  const whichTable = (table, greyTable, redTable, yellowTable) =>
    tablesNotAvailable.indexOf(table) !== -1
      ? greyTable
      : tableSelected[table]
      ? redTable
      : yellowTable;

  //* Table selection / deselection //
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

  const handleTableDeselected = () => {
    const table = Object.keys(tableSelected).find(
      key => tableSelected[key] === true
    );
    setTableSelected({ ...tableSelected, [table]: false });
  };

  //* Table reserved //
  const [tableReserved, setTableReserved] = useState('');

  useEffect(() => {
    setTableReserved(
      Object.keys(tableSelected).find(key => tableSelected[key] === true)
    );
  }, [tableSelected]);

  //* Sending reservation to the back //
  const handleSendingReserveToUserAcc = async () => {
    try {
      await fb.collection('reservations').add({
        userId: currentUser.id,
        dateTime: +dateSelected,
        table: tableReserved
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSendingReserveToRestaurant = async () => {
    try {
      await fb
        .collection('users')
        .doc(currentUser.id)
        .collection('orders')
        .add({
          dateTime: +dateSelected,
          table: tableReserved
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSendingReservation = async () => {
    await handleSendingReserveToUserAcc();
    await handleSendingReserveToRestaurant();
  };

  //* Getting reservation info from the back //
  const [reservationInfo, setReservationInfo] = useState({
    docId: ''
  });

  const handleGetReservationInfo = async () => {
    try {
      await fb
        .collection('reservations')
        .where('dateTime', '==', +dateSelected)
        .where('userId', '==', currentUser.id)
        .onSnapshot(querySnapshot =>
          querySnapshot.forEach(doc =>
            setReservationInfo({ ...doc.data(), docId: doc.id })
          )
        );
    } catch (error) {
      console.log(error.message);
    }
  };

  //* Delete reservation from the back //
  const handleDeleteReservation = async () => {
    try {
      await fb
        .collection('reservations')
        .doc(reservationInfo.docId)
        .delete();
      setReservationInfo({ ...{}, docId: '' });
    } catch (error) {
      console.log(error.message);
    }
  };

  //* Cancel reservation //
  const handleCancelReservation = async () => {
    await handleDeleteReservation();
    handleTableDeselected();
    handleDateAndTimeDeselected();
  };

  //* Getting all reservations //
  const [reservations, setReservations] = useState([]);
  const [fetching, setFetching] = useState(false);

  const handleGettingAllReservations = async () => {
    try {
      setFetching(true);
      await fb
        .collection('users')
        .doc(currentUser.id)
        .collection('orders')
        .onSnapshot(querySnapshot =>
          querySnapshot
            .docChanges()
            .forEach(
              change =>
                change.type === 'added' &&
                setReservations(prevState => [...prevState, change.doc.data()])
            )
        );

      setFetching(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  //* For pagination //
  const [currPage, setCurrPage] = useState(1);
  const [reservationsPerPage] = useState(5);

  const indexOfLastReservation = currPage * reservationsPerPage;
  const indexOfFirstReservation = indexOfLastReservation - reservationsPerPage;
  const sortedReservations = reservations.sort((a, b) => {
    return b.dateTime - a.dateTime;
  });
  const currReservations = sortedReservations.slice(
    indexOfFirstReservation,
    indexOfLastReservation
  );

  const paginate = num => setCurrPage(num);

  //*==========================//

  return (
    <ReserveContext.Provider
      value={{
        handleSignOut,
        dateSelected,
        setDateSelected,
        checkingAvailability,
        handleSendingReservation,
        handleDateAndTimeDeselected,
        dateIsCorrect,
        label,
        message,
        setTableSelected,
        tableSelected,
        tableReserved,
        handleTableSelected,
        handleTableDeselected,
        reservationInfo,
        setReservationInfo,
        handleGetReservationInfo,
        handleCancelReservation,
        setMessage,
        tablesNotAvailable,
        whichTable,
        handleGettingAllReservations,
        reservations,
        fetching,
        currReservations,
        reservationsPerPage,
        paginate
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};
