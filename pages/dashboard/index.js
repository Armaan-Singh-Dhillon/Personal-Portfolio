import DashboardLayout from '@/layouts/dashboardLayout.js'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";

export default function index(){
  const { setState, state } = useContext(MyContext);
  const router = useRouter()
    useEffect(()=>{
      if (!state.token) {
        router.push('/admin')
      }
    },[state])
  return (
    <div>dashboard</div>
  )
}


 
index.Layout =DashboardLayout