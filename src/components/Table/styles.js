import styled, { keyframes } from "styled-components";

const padding = `padding: 15px 10px;`;
const border = `border: 1px solid grey;`;
export const blueColor = "#317ecc";

const appearenceAnimation = keyframes`
    0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`;

export const TableTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 1.6rem;
  margin-bottom: 4rem;
  ${border}
`;

export const TableHeader = styled.th`
  ${padding}
  ${border}
`;

export const TableCell = styled.td`
  ${padding}
  ${border}
`;

export const ActiveCell = styled(TableCell)`
  cursor: pointer;
  color: ${blueColor};
  font-weight: bold;
`;

export const ActiveRow = styled.tr`
  animation: ${appearenceAnimation} 1s ease;
`;
export const ChartCell = styled(TableCell)`
  border: none;
`;
