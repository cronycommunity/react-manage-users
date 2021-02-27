import {createContext,useState,useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import axios from 'axios';
import EditUser from './pages/EditUser';
import Navbar from './components/Navbar';

export const Context=createContext();

function App() {
  const [users,setUsers]=useState([]);
  const [currentUser, setCurrentUser]=useState();
  const [open, setOpen] = useState(false);
  const [message,setMessage] = useState();
  const [severity,setSeverity] = useState();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const getUsers=()=>{
    axios.get("http://localhost:4000/api/get_users")
    .then((res)=>{
        setUsers(res.data);
        console.log("users",res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  const deleteUser=(id)=>{
    axios.get(`http://localhost:4000/api/${id}/delete_user`)
    .then(()=>{
      console.log("deleted");
      setMessage("Deleted");
      setSeverity("success");
      handleClick();
      getUsers();
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const addUser=(data)=>{
    axios.post("http://localhost:4000/api/add_user",{
      customer_number:data.customerNumber,
      first_name:data.firstName,
      last_name:data.lastName,
      user_name:data.userName,
      email:data.email,
      date_of_birth:data.dateOfBirth,
      password:data.password1,
      //fix it
      last_login:"2021/02/21"
    })
    .then(()=>{
      console.log("User added");
      console.log("data",data);
      getUsers();
    })
    .catch(err=>{
      console.log(err);
    })
  }
  const updateUser=(data,id)=>{
    axios.post(`http://localhost:4000/api/${id}/update_user`,{
      customer_number:data.customerNumber,
      first_name:data.firstName,
      last_name:data.lastName,
      user_name:data.userName,
      email:data.email,
      date_of_birth:data.dateOfBirth,
      password:data.password1,
      //fix it
      last_login:"2021/02/21"
    })
    .then(()=>{
      console.log("updated id",id);
      console.log("data update Function",data);
      getUsers();
    })
    .catch(err=>{
      console.log(err);
    })
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="App">
      <Context.Provider value={{getUsers,users,deleteUser,addUser,updateUser,currentUser,setCurrentUser,
      handleClose,open,handleClick,message,setMessage,severity,setSeverity}}>
        <Navbar/>
        <Router>
          <Switch>
            <AddUser exact path="/add-user" component={AddUser}></AddUser>
            <EditUser exact path="/edit-user" component={EditUser}></EditUser>
            <HomePage path="/" component={HomePage}></HomePage>
          </Switch>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;