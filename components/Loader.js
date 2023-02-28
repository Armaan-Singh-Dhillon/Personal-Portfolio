import React from 'react'
import Image from 'next/image'

const Loader = () => {
    return (
        <>
            <div className='flex text-xl flex-col items-center justify-evenly bg-white '>

                <Image
                    src={'/img/loader/loader.gif'}
                    width={180}
                    height={180}
                ></Image>
                <div className='animate-pulse text-black'>

                Loading...
                </div>
            </div>
        </>
    )
}

export default Loader