import { useContext, useEffect } from 'react';
import { MyContext } from '@/Context/Context.js';
import { useState } from "react"
import { useRouter } from 'next/router'
import axios from "axios"
import Loader from '@/components/Loader';


const Admin = () => {
  const { setState, state } = useContext(MyContext);


  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (state.token) {
      router.push('/dashboard')

    }
  })

  const handleSubmit = async (e) => {

    const { data } = await axios.post('/api/admin', { plainEmail: email, plainPassword: password })
    const { token } = data

    if (token) {
      localStorage.setItem('token', token)
      setState({ ...state, token: token })

      router.push('/dashboard')
      setLoading(false)

    }



  }
  if (loading) {
    return <Loader></Loader>
  }
  else {



    return (
      <>
        <div className='flex text-white justify-evenly items-center p-8 mt-36'>
          <div className='bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 w-3/12 p-8 rounded-2xl'>
            <div className='flex justify-evenly'>
              <div className='text-2xl'>

                Login
              </div>
            </div>
            <div className='text-xl mb-4'>
              Email
            </div>
            <div >
              <input type="text" placeholder='Email' className='w-full p-4 mb-6 text-black' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div className='text-xl mb-4'>
              Password
            </div>

            <div>
              <input type="password" placeholder='Password' className='w-full p-4 mb-6 text-black' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
              <div className='flex justify-evenly'>
                <button className='bg-blue-500 p-4 rounded-xl text-lg ' onClick={(e) => handleSubmit(e)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Admin