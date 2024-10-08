import React, { useState } from 'react';
import { useTable } from 'react-table';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RnTable = ({ rows, columns, onClick, isCollapsable = true }) => {
  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (section) => {
    setActiveSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((sec) => sec !== section)
        : [...prevSections, section]
    );
  };

  const tableInstance = useTable({
    columns,
    data: rows,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: tableRows,
    prepareRow,
  } = tableInstance;

  return (
    <div style={{ overflowY: 'auto', height: '70vh' }}>
      <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} style={{ borderBottom: '1px solid #ccc' }}>
                  {/* Render header based on whether the row is collapsed */}
                  {column.collapsable && activeSections.length > 0
                    ? column.render('Header')
                    : !column.collapsable && column.render('Header')}
                </th>
              ))}
              {/* Extra column for the collapsible icon */}
              {/* {isCollapsable && <th style={{ borderBottom: '1px solid #ccc' }}>Actions</th>} */}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {tableRows.map((row, index) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.id}>
                <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #ccc' }}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} style={{ padding: '10px' }}>
                      <div onClick={() => isCollapsable ? toggleSection(index) : onClick(cell.value)}>
                        {cell.render('Cell')}
                      </div>
                    </td>
                  ))}
                  {isCollapsable && (
                    <td>
                      {activeSections.includes(index) ? (
                        <FaChevronUp onClick={() => toggleSection(index)} />
                      ) : (
                        <FaChevronDown onClick={() => toggleSection(index)} />
                      )}
                    </td>
                  )}
                </tr>
                {/* Expanded row content */}
                {isCollapsable && activeSections.includes(index) && (
                  <tr>
                    <td colSpan={columns.length + 1} style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.03)' }}>
                      {/* Render additional content here */}
                      <div>Additional details for item {index + 1}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RnTable;
