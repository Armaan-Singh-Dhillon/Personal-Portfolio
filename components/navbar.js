import Image from 'next/image'
import logo from '../images/Capture.PNG'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [show , setShow]=useState(false)

    const clickHandler = ()=>{
        setShow(!show)
    }
  return <>
      <div className="text-white flex justify-evenly ">
        <div className='text-md sm:text-xl items-center lg:text-2xl'>
              <div className='animate-bounce inline-block '> &lt;/&gt; </div>  Armaan
             
        </div>

          <div className=" hidden text-sm sm:hidden md:flex justify-evenly  w-6/12 items-center text-xl">
            <div>
                Home
            </div>
            <div>
                About
            </div>
            <div>
                Work
            </div>
            <div>
                Skills
            </div>
            <div>
                Contact
            </div>
        </div>
        <div className='hidden w-4/12 sm:flex items-center justify-evenly sm:w-2/12 text-xl'>
              <Link href='https://www.linkedin.com/in/armaan-dhillon-9946b3251/' target="_blank">
              <AiFillLinkedin></AiFillLinkedin>
            </Link>
              <Link href='https://github.com/Armaan-Singh-Dhillon' target="_blank">
              <AiFillGithub ></AiFillGithub>
              </Link>
              <AiOutlineMail></AiOutlineMail>
              <AiFillInstagram></AiFillInstagram>
        </div>
          <div className='  md:hidden'>
              <button className={`${show ? 'hidden' : ''}`} onClick={clickHandler}><AiOutlineBars></AiOutlineBars></button>
        </div>

        
    </div>
      {show && <div className='absolute right-0 bg-white  -translate-y-12 w-1/4 h-screen p-4'>
          <div className='m-2'>
              Home
          </div>
          <div className='m-2'>
              About
          </div>
          <div className='m-2'>
              Work
          </div>
          <div className='m-2'>
              Skills
          </div>
          <div className='m-2'>
              Contact
          </div>
          <button onClick={clickHandler}><AiOutlineArrowRight></AiOutlineArrowRight></button>
      </div>}
    
    
    </>
  
}

export default Navbar