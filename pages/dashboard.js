import React, { useEffect } from 'react'
import verifyToken from '@/server/verifytoken'
const Dashboard = () => {
    useEffect(()=>{
        
        verifyToken({})
        
    },[])
  return (
    <div>dashboard</div>
  )
}


export default Dashboard