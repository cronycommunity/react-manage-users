import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
   wrapper:{
    margin:"5rem auto",
   },
   button:{
      marginBottom:"1rem",
      float:"right",
      background: 'linear-gradient(45deg, #81c784 30%, #a5d6a7 90%)',
        color:"black",
   }
  }));