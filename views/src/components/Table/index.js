import {useContext} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {useStyles} from './TableStyle';
import Grid from '@material-ui/core/Grid';
import { Context } from '../../App';
import { EditButton } from '../EditButton';
import {DeleteButton} from '../DeleteButton';

let rows=[];
export default function UsersTable() {

  const columns = [
    { field: 'customer_number',headerName: 'Customer Number',width: 170 },
    { field: 'user_name', headerName: 'User Name', type: 'string',width: 150 },
    { field: 'first_name',headerName: 'First Name', type: 'string',width: 150 },
    { field: 'last_name', headerName: 'Last Name',type: 'string', width: 150 },
    { field: 'last_login', headerName: 'Last Login',type: 'dateTime', width: 150 },
    {
      field: 'Edit',
      width: 120,
      renderCell: (params) => (
        <strong>
          <EditButton params={params}/>
        </strong>
      ),
    },
    {
      field: 'Delete',
      width: 120,
      renderCell: (params) => (
        <strong>
          <DeleteButton params={params}/>
        </strong>
      ),
    },
  ];
  
  const sortModel = [
    {
      field: 'user_name',
      sort: 'asc',
    },
  ];

  const consumer = useContext(Context);
  const classes = useStyles();

  rows = consumer?.users?.map(user=>{
    return({
      "id":user?.id,
      "customer_number":user?.customer_number,
      "user_name":user?.user_name,
      "first_name":user?.first_name,
      "last_name":user?.last_name,
      "last_login":user?.last_login,
      "password":user?.password,
      "date_of_birth":user?.date_of_birth,
      "email":user?.email
    });
  })
  return (
    <Grid container>
      <Grid item xs={12}>
        <div style={{ height: "70vh", width: '100%' }}>
          <DataGrid sortModel={sortModel} rows={rows} columns={columns}/>
        </div>
      </Grid>
    </Grid>
  );
}