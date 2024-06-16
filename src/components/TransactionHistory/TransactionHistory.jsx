import css from './TransactionHistory.module.css'
import TableItem from "../TableItem/TableItem";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currensy</th>
        </tr>
      </thead>
      <tbody>
        <TableItem transactions={transactions} />
      </tbody>
    </table>
  );
}
