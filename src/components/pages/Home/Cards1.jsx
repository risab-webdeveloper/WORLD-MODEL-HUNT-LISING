import React from 'react'

const Cards1 = () => {
    return (
        <>
            <div className='container mx-auto py-16'>
                <div className="grid grid-cols-1  md:grid-cols-3">
                    {/* Card 1*/}
                    <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-2xl sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp" alt="Skyscrapers" />
                        </a>
                        <div className='h-24 w-40 bg-white relative bottom-14 left-6 rounded-lg shadow-xl'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-bold leading-tight  text-h3 ">
                                Mathematical Methods for Quantitative Finance
                            </h5>
                            <p className="mb-4 text-base ">
                                Massachussetts Institute of Technology
                            </p>
                        </div>
                        <div className="mt-auto border-neutral-100 px-6 py-3  mb-4">
                            <span className='bg-gray-100 px-3 py-3 rounded-lg'>Course</span>
                        </div>
                    </div>


                    {/* Card 2*/}
                    <div className="mx-3 mt-6 flex flex-col shadow-2xl rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 ">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp" alt="Los Angeles Skyscrapers" />
                        </a>
                        <div className='h-24 w-40 bg-white relative bottom-14 left-6 rounded-lg shadow-xl'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-bold leading-tight text-h3">
                                Machine learning with Python for finance professionals
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                ACCA
                            </p>
                        </div>
                        <div className="mt-auto  px-6 py-3 mb-3">
                            <span className='bg-gray-100 px-3 py-3 rounded-lg'>Course</span>
                        </div>
                    </div>




                    {/* Card 3*/}
                    <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-2xl sm:shrink-0 sm:grow sm:basis-0">
                        <a href="#!">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp" alt="Palm Springs Road" />
                        </a>
                        <div className='h-24 w-40 bg-white relative bottom-14 left-6 rounded-lg shadow-xl'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-bold leading-tight text-h3">
                                Risk Management and Credit Principles
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                New York Institute of Finance
                            </p>
                        </div>
                        <div className="mt-auto  px-6 py-3 mb-3">
                            <span className='bg-gray-100 px-3 py-3 rounded-lg'>Course</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards1