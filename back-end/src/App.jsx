import { useContext, useEffect, useState } from 'react'
import Header from './Component/Header'
import './App.css'
import Routing from './Routing'
import {Type} from './Utility/Type'
import { DataContext } from './DataProvider/DataProvider'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './Utility/Firebase'

function App() {
  const [{user},dispatch]=useContext(DataContext);

    useEffect(()=>{
       const unsibscribe=  onAuthStateChanged(auth,(authuser)=>{
      
            if(authuser){
                dispatch({
                  type:Type.SET_USER,
                  user:authuser
                })
            }

            else{
         
                dispatch({
                  type:Type.SET_USER,
                  user:null
              
              })
            }
         })

         return()=> unsibscribe()
    },[dispatch])


 return <>
   <Routing/>
 
 </>
}

export default App
