import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ListItem from './listItem';


export type tableType<T>={
  rows:T[],
  onSelect:(item:T)=>void
}


const ListView =<T extends {id:string}> (props:tableType<T>) => {

  
  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow >
          <TableCell>Item</TableCell>
          <TableCell>Button</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          {props.rows.map((row) => (
            <ListItem key={row.id} title={JSON.stringify(row)} id={row.id}/>
          ))}
        </TableBody>
    </Table>
  </TableContainer>
  );
};
 export default ListView;