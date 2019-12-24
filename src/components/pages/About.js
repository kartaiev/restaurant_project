import React from 'react';
import standingSteak from '../../assets/images/pages/about.jpg';
import styled from 'styled-components';
import {
  Article,
  Content,
  Image,
  Section,
  Subtitle,
  Title
} from '../../elements';

export const About = () => {
  return (
    <Article>
      <Image src={standingSteak} alt="standing steak" />

      <Section>
        <Title>About</Title>

        <Content>
          <Subtitle>Holy Smokes?</Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            mollitia non, officia sed sequi veritatis voluptatibus. Ab assumenda
            consectetur distinctio dolore et eveniet ex expedita maiores soluta
            ullam? Accusantium aut deserunt est fuga magnam modi nam
            necessitatibus neque obcaecati, odit provident qui quis recusandae
            tempora.
          </Paragraph>
        </Content>

        <Content>
          <Subtitle>Philosophy</Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis
            error, exercitationem fuga id illum ipsam laboriosam laborum, magni
            modi nemo nulla odit perferendis quos unde! Cumque dolore doloremque
            hic in maiores nisi omnis sit?
          </Paragraph>
        </Content>

        <Content>
          <Subtitle>History </Subtitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            deleniti deserunt repellendus. Adipisci cupiditate ex in laboriosam
            quae, quam quis quo reprehenderit sed voluptate. Debitis dolorem
            eligendi est minima nobis odio officia quo ullam vel vitae. Ea
            exercitationem fugiat laborum tenetur velit? Illo itaque iure nulla
            numquam recusandae rerum sed.
          </Paragraph>
        </Content>
      </Section>
    </Article>
  );
};

const Paragraph = styled.p`
  padding: 3vh 0 5vh 0;
`;
