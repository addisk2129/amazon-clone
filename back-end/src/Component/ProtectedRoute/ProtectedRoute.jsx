import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../DataProvider/DataProvider';

function ProtectedRoute({children,msg,redirect}) {
   const navigate=useNavigate();
   const [{user},dispatch]=useContext(DataContext)


     useEffect(()=>{
       if(!user){
        navigate("/auth",{state:{msg,redirect}})//remember we use useLocation() hooks for thi to exctract
       }

     },[user])

  return children
}

export default ProtectedRoute