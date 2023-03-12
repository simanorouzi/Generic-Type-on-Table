import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

function ListItem<T extends { id: string; title: string }>(props: T) {
  const [selectedRow, setSelectedRow] = React.useState<boolean>(false);

  const onSelectHandler = (id: string) => {
    if (id === props.id) {
      setSelectedRow(true);
    }
  };
  return (
    <TableRow
      selected={selectedRow}
      key={props.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{props.title}</TableCell>
      <TableCell>
        <button onClick={() => onSelectHandler(props.id)}>Select</button>
      </TableCell>
    </TableRow>
  );
}

export default ListItem;
