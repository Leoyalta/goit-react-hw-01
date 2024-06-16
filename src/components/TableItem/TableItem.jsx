
export default function TableItem({ transactions }) {
    return (
        <>
        {transactions.map(({id, type, amount, currency}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </>
    )

    
    
}