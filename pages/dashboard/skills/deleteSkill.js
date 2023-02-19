import DashboardLayout from "@/layouts/dashboardLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ImBin2 } from 'react-icons/im';
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";
import Alert from '@/components/Alert.js';

const DeleteSkill = () => {

    const { setState, state } = useContext(MyContext);
    const [res, setRes] = useState([])
    const [alert, setAlert] = useState(false)
    const router =useRouter()
    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:3000/api/skills/getAll')

        setRes(data.data)
        



    }


    useEffect(() => {
        fetchData()
        if (!state.token) {
            router.push('/admin')
        }
    }, [res])
    const eventHandler = async(e) => {

        const name = e.target.value
        
        await axios.delete('http://localhost:3000/api/skills/delete', {
            headers: {
                Authorization: `Bearer ${state.token}`
            },
            data: {
                name
            }
        })

        setAlert(true)
        setTimeout(() => {
            setAlert(false)

        }, 2000);
        fetchData()
     
    }



    return (
        <>
            {
                alert && <div className="animate-pulse"
                >

                    <Alert type={'Danger'} message={'Skill Deleted successfully'}></Alert>
                </div>
            }
            <div className=" flex justify-start flex-wrap p-4">
                
                {res.map((el) => {

                    return <div className="flex flex-col items-center m-8 bg-white text-black p-4 text-lg">
                        <div>
                            <Image src={`/img/skills/${el.photo}`}
                                width={150}
                                height={150}
                            />
                        </div>
                        <div>
                            {el.name}
                        </div>
                        <div>
                            <button className="text-red-400 text-xl flex items-center justify-between" value={el.name} onClick={(e) => eventHandler(e)}>Delete  <ImBin2></ImBin2></button>
                        </div>
                    </div>


                })}

            </div>
        </>
    )
}
export default DeleteSkill


DeleteSkill.Layout = DashboardLayout