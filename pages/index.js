import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import code from '../images/carbon.png'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center'>

        <div className='flex flex-col items-center xl:flex-row text-white  p-8 justify-evenly m-4'>
        <div className='flex flex-col w-full md:w-9/12 xl:w-6/12 xl:items-start'>
          <div className='text-md sm:text-lg'>
          
              <h1>

               I 'm a  web developer 
              </h1>
            
          </div>
          <div className='text-sm xl:text-lg'>
          
              <h1>

              Armaan Singh Dhillon
              </h1>
            
          </div>
          <p className=''>
             with my experience in creating innovative and engaging websites.. I am constantly learning and exploring new technologies to stay ahead of the curve and deliver cutting-edge solutions to my clients. On my portfolio, you can find a showcase of my previous work and some information about my skills and experience. Thank you for visiting!




          </p>
        </div>

        <div className=''>
          <Image
          src='/img/home/home-gif.gif'
          width={1000}
          height={1000}
          />
           
          
        </div>
        
      </div>

        <div className='text-white '>
          <h1> Overview About Me</h1>
      </div>
      <div className='m-4'>
       <Image
        src='/img/home/carbon.png'
        width={1500}
        height={1500}
        
       />
      </div>
      
    </div>
    </>
  )
}
