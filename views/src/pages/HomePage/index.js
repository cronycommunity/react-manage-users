import {useEffect,useContext} from 'react';
import UsersTable from '../../components/Table';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './HomePageStyles';
import {Context} from '../../App';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import SnackBar from '../../components/SnackBar';
const HomePage=()=>{
    
    const consumer=useContext(Context)
    const classes = useStyles();
    const history=useHistory();

    useEffect(() => {
        consumer.getUsers();
    }, [])
    return(
        <Grid container >
            <SnackBar/>
            <Grid item xs={10} className={classes.wrapper}>
                <Button 
                    className={classes.button} 
                    size="small" variant="contained" 
                    color="primary"
                    onClick={()=>history.push("/add-user")}
                    >
                    Add User
                </Button>
                <UsersTable/>
            </Grid>
        </Grid>
    )
}
export default HomePage;