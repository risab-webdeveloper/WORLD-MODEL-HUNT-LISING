import React from 'react'

const CompanyHighlight = () => {
    return (
        <>
            <div className='container-fluid mx-auto h-max bg-red'>

                <div className='grid lg:grid-cols-8 grid-cols-4 h-max w-full container gap-3 mx-auto'>

                    <div className='bg-red col-span-4 ml-12 border-l-2 border-dashed py-6 border-white px-4 space-y-8 '>

                        <p className='text-h2 text-white font-bold leading-10'> Get the most out of class Central with a free account</p>
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <div className='text-white font-bold'>
                                <p className='text-[80px]'>60M</p>
                                <p className='text-h4 uppercase font-semibold '>visitors</p>
                            </div>
                            <div className='text-white font-bold '>
                                <p className='text-[80px]'>3.5M</p>
                                <p className='text-h4 uppercase font-semibold'>sign-ups</p>
                            </div>
                        </div>
                        <p className='text-h4 text-white font-semibold pt-4'>12,464 sign ups in the past 7 days </p>
                    </div>
                    <div className=' col-span-4 ml-8 bg-gray'>
                        <div className='grid  gap-y-6 pl-4 '>

                            <div className='border-white border-dashed border-l-2 bg-gray md:w-2/3'>
                                <div className='pl-3 border-white border-dashed border-b-2 bg-gray'>
                                    <p className='text-h1 text-white font-bold'>32M</p>
                                    <p className='text-white uppercase font-bold'>Follows</p>
                                    <p className='text-white pb-4 pt-4'> <span className='text-red'>40,320</span> follows in the past 7 days </p>
                                </div>
                                <div className='border-white border-dashed border-b-2 pl-3'>
                                    <p className='text-h1 text-white font-bold'>15M</p>
                                    <p className='text-white uppercase font-bold'>Bookmarks</p>
                                    <p className='text-white pb-4 pt-4'> <span className='text-red'>40,320</span> courses bookmarked in the pas t 7 days  </p>
                                </div>
                                <div className=' pl-3'>
                                    <p className='text-h1 text-white font-bold'>1M</p>
                                    <p className='text-white uppercase font-bold'>Lists created</p>
                                    <p className='text-white pb-4 pt-4'> <span className='text-red'>11,560</span> lists created in the past 7 days </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default CompanyHighlight