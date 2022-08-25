import { useEffect, useState } from "react"

const UseUser = () =>{
    const[users ,setUsers] = useState([]);
     useEffect( () =>{
         fetch('https://assessment.api.vweb.app/users')
          .then(res => res.json())
           .then(data =>setUsers(data));
     } ,[]);
     return [users,setUsers];
}
export default UseUser;