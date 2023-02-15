import { useRouter } from 'next/router'
import DashboardLayout from '../../../layouts/dashboardLayout.js'
import axios from 'axios'
const Post = ({res}) => {
   

    const timestamp = res.timestamp;
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2);
    const formattedDate = `${day}/${month}/${year}`;
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



export async function getServerSideProps(context) {
    const {_id} =context.params
    
    const { data } = await axios.post('http://localhost:3000/api/messages/getMessageById',{_id})

    const res = data.data

    return {
        props: { res },
    }
}

export default Post
Post.Layout = DashboardLayout