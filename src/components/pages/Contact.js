import React from 'react';
import {
  Article,
  Button,
  Content,
  Section,
  Subtitle,
  Title
} from '../../elements';
import styled from 'styled-components';
import { betweenCenter, betweenStart, centerEnd } from '../../utilities';

export const Contact = () => {
  return (
    <Article>
      <Section>
        <Title>Contact</Title>
        <Content>
          <Subtitle>Bookings</Subtitle>
          <Button modifiers="big">Book table online</Button>
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
      </Section>
    </Article>
  );
};

const OpeningsWrap = styled.div`
  width: 100%;
  ${betweenStart({ fd: 'column' })};
`;
const DaysWrap = styled.div`
  width: 100%;
  ${betweenStart({ fd: 'column' })};
`;

const OpeningsTitle = styled.h4`
  padding-bottom: 1vh;
`;

const Sched = styled.div`
  width: 100%;
  ${betweenCenter};
  padding-bottom: 3vh;
`;
const Time = styled.div`
  ${centerEnd({ fd: 'column' })};
`;
