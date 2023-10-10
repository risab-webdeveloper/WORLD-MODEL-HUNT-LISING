import React from 'react'

const Footer = () => {
  return (
    <>

      <div className='bg-black container-fluid '>
        <div className='bg-black container mx-auto px-16 py-16'>
          <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-12 2xl:grid-cols-12'>
            <div className='md:col-span-8'>
              <div className='grid md:grid-flow-col gap-x-6 md:w-6/7 lg:w-5/4 2xl:w-100'>
                <div className='text-white text-justify w-100 xl:w-80'>
                  <p className='text-h4 my-5'>WMHMODELS</p>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className='text-white'>
                  <p className='text-h4 my-5'>Quick links</p>
                  <ul className='text-white'>
                    <li className='my-2'><a href="#">Contact</a></li>
                    <li className='my-2'><a href="#">About</a></li>
                    <li className='my-2'><a href="#">All Models</a></li>
                    <li className='my-2'><a href="#">Privacy Policy</a></li>
                    <li className='my-2'><a href="#">Terms and Condition</a></li>
                  </ul>
                </div>
                <div className='text-white'>
                  <p className='text-h4 my-5'>DIFM Group</p>
                  <ul className='text-white'>
                    <li className='my-2'><a href="#">wmhindia.com</a></li>
                    <li className='my-2'><a href="#">worldmodalhunt.com</a></li>
                    <li className='my-2'><a href="#">ahealthplace.com</a></li>
                    <li className='my-2'><a href="#">aeroway.com</a></li>
                    <li className='my-2'><a href="#">earthbyhumans.com</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 lg:col-span-4 lg:w-100 lg:ml-auto my-5">
              <div className="flex lg:justify-end   space-x-2 ">
                <a href="#" className="text-white">
                  <i className="fab fa-linkedin text-2xl border border-white rounded-full p-3"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="far fa-envelope text-2xl border border-white rounded-full p-3"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter text-2xl border border-white rounded-full p-3"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-facebook text-2xl border border-white rounded-full p-3"></i>
                </a>
              </div>

              <div className="py-10 relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white border border-gray-600 py-2 px-8 rounded pr-10 focus:outline-none focus:border-pink-500" />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-10 text-purple-500">
                  <i className="fas fa-bell"></i>
                </span>
              </div>



            </div>
          </div>

          <div className="text-white text-xs md:text-base sm:text-left md:text-center py-2">
            <span className="text-white">&copy;</span> DIFM.LLC, <span className='text-purple'>2023,</span> All rights reserved
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer