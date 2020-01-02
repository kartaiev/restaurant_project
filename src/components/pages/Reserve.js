import React from 'react';
import { Button, Container, Section } from '../../elements';
import { auth } from '../../config/fbConfig';

const Reserve = () => {
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
