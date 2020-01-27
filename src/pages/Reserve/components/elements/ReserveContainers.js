import styled from 'styled-components';
import {
  above,
  aroundCenter,
  betweenCenter,
  betweenStart,
  centerCenter,
  fullScreen,
  yellow
} from '../../../../utilities';
import { Button, Subtitle } from '../../../../elements';
import rgba from 'polished/lib/color/rgba';

export const MainReserveContainer = styled.div`
  ${fullScreen}
  ${centerCenter({ fd: 'column' })}
  ${above.med`
    ${betweenCenter};
    overflow: hidden;
  `}
`;

export const MainTablesContainer = styled.div`
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

export const MainDateTimeContainer = styled(MainTablesContainer)``;

export const DateTimeContainer = styled.div`
  ${centerCenter({ fd: 'column' })};
  ${above.med`
    width: 85%;
  `}

  p {
    text-align: center;
    color: ${rgba('#cccccc', 0.6)};
  }
`;

export const Warning = styled.div`
  color: ${yellow};
  margin-top: 3vh;
  text-align: center;
  width: 85%;
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

export const TablesBtnsWrap = styled.div`
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
  a {
    width: 45%;
    height: 100%;

    ${Button} {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
`;

export const DateTimeBtnsWrap = styled(TablesBtnsWrap)``;

export const MainThanksContainer = styled(MainTablesContainer)``;

export const ThanksBtnsWrap = styled(TablesBtnsWrap)``;

export const ThanksReservationInfo = styled.div`
  ${betweenStart({ fd: 'column' })};
  width: 85%;
  height: 25vh;

  p {
    font-size: 1.2rem;

    span {
      color: ${yellow};
    }
  }
`;
