import { useState } from "react"
import axios from "axios"
import Alert from "@/components/Alert.js";
import { MyContext } from "@/Context/Context";
import { useContext } from "react";
const Contact = () => {
  
    const [name ,setName] =useState('')
    const [email ,setEmail] =useState('')
    const [content ,setContent] =useState('')
    const [alert, setAlert] = useState(false)
    const { setState, state } = useContext(MyContext);
   
    const submitHandler =async()=>{
      
        const data = await axios.post('/api/messages/create', { name, email, content },{ headers: {
            Authorization: `Bearer ${state.token}`
        }})
        setAlert(true)
        setTimeout(() => {
            setAlert(false)

        }, 3000);

    }

    
    return (
        <>
            <div className='flex text-white justify-evenly items-center p-8 mt-14 '>
                <div className='bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 w-4/12 p-8 rounded-2xl'>
                    <div className='flex justify-evenly'>
                        <div className=''>
                            {alert && <div className="animate-pulse"
                            >

                                <Alert type={'success'} message={' Message Successfully'}></Alert>
                            </div>
                            }
                            <h1>

                           Contact Me
                            </h1>
                        </div>
                    </div>
                    <div className='text-xl mb-4'>
                        Name
                    </div>

                    <div >
                        <input type="text" placeholder='Name' className='w-full p-4 mb-6 text-black text-xl' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className='text-xl mb-4'>
                        Email
                    </div>
                    
                    <div >
                        <input type="text" placeholder='Email' className='w-full p-4 mb-6 text-black text-xl' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    


                    <div className='text-xl mb-4'>
                        Message
                    </div>

                    
                    <textarea className="w-full  p-2 text-xl text-black h-[10rem]" value={content} onChange={(e) => setContent(e.target.value)} />
                    
                   
                    <div>
                        <div className='flex justify-evenly'>
                            <button className='bg-blue-500 p-4 rounded-xl text-lg mt-2' onClick={submitHandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact