// Banner.jsx
import React from 'react'
import { FaStar } from "react-icons/fa";
import image from "../images/image.webp"

const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-amber-200 flex px-4">
            <div className='w-1/2 h-full bg-amber-950 pl-14 flex justify-end pb-28 flex-col'>
                <p className=' text-6xl'>movie name</p>
                <p className=' text-2xl'>directed By</p>
                <p className=' text-2xl'>act by</p>
                <p className='flex items-center text-2xl'>
                    IMDB rating: <FaStar className='text-amber-400' /><FaStar className='text-amber-400' /><FaStar className='text-amber-400' /><FaStar className='text-amber-400' /><FaStar className='text-amber-400' />
                </p>
            </div>
            <div className='w-1/2 h-full bg-amber-700 flex items-center justify-end pr-36'>
                <img src={image} alt="" className='h-[400px] w-[300px]' />
            </div>
        </div>
    )
}

export default Banner
