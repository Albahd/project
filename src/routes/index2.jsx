
import { Navigate, useLocation } from "react-router-dom"
import React from "react";


function PrivateRoute({children}){ 
const age=localStorage.getItem('age')

  if(age === null || age<18 ){
     return <Navigate to='/userinfo'  replace></Navigate>
  }
 
   return children

}

export default PrivateRoute