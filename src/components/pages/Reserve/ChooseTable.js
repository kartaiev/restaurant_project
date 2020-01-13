import React from 'react';
import styled from 'styled-components';
import Table2 from './elements/Tables/Table2';
import {
  aroundCenter,
  background,
  betweenCenter,
  betweenStart,
  centerCenter,
  easeOut,
  elementToCenter,
  fullScreen,
  grey,
  red,
  yellow
} from '../../../utilities';
import Table6 from './elements/Tables/Table6';
import Table8 from './elements/Tables/Table8';
import Table4 from './elements/Tables/Table4';
import { Button, Subtitle } from '../../../elements';
import { NavLink } from 'react-router-dom';

const ChooseTable = () => {
  const loging = () => {
    console.log('hey');
  };

  return (
    <ReserveContainer>
      <ReserveWrap>
        <Subtitle>Select a table</Subtitle>
        <TablesWrap>
          <LeftTables>
            <HiddenButton onClick={loging}>
              <span>1</span>
              <Table2 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>2</span>
              <Table2 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>3</span>
              <Table2 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>4</span>
              <Table2 />
            </HiddenButton>
          </LeftTables>
          <MiddleTables>
            <HiddenButton onClick={loging}>
              <span>5</span>
              <Table8 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>6</span>
              <Table6 />
            </HiddenButton>
          </MiddleTables>
          <RightTables>
            <HiddenButton onClick={loging}>
              <span>7</span>
              <Table4 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>9</span>
              <Table4 />
            </HiddenButton>
            <HiddenButton onClick={loging}>
              <span>10</span>
              <Table4 />
            </HiddenButton>
          </RightTables>
        </TablesWrap>
        <BtnsWrap>
          <NavLink to="/reserve">
            <Button>
              <span>Back</span>
            </Button>
          </NavLink>
          <Button>
            <span>Select</span>
          </Button>
        </BtnsWrap>
      </ReserveWrap>
    </ReserveContainer>
  );
};

export default ChooseTable;

const ReserveContainer = styled.div`
  ${fullScreen}
  ${centerCenter({ fd: 'column' })}
`;

const ReserveWrap = styled.div`
  width: 80%;
  height: 80%;
  ${betweenCenter({ fd: 'column' })};
  margin-top: 5vh;

  h3 {
    margin-top: 0;
  }

  label {
    padding-bottom: 1vh;
  }
`;

const TablesWrap = styled.div`
  width: 125%;
  height: 70%;
  ${betweenCenter};

  svg {
    path {
      fill: ${yellow};
      cursor: pointer;
      ${easeOut};

      &:hover {
        fill: ${red};
      }
    }
  }
`;

const LeftTables = styled.div`
  height: 100%;
  ${betweenStart({ fd: 'column' })};
`;

const MiddleTables = styled.div`
  height: 100%;
  ${aroundCenter({ fd: 'column' })}
`;

const RightTables = styled.div`
  height: 100%;
  ${betweenStart({ fd: 'column' })}
`;

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  margin-top: 5vh;
  button {
    width: 45%;
  }

  a {
    width: 45%;
    height: 100%;

    ${Button} {
      width: 100%;
      height: 100%;
      text-align: center;

      span {
        position: relative;
        z-index: 1;
      }
    }
  }
`;

const HiddenButton = styled.button`
  background-color: ${background};
  position: relative;
  border: none;

  span {
    position: absolute;
    z-index: 100;
    ${elementToCenter};
    font-size: 1.5rem;
  }

  &:hover {
    color: ${grey};
  }
`;
