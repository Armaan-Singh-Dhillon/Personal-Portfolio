import axios from "axios"
import DashboardLayout from '../../../layouts/dashboardLayout.js'
import { AiOutlineStar } from 'react-icons/ai';
import Link from "next/link.js";
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";
import { useEffect } from 'react'
const Message = ({res}) => {
    const { setState, state } = useContext(MyContext);
    useEffect(() => {
        if (!state.token) {
            router.push('/admin')
        }
    }, [state])
  return (
      <div className=" p-2 m-4 text-xl ">
        {res.map((el)=>{
            const timestamp = el.timestamp;
            const date = new Date(timestamp);
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.toLocaleString('default', { month: 'short' });
            const year = date.getFullYear().toString().slice(-2);
            const formattedDate = `${day}/${month}/${year}`;

            return<>
            <Link href={`/dashboard/messages/${el._id}`}>
             <div className="flex p-4 shadow-md justify-evenly ">
              
                <div className="w-2/12 flex items-center mr-2">
                   <AiOutlineStar className="mr-2"></AiOutlineStar>{el.email}
                </div>
                <div className="w-8/12">
                    {el.content}
                </div>
                <div className="w-2/12 flex justify-evenly">
                   {formattedDate}
                </div>
            </div>
            </Link>

            </>
        })}
          
    </div>
  )
}
export async function getServerSideProps(context) {

    const { data } = await axios.get('http://localhost:3000/api/messages/getMessages')

    const res = data.data

    return {
        props: { res },
    }
}
export default Message
Message.Layout = DashboardLayout