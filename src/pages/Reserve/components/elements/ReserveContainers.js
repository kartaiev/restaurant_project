import styled from 'styled-components';
import {
  above,
  aroundCenter,
  betweenCenter,
  betweenStart
} from '../../../../utilities';
import { Button, Subtitle } from '../../../../elements';

export const MainReservedContainer = styled.div`
  width: 85%;
  height: 80%;
  ${betweenCenter({ fd: 'column' })};
  margin-top: 5vh;

  ${above.med`
    width: 40%;
    overflow: hidden;  
  `}

  ${Subtitle} {
    margin-top: 0;
  }

  label {
    padding-bottom: 1vh;
  }
`;

export const TablesContainer = styled.div`
  width: 120%;
  height: 70%;
  ${betweenCenter};

  ${above.med`
    width: 100%; 
  `}
  }
`;

export const LeftRightTablesContainer = styled.div`
  height: 100%;
  ${betweenStart({ fd: 'column' })};
`;

export const MiddleTablesContainer = styled.div`
  height: 100%;
  ${aroundCenter({ fd: 'column' })}
`;

export const ReserveBtnsWrap = styled.div`
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
