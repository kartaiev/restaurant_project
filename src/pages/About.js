import React from 'react';
import standingSteak from '../assets/images/pages/about.jpg';
import styled from 'styled-components';
import {
  Content,
  pageImageElement,
  pageVideoElement,
  Section,
  Subtitle,
  Title
} from '../elements';
import { useWindowWidth } from '../hooks/useWindowWidth';
import aboutVid from '../assets/video/aboutVid.mp4';

const About = () => {
  const imgOrVid =
    useWindowWidth() <= 768
      ? pageImageElement(standingSteak)
      : pageVideoElement(aboutVid);

  return (
    <>
      {imgOrVid}

      <Section>
        <Title>About</Title>

        <Content>
          <Subtitle>Holy Smokes?</Subtitle>
          <Paragraph>
            Hot chicken ugh sustainable food truck microdosing franzen wayfarers
            post-ironic unicorn marfa tbh twee woke selvage kogi. 3 wolf moon
            cliche migas subway tile, synth art party health goth tofu kinfolk
            literally air plant. Squid messenger bag next level enamel pin
            humblebrag master cleanse sartorial bespoke. Messenger bag tilde
            yuccie copper mug gochujang hella 8-bit iceland marfa air plant
            scenester pinterest truffaut. Pinterest disrupt PBR&B squid four
            loko narwhal farm-to-table leggings pabst meggings fingerstache
            cray. Raw denim aesthetic ugh flannel pork belly, bitters
            microdosing. Typewriter before they sold out truffaut, direct trade
            chillwave YOLO next level.
          </Paragraph>
        </Content>

        <Content>
          <Subtitle>Philosophy</Subtitle>
          <Paragraph>
            Art party poke vinyl iceland kale chips next level. Yr narwhal
            hashtag meh kinfolk, fanny pack hammock portland artisan flannel.
            Wayfarers synth hell of williamsburg craft beer drinking vinegar
            kickstarter adaptogen man bun 3 wolf moon gluten-free roof party
            master cleanse. Marfa trust fund typewriter, pop-up hexagon unicorn
            taiyaki la croix you probably haven't heard of them edison bulb vice
            try-hard.
          </Paragraph>
        </Content>

        <Content>
          <Subtitle>History </Subtitle>
          <Paragraph>
            Swag selfies green juice DIY cardigan sartorial. XOXO pickled YOLO
            street art, distillery vape iceland jianbing messenger bag. Neutra
            woke copper mug VHS tote bag echo park. Cold-pressed hoodie salvia
            chartreuse raclette pabst leggings. Plaid tbh viral vape man bun,
            fanny pack retro neutra PBR&B next level thundercats. Pork belly
            ramps iceland, vape small batch forage raclette deep v you probably
            haven't heard of them cardigan keffiyeh.
          </Paragraph>
        </Content>
      </Section>
    </>
  );
};

export default About;

const Paragraph = styled.p`
  padding: 1.5vh 0 5vh 0;
`;
