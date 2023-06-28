import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from "../store/users/usersSlice"

const FetchUsers = () => {
  const {users,isLoading,error} = useSelector((state) =>state.users)

    console.log(isLoading)
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(fetchUsers())
  },[])

  if(isLoading){
   return (
    <div>
        <h1>Loading...</h1>
    </div>
   )
  }

  if(error !== undefined){
    return (<div>
    <h2>Error :{error}</h2>
    </div>
    )
    
  }
  return (
    <div>
       {users && users.length > 0 ? 
     ( <ul>
      {users.map((user) =>{
        return(
          <li key={user.id}>{user.results[0].name.first} - {user.results[0].name.last}</li>
        );
          
        })}
      </ul>):(
          <h3>No users found</h3>
      )}
    </div>
  )
}

export default FetchUsers
