import { BarGraph } from '@/components/Bargraph';

import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [framework, setFramework] = useState([])

  const fetchSkill = async () => {
    const { data } = await axios.get('http://localhost:3000/api/skills/getAll')
    setSkills(data.data)

  }
  const fetchFramework = async () => {
    const { data } = await axios.get('http://localhost:3000/api/skills/frameworks/getAll')
    setFramework(data.data)

  }
  useEffect(() => {
    fetchSkill()
    fetchFramework()
  }, [])
 

  

  console.log(skills, framework)
  if (!skills || !framework) {
    return <>
      Loading
    </>
  }
  else {


    return (
      <>



        <div className='text-white flex justify-evenly m-4'>
          <h1>Languages Known:</h1>
        </div>
        <div className='flex items-center justify-evenly p-8'>
          {skills.map((el) => {
            return <div className='skills-images text-white text-xl flex flex-col items-center'>
              <div className='h-[10rem]'>

                <Image
                  src={`/img/skills/${el.photo}`}

                  width={200}
                  height={200}
                />
              </div>

                {el.name}
            </div>
          })}
        </div>

        <div className='text-white flex justify-evenly m-4'>
          <h1>Frameworks Known:</h1>

        </div>
        <div className='flex items-center justify-evenly flex-wrap p-8'>
          {framework.map((el) => {
            return <div className='skills-images text-white text-xl flex flex-col items-center'>
              <div className='h-[10rem]'>

                <Image
                  src={`/img/skills/${el.photo}`}

                  width={200}
                  height={200}
                />
              </div>

              {el.name}
            </div>
          })}
        </div>
        <div className='text-white flex justify-evenly'>
          <h1>Skills (on range of 10)</h1>
        </div>
        <div className="text-white flex justify-evenly">
          <div className='bar-graph '>

            

            {BarGraph({
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Bar Chart',
                },
              },
            }, {
              labels:[''],
              datasets: [
                {
                  label: 'Skills',
                  data: [10],
                  backgroundColor: 'rgba(177, 79, 196,0.5)',

                },

              ],
            })}
            
          </div>

        </div>
      </>
    )
  }
}


export default Skills
