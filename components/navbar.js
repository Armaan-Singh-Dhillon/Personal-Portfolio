import Image from 'next/image'
import logo from '../images/Capture.PNG'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="text-white flex justify-evenly text-xl ">
        <div className='text-2xl items-center'>
              <div className='animate-bounce inline-block '> &lt;/&gt; </div>  Armaan
             
        </div>

          <div className="flex justify-evenly  w-6/12 items-center">
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
        <div className='flex items-center justify-evenly w-2/12 text-lg'>
              <AiFillLinkedin></AiFillLinkedin>
              <AiFillGithub></AiFillGithub>
              <AiOutlineMail></AiOutlineMail>
              <AiFillInstagram></AiFillInstagram>
        </div>
    </div>
  )
}

export default Navbar