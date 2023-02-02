import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex text-white  p-8 justify-evenly'>
        <div className='w-6/12'>
          <div className='text-lg'>
          
              <h1>

               I 'm a  web developer 
              </h1>
            
          </div>
          <div className='text-lg'>
          
              <h1>

              Armaan Singh Dhillon
              </h1>
            
          </div>
          <p className=''>
             with my experience in creating innovative and engaging websites.. I am constantly learning and exploring new technologies to stay ahead of the curve and deliver cutting-edge solutions to my clients. On my portfolio, you can find a showcase of my previous work and some information about my skills and experience. Thank you for visiting!




          </p>
        </div>

        <div className=''>
          <img src='https://i0.wp.com/www.fegno.com/wp-content/uploads/2022/03/web-development-company-in-kochi.gif' alt="" />
          
        </div>
      </div>
    </>
  )
}
