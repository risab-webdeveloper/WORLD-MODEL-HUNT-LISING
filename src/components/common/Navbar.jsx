import React from 'react'
import logo from '../image/logo.png';
import Group from '../image/Group.svg';
import three from '../image/three-line-horizontal-svg.png';
const Navbar = () => {
  return (
    <>
    <div className="font-sora">
      <div className="flex">
        <div className="lg:w-1/3 sm:w-full lg:bg-white flex lg:justify-end sm:pr-0 lg:pr-12 sm:justify-between sm:bg-white">
         <span><img className="lg:w-72 sm:w-64" src={logo}/></span><span><img className="mr-3 sm:block lg:hidden" src={Group} alt="User Icon" /></span>
         <span><img className="mr-3 sm:block lg:hidden" src={three} alt="User Icon" /></span>
        </div>
        <div className="w-2/3 bg-second-black  lg:text-white sm:text-purple sm:hidden lg:block">
         <ul className='flex justify-end  items-center p-5 mr-48 text-h5'>
          <li className='mx-5 px-2 border-b-2 border-purple'>Home</li>
          <li  className='mx-5 px-2'>All Models</li>
          <li  className='mx-5 px-2'>About Us</li>
          <li  className='mx-5 px-2'>Contact Us</li>
          <li  className='mx-5 px-2 flex'> 
          <span><img className="mr-3" src={Group} alt="User Icon" /></span>
          <span>Login / Register</span>
        </li>
         </ul>
        </div>
      </div>
</div>
 </>
   
  )
}

export default Navbar