import { BarGraph } from '../components/Bargraph'
import js from '../images/svg/javascript.svg'
import py from '../images/svg/python.svg'
import ja from '../images/svg/java.svg'
import ts from '../images/svg/typescript .svg'
import c from '../images/svg/c.svg'
import ht from '../images/svg/html.svg'
import cs from '../images/svg/css3.svg'
import android from '../images/svg/android.svg'
import nde from '../images/svg/node-js.svg'

import db from '../images/svg/mongodb.svg'
import react from '../images/svg/react.svg'
import sass from '../images/svg/sass.svg'
import tailwind from '../images/svg/tailwind-css.png'
import njs from '../images/svg/next.svg'
import ftter from '../images/svg/flutter.svg'
import boots from '../images/svg/bootstrap.svg'
import exp from '../images/svg/express.svg'
import Image from 'next/image'
const Skills = () => {
  return (
    <>
      <div className='text-white flex justify-evenly m-4'>
        <h1>Languages Known:</h1>
      </div>
      <div className='flex items-center justify-evenly p-8'>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={py}
 

          />
         Python
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={ja}
 

          />
          Java
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={ts}
 

          />
          Typescript
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={c}
 

          />
          C++
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={ht}
 

          />
          Html
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={js}
 

          />
          Javascript
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={cs}
 

          />
          Css
        </div>
      </div>
      
      <div className='text-white flex justify-evenly m-4'>
        <h1>Frameworks Known:</h1>
        
      </div>
      <div className='flex items-center justify-evenly flex-wrap p-8'>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={android}


          />

        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={nde}


          />
          Node
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={db}


          />
          

        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={react}


          />
          React
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={sass}


          />
          Sass
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={tailwind}


          />
          Tailwind
        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={njs}


          />
         

        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={boots}


          />
          Bootstrap

        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={exp}


          />
          Express

        </div>
        <div className='skills-images text-white text-xl flex flex-col items-center'>

          <Image
            src={ftter}


          />
          Flutter
        </div>
      </div>
      <div className='text-white flex justify-evenly'>
        <h1>Skills (on range of 10)</h1>
      </div>
      <div className="text-white flex justify-evenly">
        <div className='bar-graph '>

          <BarGraph ></BarGraph>
        </div>

      </div>
    </>
  )
}

export default Skills