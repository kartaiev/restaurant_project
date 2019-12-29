import React from 'react';
import { rgba } from 'polished';
import {
  Article,
  Button,
  Content,
  Section,
  Subtitle,
  Title
} from '../../elements';
import styled from 'styled-components';
import { betweenCenter, betweenStart, startEnd } from '../../utilities';

export const Contact = () => {
  return (
    <Article>
      <Section>
        <Title>Contact</Title>
        <Content>
          <Subtitle>Bookings</Subtitle>
          <Button modifiers="big">
            <span>Book table online</span>
          </Button>
        </Content>
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
        <Map
          title="map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Holy%20Smoke%20Texas%20Style%20BBQ&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        />
      </Section>
    </Article>
  );
};

const Map = styled.iframe`
  width: 125%;
  height: 500px;
`;

const OpeningsWrap = styled.div`
  width: 100%;
  ${betweenStart({ fd: 'column' })};
  padding-bottom: 10vh;
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
