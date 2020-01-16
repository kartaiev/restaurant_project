import React from 'react';
import { rgba } from 'polished';
import {
  Article,
  ContactTitle,
  Content,
  GoogleMap,
  pageVideoElement,
  Section,
  Subtitle
} from '../../elements';
import styled from 'styled-components';
import { betweenCenter, betweenStart, startEnd } from '../../utilities';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import contactVid from '../../assets/video/contactVid.mp4';

const Contact = () => {
  const Vid = useWindowWidth() > 768 && pageVideoElement(contactVid);
  return (
    <Article>
      {Vid}
      <Section>
        <ContactTitle>Contact</ContactTitle>
        <Content>
          <Subtitle>Opening Hours</Subtitle>
          <OpeningsWrap>
            <DaysWrap>
              <OpeningsTitle>
                <p>MONDAY - FRIDAY </p>
              </OpeningsTitle>
              <Sched>
                <div>
                  <p>Lunch</p>
                  <p>Dinner</p>
                </div>

                <Time>
                  <p>12pm - 2:30pm</p>
                  <p>5:30pm - 10:30pm</p>
                </Time>
              </Sched>
            </DaysWrap>
            <DaysWrap>
              <OpeningsTitle>
                <p>SATURDAY </p>
              </OpeningsTitle>
              <Sched>
                <div>
                  <p>Dinner Only</p>
                </div>
                <Time>
                  <p>5:30pm - 10:30pm</p>
                </Time>
              </Sched>
            </DaysWrap>
            <DaysWrap>
              <OpeningsTitle>
                <p>SUNDAY</p>
              </OpeningsTitle>
              <Sched>
                <div>
                  <p>All day</p>
                </div>
                <Time>
                  <p>12pm - 10:30pm</p>
                </Time>
              </Sched>
            </DaysWrap>
          </OpeningsWrap>
        </Content>
        <Content>
          <Subtitle>Details</Subtitle>
          <Details>
            <h4>ADDRESS</h4>
            <Time>
              <p>772 N Main St,</p>
              <p>9J94+72 Bishop, California</p>
            </Time>
          </Details>
          <Details>
            <h4>PHONE</h4>
            <Time>
              <p>(760) 122-21322</p>
            </Time>
          </Details>
          <Details>
            <h4>EMAIL</h4>
            <Time>
              <p>holysmokes@fake.net</p>
            </Time>
          </Details>
        </Content>
        <GoogleMap />
      </Section>
    </Article>
  );
};

export default Contact;

const OpeningsWrap = styled.div`
  width: 100%;
  ${betweenStart({ fd: 'column' })};
`;

const DaysWrap = styled.div`
  width: 100%;
  ${betweenStart({ fd: 'column' })};
`;

const OpeningsTitle = styled.h4`
  padding-bottom: 3vh;
`;

const Sched = styled.div`
  width: 100%;
  ${betweenCenter};
  padding-bottom: 5vh;
  color: ${rgba('#cccccc', 0.6)};
`;
const Details = styled.div`
  width: 100%;
  ${betweenStart};
  padding-bottom: 5vh;
`;

const Time = styled.div`
  ${startEnd({ fd: 'column' })};
  color: ${rgba('#cccccc', 0.6)};
`;
