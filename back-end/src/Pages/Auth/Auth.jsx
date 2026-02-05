import React, { useContext, useState } from 'react'
import Layout from '../../Component/Layout/Layout';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {Link, useNavigate,useLocation} from 'react-router-dom';
import {auth} from '../../Utility/Firebase';
import styles from './Auth.module.css';
import { DataContext } from '../../DataProvider/DataProvider';
import {Type} from '../../Utility/Type'
import {ClipLoader} from 'react-spinners'

function Auth() {

   const[email,setEmail]=useState('')
   const[password,setPassword]=useState('')
   const[error,setError]=useState('')


    const [{user},dispatch]=useContext(DataContext);

    const [isLoading,setIsLoading]=useState({
      signin:false,
      signup:false
  })
   const navigate=useNavigate()
   const navStateData=useLocation();
console.log(navStateData)

  const authHandler=async(e)=>{
            e.preventDefault();
            

            if(e.target.name==='signIn'){
               setIsLoading({...isLoading,signin:true})
             signInWithEmailAndPassword(auth,email,password)
                .then((res)=>{
                   dispatch({
                      type:Type.SET_USER,
                      user:res.user
                   })
                   setIsLoading({...isLoading,signin:false});
                   navigate(navStateData?.state?.redirect||'/')
                }).catch(err=>{
                  setError(err.message)
                  setIsLoading({...isLoading,signin:false})
                })

            }
            else{
              setIsLoading({...isLoading,signup:true})
              createUserWithEmailAndPassword(auth,email,password)
                  .then(res=>{
                    dispatch({
                      type:Type.SET_USER,
                      user:res.user
                    })
                    setIsLoading({...isLoading,signup:false});
                    navigate(navStateData?.state?.redirect||'/')
                  }).catch(err=>{
                    setError(err.message)
                    setIsLoading({...isLoading,signup:false})
                  })
            }
  }



  return (
    
      <section className={styles.auth}>
        <div className={styles.authContainer}>

          <div className={styles.logo}>
            <Link to="/">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png" />
            </Link>
          </div>

          <div className={styles.authBox}>
            <h1 style={{paddingLeft:"60px"}}>Sign In</h1>
               {
                navStateData?.state?.msg &&
                 (<small style={{paddingTop:'-12px', 
                                 paddingLeft:'62px',
                                 color:'red'}}>{
                  navStateData?.state?.msg}
              </small>
              )
               } 
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input value={email} type="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input value={password} type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <button name='signIn' type='submit' onClick={authHandler} className={styles.signInBtn}>
                {
                  isLoading.signin? <ClipLoader size={23} color='#0c0c0c'/>:'Sign In'
                 }         </button>
            </form>

            <p className={styles.agreement}>
              By continuing, you agree to Amazon Fake Clone's Conditions of Use and Privacy Notice.
            </p>
          </div>

          <div className={styles.divider}>New to Amazon?</div>

          <button type='submit' name='signUp' onClick={authHandler} className={styles.createAccountBtn}>
           {
            isLoading.signup?<ClipLoader size={23} color='#0d0e0d'/>:'Create your Amazon account'
           } 
          </button>
          {
            error && <small style={{paddingTop:"6px",color:'red'}}>
                     {error}
            </small>
          }
        </div>
      </section>
   
  );
}


export default Auth
