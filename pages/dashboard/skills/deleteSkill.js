import DashboardLayout from "@/layouts/dashboardLayout"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ImBin2 } from 'react-icons/im';
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";

const AddSkill = ({ res }) => {

    const { setState, state } = useContext(MyContext);
   
    const router = useRouter();
    const eventHandler = async(e) => {

        const name = e.target.value
        
        await axios.delete('http://localhost:3000/api/skills/delete', { data: name }, {
            headers: {
                'Authorization': `Bearer ${state.token}`
            }
        })
        router.replace(router.asPath);
     
    }



    return (
        <>
            <div className="bg-blue-400 flex justify-start flex-wrap p-4">
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
export async function getServerSideProps(context) {

    const { data } = await axios.get('http://localhost:3000/api/skills/getAll')

    const res = data.data

    return {
        props: { res },
    }
}
export default AddSkill


AddSkill.Layout = DashboardLayout