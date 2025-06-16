import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>

            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-telegram/40 bg-telegram/10 rounded-full text-sm text-telegram'>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} className='w-2.5' alt="AI feature icon" />
            </div>

            <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Welcome to <span className='text-telegram'>Arthur's</span> <br /> Gaming Blog</h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your platform to fetch the latest all round video gaming news and insights, gaming ideas, tech news, as well as network. </p>

            <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden'>
                <input type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none' />
                <button type='submit' className='bg-telegram text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
            </form>
        </div>
        <img src={assets.gradientBackground} alt="header gradient background" className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header