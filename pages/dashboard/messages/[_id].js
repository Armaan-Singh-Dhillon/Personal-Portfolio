
import DashboardLayout from '../../../layouts/dashboardLayout.js'


import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/Context/Context";
import { useRouter } from 'next/router';

import axios from 'axios'
const Post = () => {

    const { setState, state } = useContext(MyContext);
    const [res, setRes] = useState([])
    const router = useRouter();

    const { _id } = router.query;

    const fetchData = async () => {

      
        const { data } = await axios.post('http://localhost:3000/api/messages/getMessageById', { _id }, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })

        setRes(data.data)


    }

    useEffect(() => {
        fetchData()
    }, [])



    const timestamp = res.timestamp;
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${day}/${month}/${year}`;

    if (!res) {
        return <h1>Loading . . .</h1>
    }
    else {

        return <>

            <div className='bg-white text-black p-6' >
                <div className='flex text-xl justify-between'>
                    <div className=''>

                        {res.name}
                    </div>
                    <div>
                        {formattedDate}
                    </div>
                </div>
                <div className='text-lg'>
                    {res.content}
                </div>
            </div>
        </>
    }
}




export default Post
Post.Layout = DashboardLayout