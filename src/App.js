import './App.css';
import {useState,useEffect} from "react";
import axios from 'axios';
import { Loading } from './component/Loading';
import { UserList } from './component/UserList';
function App() {
  const [user,setUser]=useState(null);
  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
     setUser(result.data)
     console.log(result)
     
   }) ;

  },[] );
  return (
    <div className="App">
     {user ? <UserList user={user }/>:<Loading/>}
    </div>
  );
}

export default App;
