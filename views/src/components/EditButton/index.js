import { Button, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const EditButton = (props) => {
    const history = useHistory();
    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
                history.push({ pathname: "/edit-user",pathname: "/edit-user", state: { data:props.params.row} })
            }}
        >
            Edit
        </Button>
    )
}