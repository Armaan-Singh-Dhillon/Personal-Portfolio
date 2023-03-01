
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const About = () => {
    return (
        <div className="text-white">
            <div className='flex justify-evenly'>
                <div>
                    <Image
                        src='/img/about-page/image-about-page.png'
                        width={400}
                        height={400}

                    />
                </div>
                <div className='w-6/12'>

                    <div className='flex justify-evenly'>

                        <h1>About Me</h1>
                    </div>
                    <div>
                        <p>
                            As a web developer, I have a passion for creating beautiful and functional websites that deliver a seamless user experience.  My expertise lies in creating responsive, user-friendly websites using modern technologies such as HTML, CSS, JavaScript, and React as well as Node.js.

                        </p>
                        <p>

                            I am always looking for new challenges and opportunities to grow my skill set, and I am committed to staying up-to-date with the latest web development trends and best practices. I take pride in my ability to effectively communicate with clients and team members to ensure that every project I work on meets their goals and expectations.
                        </p>


                    </div>

                </div>
            </div>

            <div >
                <div className='flex justify-evenly'>
                    <div>

                        <h1 className='mb-4'>Education</h1>
                    </div>

                </div>
                <div className='flex p-4 justify-evenly'>
                    <div className='flex1'>

                        <Image
                            src='/img/about-page/nit.jpg'
                            className='rounded-xl m-4'
                            width={450}
                            height={450}

                        />
                    </div>
                    <div>
                        <div className='text-xl p-4 w-11/12'>
                            National Institute Of Technology , Kurukshetra-136115
                            <div className='flex items-center'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> currently doing B.tech in Electrical Engineering

                            </div>
                            <div className='flex items-center'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> 2021-2025 Batch
                            </div>
                            <div className='flex items-center'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> Current CGPA : 9.44
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex p-4 justify-evenly'>


                    <Image
                        src='/img/about-page/school.jpg'
                        className='rounded-xl h-64 m-4'
                        width={450}
                        height={450}

                    />

                    <div className='w-4/12'>
                        <div className='text-xl p-4 '>
                            The Sirsa School , Sirsa-125055 | Haryana
                            <div className='flex items-center'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> 10+2
                                
                            </div>
                            <div className='flex items-center'>
                                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight> 97%
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About