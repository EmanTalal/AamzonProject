import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const[emailuser,setEmailuser]=useState('')
    const [passworduser,setPassworduser]=useState('')
    const navigate=useNavigate();

    const haund=()=>{
        if(localStorage.getItem("email")== emailuser && localStorage.getItem('password')==passworduser){
            navigate('/')
        }
    }
  return (
    <></>

  )
}

export default Login