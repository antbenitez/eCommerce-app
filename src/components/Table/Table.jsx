import React from 'react';
import './Table.css';

const Table = ({headers, rows}) => {
  return (
    <table className='custom-table'>
        {
            headers &&
            <thead><tr>
                {
                    headers.map((header, i) => 
                        <th key={i}>{header}</th>
                    )
                }
            </tr></thead>
        }
        <tbody>
        {
            rows.map((row, i) => 
            <tr key={i}>
                {
                    row.map((data, r) => 
                        <td key={r}>{data}</td>
                    )
                }
            </tr>
            )
        }
        </tbody>
    </table>
  )
}

export default Table