import {useContext} from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {Context} from '../../App';

export const DeleteButton = (props) => {
    // console.log("props.userId",props.params.id)
    const history = useHistory();
    const consumer = useContext(Context);
    return (
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => consumer.deleteUser(props.params.row.id)}
        //   onClick={() => console.log("props.params.id",props.params.row.id)}
        >
          Delete
        </Button>
    )
}