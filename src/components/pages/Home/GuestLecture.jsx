import React from 'react'

const GuestLecture = () => {
    return (
        <>
            <div className='container mx-auto w-full'>
                <p className='text-h2 text-red font-bold text-center'>Rankings</p>
                <p className='text-center text-h5 font-bold'>Over 220K reviews written by Class Central users help you pick the best couse </p>

                <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
                    <div className="mr-4 block rounded-lg bg-white shadow-2xl">
                        <div classname="p-6 flex ">
                            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Best Online courses 
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                off all time 
                            </p>
                            
                        </div>
                    </div>

                    <div
                        class="block rounded-lg bg-white ">
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Special title treatment
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestLecture