import PropTypes from 'prop-types'

import css from './TransactionHistory.module.css'


export default function TransactionHistory({ transactions}) {
    return (
        <table className={css.transactionHistory}>
  <thead >
    <tr >
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
  </thead>

        <tbody>
          {
 transactions.map(( {id,type, amount, currency}) => <tr key={id} className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>)
          }
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf( PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
