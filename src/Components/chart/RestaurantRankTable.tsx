import { useTable, Column } from 'react-table';
import { TableStyle } from '../list/styled';
import { useNavigate } from 'react-router';
import { useMemo } from 'react';
import type { RankDataType } from '../../Type/interface';

export function RankTable(data: { data: RankDataType[] }) {
  const navigate = useNavigate();
  const columns = useMemo<Column<RankDataType>[]>(
    () => [
      {
        Header: '상호명',
        accessor: 'bsnsnm',
      },
      {
        Header: '주소',
        accessor: 'addrroad',
      },
      {
        Header: '조회수',
        accessor: 'viewcnt',
      },
    ],
    []
  );

  const tableInstance = useTable({
    columns,
    data: data.data,
  });

  return (
    <TableStyle>
      <table {...tableInstance.getTableProps()}>
        <thead>
          {tableInstance.headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...tableInstance.getTableBodyProps()}>
          {tableInstance.rows.map((row) => {
            tableInstance.prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => navigate(`/list/${data.data[row.index].id}`)}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableStyle>
  );
}
