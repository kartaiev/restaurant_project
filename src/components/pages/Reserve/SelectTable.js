import React from 'react';
import styled from 'styled-components';
import Table2 from './elements/Tables/Table2';
import {
  above,
  aroundCenter,
  background,
  betweenCenter,
  betweenStart,
  easeOut,
  elementToCenter,
  grey,
  red,
  yellow
} from '../../../utilities';
import Table6 from './elements/Tables/Table6';
import Table8 from './elements/Tables/Table8';
import Table4 from './elements/Tables/Table4';
import { Button, Subtitle } from '../../../elements';

const SelectTable = ({ toggle }) => {
  const login = () => {
    console.log('hey');
  };

  return (
    <ReserveWrap>
      <Subtitle>Select a table</Subtitle>
      <TablesWrap>
        <LeftTables>
          <HiddenButton onClick={login}>
            <span>1</span>
            <Table2 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>2</span>
            <Table2 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>3</span>
            <Table2 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>4</span>
            <Table2 />
          </HiddenButton>
        </LeftTables>
        <MiddleTables>
          <HiddenButton onClick={login}>
            <span>5</span>
            <Table8 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>6</span>
            <Table6 />
          </HiddenButton>
        </MiddleTables>
        <RightTables>
          <HiddenButton onClick={login}>
            <span>7</span>
            <Table4 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>9</span>
            <Table4 />
          </HiddenButton>
          <HiddenButton onClick={login}>
            <span>10</span>
            <Table4 />
          </HiddenButton>
        </RightTables>
      </TablesWrap>
      <BtnsWrap>
        <Button onClick={toggle}>
          <span>Back</span>
        </Button>
        <Button>
          <span>Select</span>
        </Button>
      </BtnsWrap>
    </ReserveWrap>
  );
};

export default SelectTable;

const ReserveWrap = styled.div`
  width: 85%;
  height: 80%;
  ${betweenCenter({ fd: 'column' })};
  margin-top: 5vh;

  ${above.med`
    width: 40%;
    overflow: hidden;  
  `}

  h3 {
    margin-top: 0;
  }

  label {
    padding-bottom: 1vh;
  }
`;

const TablesWrap = styled.div`
  width: 120%;
  height: 70%;
  ${betweenCenter};

  ${above.med`
    width: 100%; 
  `}

  button {
    cursor: pointer;
  }

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

  ${above.med`
    width: 85%;   
  `}

  ${Button} {
    width: 45%;
    height: 100%;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
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
