// Importaciones 
import React, { useReducer } from 'react'
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';


export default function UserState(props) {
  
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res.data.data);
    dispatch({
      type: 'GET_USERS',
      payload: res.data.data
    })
  };  

  const getProfile = async (id) => {
    const res = await axios.get('https://reqres.in/api/users/' + id);
    console.log(res.data.data);
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data.data
    })
  };


  return (

    //PROVEEDOR DE LOS ESTADOS PARA LOS COMPONENTES HIJOS
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile
      }}
    >
      {props.children}
    </UserContext.Provider>
  );

}
