import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

function getBackgroundColor(index) {
  return index % 2 === 0 ? 'azure' : 'antiquewhite';
}

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tabletHead}>
        <tr>
          <th className={css.tabletHeadHeader}>Type</th>
          <th className={css.tabletHeadHeader}>Amount</th>
          <th className={css.tabletHeadHeader}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tabletBody}>
        {items.map((item, index) => (
          <tr
            className={css.tabletBodyRow}
            key={item.id}
            style={{ backgroundColor: getBackgroundColor(index) }}
          >
            <td className={css.tabletBodyElement}>{item.type}</td>
            <td className={css.tabletBodyElement}>{item.amount}</td>
            <td className={css.tabletBodyElement}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
