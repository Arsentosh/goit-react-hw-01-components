import styled from 'styled-components';

export const Table = styled.table`
  width: 510px;
  margin-bottom: 20px;
`;

export const TransactionHeaders = styled.th`
  height: 35px;
  background-color: ${p => p.theme.colors.skyBlue};
  color: ${p => p.theme.colors.white};
`;

export const TransactionLine = styled.tr`
  background-color: ${props => (props.$isEven ? 'white' : '#F8F8FF')};
`;

export const TransactionBills = styled.td`
  text-align: center;
  height: 35px;
  color: ${p => p.theme.colors.slightGrey};
`;
