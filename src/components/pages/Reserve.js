import React, { useContext } from 'react';
import { Button, Container, Section } from '../../elements';
import { auth } from '../../config/fbConfig';
import { AuthContext } from '../../contexts/AuthContext';

const Reserve = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Container>
      <Section>
        <Button onClick={() => auth.signOut()}>
          <span>{currentUser.email}</span>
        </Button>
      </Section>
    </Container>
  );
};

export default Reserve;
