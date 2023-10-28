import {
  Table,
  TransactionBills,
  TransactionHeaders,
  TransactionLine,
} from './TransacrionHistory.styled';

export const TransactionHistory = ({ transaction }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TransactionHeaders>Type</TransactionHeaders>
          <TransactionHeaders>Amount</TransactionHeaders>
          <TransactionHeaders>Currency</TransactionHeaders>
        </tr>
      </thead>
      <tbody>
        {transaction.map(({ id, type, amount, currency }, index) => {
          return (
            <TransactionLine key={id} $isEven={index % 2 === 0}>
              <TransactionBills>{type}</TransactionBills>
              <TransactionBills>{amount}</TransactionBills>
              <TransactionBills>{currency}</TransactionBills>
            </TransactionLine>
          );
        })}
      </tbody>
    </Table>
  );
};
