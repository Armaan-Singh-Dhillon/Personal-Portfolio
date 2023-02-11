import DashboardLayout from '@/layouts/dashboardLayout.js'
import React, { useEffect } from 'react'
import verifyToken from '../../server/verifytoken.js'


export default function index(){
    useEffect(()=>{
        
        verifyToken({})
        
    },[])
  return (
    <div>dashboard</div>
  )
}


 
index.Layout =DashboardLayout