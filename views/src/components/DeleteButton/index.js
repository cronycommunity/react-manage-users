import {useContext} from 'react';
import { Button } from '@material-ui/core';
import {Context} from '../../App';

export const DeleteButton = (props) => {
    const consumer = useContext(Context);
    return (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => consumer.deleteUser(props.params.row.id)}
        >
          Delete
        </Button>
    )
}