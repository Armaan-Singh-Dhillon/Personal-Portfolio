import { useState } from "react"

const Contact = () => {
    const [show, setShow] = useState(false)
    const clickHandler = () => {
        setShow(!show)
    }
    return (
        <>
            <div className='flex text-white justify-evenly items-center p-8 mt-36'>
                <div className='bg-gradient-to-bl from-indigo-500 via-purple-500 to-pink-500 w-3/12 p-8 rounded-2xl'>
                    <div className='flex justify-evenly'>
                        <div className='text-2xl'>

                            {show ? 'Register' : 'Login'}
                        </div>
                    </div>
                    <div className='text-xl mb-4'>
                        Email
                    </div>
                    <div >
                        <input type="text" placeholder='Email' className='w-full p-4 mb-6' />
                    </div>
                    {show && <div>

                        <div className='text-xl mb-4'>
                            Set Username
                        </div>
                        <div >
                            <input type="text" placeholder='Enter Your Name' className='w-full p-4 mb-6' />
                        </div>
                    </div>}


                    <div className='text-xl mb-4'>
                        Password
                    </div>

                    <div>
                        <input type="text" placeholder='Password' className='w-full p-4 mb-6' />
                    </div>
                    <div className='mb-4 text-lg '>
                        Don't have an account ? <button className='underline underline-offset-6' onClick={clickHandler}>
                            {show ? 'Login' : 'Register'}
                        </button>
                    </div>
                    <div>
                        <div className='flex justify-evenly'>
                            <button className='bg-blue-500 p-4 rounded-xl text-lg'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact