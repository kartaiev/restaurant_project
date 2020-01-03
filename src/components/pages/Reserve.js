import React, { useContext, useEffect } from 'react';
import { Button, Container, Section } from '../../elements';
import { auth } from '../../config/fbConfig';
import { AuthContext } from '../../contexts/AuthContext';

const Reserve = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <Container>
      <Section>
        <Button onClick={() => auth.signOut()}>
          <span>Sign Out</span>
        </Button>
      </Section>
    </Container>
  );
};

export default Reserve;
