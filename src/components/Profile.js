import React, { useContext  } from 'react'
import UserContext  from "../context/Users/UserContext";

export default function Profile() {

  const { selectedUser }= useContext(UserContext);


  return (
    <>
        {/*OPERADOR TERNARIO PARA MOSTRAR EL USUARIO SELECCIONADO*/}
        
        {selectedUser ? (<div className="card card-body text-center">
                <img src={selectedUser.avatar} alt="" className="card-img-top rounded-circle m-auto
                img-fluid" style={{width: 180}}/>

                <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>

                <h3>email: {selectedUser.email}</h3>

        </div>) :  (<h1 className="text-white text-center">No user Selected</h1>)}
        
    </>
  )
}
