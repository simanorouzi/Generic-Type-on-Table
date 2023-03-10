import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


type tableType<T>={
  rows:T[],
  onSelect:(item:T)=>void
}


const ListView =<T extends {id:string}> (props:tableType<T>) => {
  
  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Button</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{JSON.stringify(row)}</TableCell>
              <TableCell>
                <button onClick={()=>props.onSelect(row)}>Select</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
  </TableContainer>
  );
};
 export default ListView;