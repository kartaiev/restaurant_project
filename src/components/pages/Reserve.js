import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Container, Section, Subtitle } from '../../elements';
import { auth } from '../../config/fbConfig';
import { AuthContext } from '../../contexts/AuthContext';

const Reserve = () => {
  const { currentUser } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());

  return (
    <Container>
      <Section>
        <Subtitle>Welcome back, {currentUser.displayName}</Subtitle>
        <p>Choose date</p>
        <Calendar
          locale="en"
          style={{ background: 'black' }}
          onChange={date => setDate(date)}
          value={date}
        />
        <Button modifiers="big" onClick={() => auth.signOut()}>
          <span>Log Out</span>
        </Button>
      </Section>
    </Container>
  );
};

export default Reserve;
