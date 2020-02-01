import styled from 'styled-components';
import {
  above,
  aroundCenter,
  aroundStart,
  betweenCenter,
  betweenStart,
  centerCenter,
  easeOut,
  fullScreen,
  grey,
  red,
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

export const MainReservationsContainer = styled(MainTablesContainer)``;

export const DateTimeContainer = styled.div`
  ${centerCenter({ fd: 'column' })};
  ${above.med`
    width: 85%;
  `}

  p {
    text-align: center;
    color: ${rgba('#cccccc', 0.6)};
  }

  a {
    color: ${rgba('#cccccc', 0.6)};
    margin-top: 5vh;
    ${easeOut};

    &:hover {
      cursor: pointer;
      color: ${yellow};
    }
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

export const ThanksBtnsWrap = styled(TablesBtnsWrap)`
  a {
    width: 100%;
    ${Button} {
      width: 100%;
    }
  }
`;

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

export const ReservationsContainer = styled.div`
  width: 100%;
  ${betweenCenter({ fd: 'column' })};
`;

export const ReservationWrap = styled.div`
  width: 100%;
  height: 12vh;
  ${betweenCenter};
  border-bottom: 1px solid ${rgba('#cccccc', 0.4)};

  svg {
    fill: ${grey};
    width: 25px;
    height: 25px;
    ${easeOut};

    &:hover {
      fill: ${red};
    }
  }

  ${above.med`
   width: 85%;
  `}
`;

export const ReservationContent = styled.div`
  height: 100%;
  ${aroundStart({ fd: 'column' })};
  color: ${({ time }) =>
    time === 'past' ? `${rgba('#cccccc', 0.6)}` : `${yellow}`};
`;

export const ReservationsBtnWrap = styled.div`
  ${betweenCenter};
  width: 20%;
`;
