import DashboardLayout from "../../../layouts/dashboardLayout.js"

import {  useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from 'next/router';
import { useContext } from "react";
import { MyContext } from "@/Context/Context";

const AddSkill = () => {
    const { setState, state } = useContext(MyContext);
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);
    const router = useRouter();


    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const submitHandler =async(e)=>{
        e.preventDefault()
        const form =new FormData()

        form.append('name',name)
        form.append('photo',file)
        const data = await axios({
            method: "post",
            url: "/api/skills/create",
            data: form,
            headers: { "Content-Type": "multipart/form-data" },
        })
       

    }
       
    useEffect(()=>{
        if(!state.token){
            router.push('/admin')
        }

    },[state])
    

    return (
        <>
            <div className=" flex justify-evenly h-96 items-center ">
                <div className="w-6/12">



                    <form className="bg-white p-6 rounded-lg shadow-md text-black">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full"
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                htmlFor="file"
                            >
                                File
                            </label>
                            <input
                                className="border border-gray-400 p-2 w-full"
                                type="file"
                                accept="image/"
                                id="photo"
                                name='photo'
                                onChange={handleFileChange}
                            />
                        </div>
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            type="submit"
                            onClick={(e)=>submitHandler(e)}
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default AddSkill


AddSkill.Layout = DashboardLayout