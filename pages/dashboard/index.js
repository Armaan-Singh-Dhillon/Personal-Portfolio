import DashboardLayout from '@/layouts/dashboardLayout.js'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";
import { useState } from 'react';
import axios from 'axios';
export default function index() {
  const { setState, state } = useContext(MyContext);

  const router = useRouter()

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/skills/bar-chart/getAll')
    setData(data.data)
  }
  useEffect(() => {
    fetchData()
    if (!state.token) {
      router.push('/admin')
    }
  }, [state])


  const [name, setname] = useState('')
  const [points, setpoints] = useState('')
  const [data, setData] = useState([])

  const submitHandler = async () => {

    const { data } = await axios.post('http://localhost:3000/api/skills/bar-chart/create', { name, points }, {
      headers: {
        'Authorization': `Bearer ${state.token}`
      }
    })


  }
  if (!data) {
    return <h1>Loading</h1>
  }
  else {



    return (
      <>

        <div className=''>
          <div className=' w-4/12 p-6'>
            <div className='text-xl flex justify-evenly '>

              add skill in graph
            </div>

            <div className='m-2'>
              name
            </div>
            <div className='m-2'>
              <input type="text" name="" id="" className='w-full p-2 text-black' onChange={(e) => setname(e.target.value)} />
            </div>
            <div className='m-2'>
              points
            </div>
            <div className='m-2'>
              <input type="text" name="" id="" className='w-full p-2 text-black' onChange={(e) => setpoints(e.target.value)} />
            </div>
            <div className='flex justify-evenly '>
              <button className='bg-purple-600 p-2 m-2' onClick={submitHandler}>add</button>
            </div>
          </div>


        </div>
      </>
    )
  }
}



index.Layout = DashboardLayout