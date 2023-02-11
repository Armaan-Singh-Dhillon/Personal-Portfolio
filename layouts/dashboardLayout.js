import { useState } from "react"
import { IoMdArrowDropright } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from "next/link";
const DashboardLayout = ({ children }) => {
    const [skillToggle,setSkillToggle]=useState(false)

    const skillHandler =()=>{
        setSkillToggle(!skillToggle)
    }

    return (
        <>
            <div className="flex flex-col items-center bg-white bg-opacity-25 ">

                <div className="text-white text-2xl  ">
                    Dashboard
                </div>

                <div className="flex w-full justify-between h-96">

                    <div className="w-2/12 bg-blue-200 p-2 text-xl">
                        <div className="p-2">
                            <div className="flex items-center">

                                <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>
                            Messages
                            </div>
                        </div>
                        <div className="p-2">

                            <button onClick={skillHandler}>
                                <div className="flex items-center">

                                    {skillToggle ? <IoMdArrowDropdown className=" text-[1.5rem] "></IoMdArrowDropdown> : <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>}
                                    Skills
                                </div>
                            </button>
                            {skillToggle && <div className="p-2 text-[1.2rem]">
                                <div className="m-2">
                                    Edit Skills
                                </div>
                                <div className="m-2">
                                    delete Skills
                                </div>
                                <div className="m-2">
                                    <Link href='/dashboard/skills/addSkill'>
                                    add Skills
                                    </Link>
                                </div>
                            </div>}
                            
                        </div >
                        <div className="p-2">
                            <div className="flex items-center">

                                <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>
                                Work
                            </div>
                        </div>
                    </div> 

                    <div className="w-10/12 bg-red-200 p-2">
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardLayout