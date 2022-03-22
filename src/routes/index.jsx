import { Navigate,useLocation } from "react-router-dom"
import React from "react";


function ProtectedRoute({children}){ 
    const location = useLocation();
    console.log(location)
const token=localStorage.getItem('token')

  if(token === null ){
     return <Navigate to={`/login`}  replace></Navigate>


     
  }
 
   return children

}

export default ProtectedRoute