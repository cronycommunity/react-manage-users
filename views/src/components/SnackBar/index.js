import {useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {Context} from '../../App';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SnackBar() {
  const classes = useStyles();
  const consumer = useContext(Context);

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={consumer.open} autoHideDuration={2000} onClose={consumer.handleClose}>
        <Alert onClose={consumer.handleClose} severity={consumer.severity}>
          {consumer.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
