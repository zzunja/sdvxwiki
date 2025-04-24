// For use when creating more custom tables than what is possible through Markdown
// Styles copied from Nextra's auto-generated tables

export function Table({ children, className }) {
  return <table className={`${className ?? ''} x:overflow-x-auto nextra-scrollbar x:not-first:mt-6 x:p-0`}>
    {children}
  </table>
}

export function Row({ children, className, colSpan, rowSpan, noColor }) {
  return <tr
    className={`${className ?? ''} x:m-0 x:border-t x:border-gray-300 x:p-0 x:dark:border-gray-600 ${noColor ? '' : 'x:even:bg-gray-100 x:even:dark:bg-gray-600/20'}`}
    colSpan={colSpan}
    rowSpan={rowSpan}
  >
    { children }
  </tr>
}

export function Header({ children, className, colSpan, rowSpan }) {
  return <th
    className={`${className ?? ''} x:m-0 x:border x:border-gray-300 x:px-4 x:py-2 x:font-semibold x:dark:border-gray-600`}
    colSpan={colSpan}
    rowSpan={rowSpan}
  >
    {children}
  </th>
}

export function Data({ children, className, colSpan, rowSpan }) {
  return <td
    className={`${className ?? ''} x:m-0 x:border x:border-gray-300 x:px-4 x:py-2 x:dark:border-gray-600`}
    colSpan={colSpan}
    rowSpan={rowSpan}
  >
    {children}
  </td>
}