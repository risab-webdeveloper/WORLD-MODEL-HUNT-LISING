import React from 'react'

const SubscribeForm = () => {
    return (
        <>
            <div className='contianer-fluid'>
                <div className='container mx-auto lg:px-16 md:px-8 px-2'>
                    <div className='h-min'>
                        <p className='  text-center text-h1'>Personal Finance Resources</p>
                        <p className='text-center text'>All the tools you need to better manage your finances </p>
                    </div>

                    <div className='lg:grid lg:grid-cols-7 grid-cols-8 md:grid-cols-4 h-max gap-6'>
                        <div className='h-auto lg:col-span-3 col-span-4 '>
                            <div class="bg-white p-4 rounded-lg shadow-lg text-center w-full h-full space-y-4 ">
                              <span className='mx-auto text-h2 border-4 px-2 py-1'>the|brief</span>
                              <p className='text-justify w-10/12 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis harum in tenetur illum fuga quibusdam obcaecati ratione magni repudiandae doloremque sunt consequuntur, quas similique illo laudantium dolor assumenda sapiente porro!</p>
                              <input type="text" className=' w-10/12 h-10 border-2' placeholder='Your@gmail' />
                              <button className='w-10/12 h-10 bg-red text-white'>Subsribe Now!</button>
                            </div>
                        </div>
                        <div className=' bg-white col-span-4 h-min'>
                            {/* cards */}
                            <div class="container mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4 ">
                                        <i class="text-4xl text-blue-500 fas fa-star"></i>
                                    </div>
                                    <h2 class="text-xl font-bold ">DIY Credit Repair Kit</h2>
                                    <p class="text-gray-600">The ultimate credit repair actian plan</p>
                                </div>


                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4">
                                        <i class="text-4xl text-green-500 fas fa-heart"></i>
                                    </div>
                                    <h2 class="text-xl font-bold">Your Financial Health Score</h2>
                                    <p class="">Test your financial health</p>
                                </div>


                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4">
                                        <i class="text-4xl text-purple-500 fas fa-star"></i>
                                    </div>
                                    <h2 class="text-xl font-semibold">Letter templates</h2>
                                    <p class="text-gray-600">Set up, cancel or dispute things.</p>
                                </div>


                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4">
                                        <i class="text-4xl text-blue-500 fas fa-heart"></i>
                                    </div>
                                    <h2 class="text-xl font-semibold text-center">Bill Tracker Template</h2>
                                    <p class="text-gray-600">Never miss a bill payment.</p>
                                </div>


                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4">
                                        <i class="text-4xl text-green-500 fas fa-star"></i>
                                    </div>
                                    <h2 class="text-xl font-semibold">Monthly Budget Spreadsheet</h2>
                                    <p class="text-gray-600">Start Budgeting </p>
                                </div>


                                <div class="bg-white p-4 shadow-lg rounded-lg text-center">
                                    <div class="flex items-center justify-center mb-4">
                                        <i class="text-4xl text-purple-500 fas fa-heart"></i>
                                    </div>
                                    <h2 class="text-xl font-semibold">Best Personal Finance BOoks</h2>
                                    <p class="text-gray-600">A list of must-reads</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SubscribeForm