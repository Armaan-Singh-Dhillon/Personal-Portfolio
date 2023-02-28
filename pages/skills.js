import { BarGraph } from '@/components/Bargraph';

import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader';

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [framework, setFramework] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSkill = async () => {
    const { data } = await axios.get('http://localhost:3000/api/skills/getAll')
    setSkills(data.data)

  }
  const fetchFramework = async () => {
    const { data } = await axios.get('http://localhost:3000/api/skills/frameworks/getAll')
    setFramework(data.data)

  }
  const fetchBarGraph=async()=>{
    const { data } = await axios.get('http://localhost:3000/api/skills/bar-chart/getAll')
    setData(data.data)
  }
  useEffect(() => {
    fetchSkill()
    fetchFramework()
    fetchBarGraph()
  }, [])
  if(skills && framework && data ){
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }
 

  if (loading) {
    return <>
      <Loader></Loader>
    </>
  }
  else {
    const bardata = []
    const labels = []
    data.map(({ name, points }) => {
      bardata.push(points)
      labels.push(name)
    })

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

            

            <div className=' w-10/12'>
              {BarGraph({
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Skills',
                  },
                },
              }, {
                labels,
                datasets: [
                  {
                    label: 'Skills',
                    data: bardata,
                    backgroundColor: 'rgba(177, 79, 196,0.5)',

                  },

                ],
              })}
            </div>
            
          </div>

        </div>
      </>
    )
  }
}


export default Skills
