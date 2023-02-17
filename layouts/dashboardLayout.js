import { useState } from "react"
import { IoMdArrowDropright } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from "next/link";
import {motion} from 'framer-motion'
const DashboardLayout = ({ children }) => {
    const [skillToggle, setSkillToggle] = useState(false)
    const [frameToggle, setFrameToggle] = useState(false)

    const skillHandler = () => {
        setSkillToggle(!skillToggle)
    }
    const frameHandler = () => {
        setFrameToggle(!frameToggle)
    }

    return (
        <>
            <div className="flex flex-col items-center bg-white bg-opacity-20 text-white">

                <div className="text-white text-2xl  ">
                    Dashboard
                </div>

                <div className="flex w-full justify-between ">

                    <div className="w-2/12  p-2 text-xl">
                        <div className="p-2">
                            <div className="flex items-center">

                                <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>
                                <Link href='/dashboard/messages'>
                                    Messages
                                </Link>
                            </div>
                        </div>
                        <div className="p-2">

                            <button onClick={skillHandler}>
                                <div className="flex items-center">

                                    {skillToggle ? <IoMdArrowDropdown className=" text-[1.5rem] "></IoMdArrowDropdown> : <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>}
                                    Skills
                                </div>
                            </button>
                            {skillToggle && <motion.div className="p-2 text-[1.2rem]" initial={{ opacity: 0  }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }}>

                                <div className="m-2">
                                    <Link href='/dashboard/skills/deleteSkill'>
                                        delete Skills
                                    </Link>
                                </div>
                                <div className="m-2">
                                    <Link href='/dashboard/skills/addSkill'>
                                        add Skills
                                    </Link>
                                </div>
                            </motion.div>}


                        </div >
                        <div className="p-2">
                            <button onClick={frameHandler}>
                                <div className="flex items-center">

                                    {frameToggle ? <IoMdArrowDropdown className=" text-[1.5rem] "></IoMdArrowDropdown> : <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>}
                                    Frameworks
                                </div>
                            </button>
                            {frameToggle && <motion.div className="p-2 text-[1.2rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} >

                                <div className="m-2">
                                    <Link href='/dashboard/frameworks/delete'>
                                        delete Frameworks
                                    </Link>
                                </div>
                                <div className="m-2">
                                    <Link href='/dashboard/frameworks/add'>
                                        add Frameworks
                                    </Link>
                                </div>
                            </motion.div>}
                        </div>
                        <div className="p-2">
                            <div className="flex items-center">

                                <IoMdArrowDropright className=" text-[1.5rem] "></IoMdArrowDropright>
                                Work
                            </div>
                        </div>
                    </div>

                    <div className="w-10/12  p-2">
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}

export default DashboardLayout