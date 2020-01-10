import React, { useEffect, useState } from 'react';
import { DatePick, Section } from '../../elements';

const Reserve = () => {
  const [selectedDate, setSelectDate] = useState(new Date());

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <Section>
      <DatePick value={selectedDate} onChange={date => setSelectDate(date)} />
    </Section>
  );
};

export default Reserve;
