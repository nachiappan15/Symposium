import React from 'react'
import { NonTechnical, Technical } from '../../Data/EventsData'





const Register = () => {
    return (
        <div className='h-full grow w-full  p-6 lg:px-32'>
            <div className='h-full w-full mt-5 lg:mt-5 flex flex-col gap-1'>

                <h1 className='text-center text-xl lg:text-3xl font-semibold underline text-headline'>
                    REGISTER
                </h1>

                <p className='text-center text-xs lg:text-base font-semibold text-paragraph mb-3 lg:mb-6'>
                    Register here to participate in the events
                </p>
               
                <div className='flex flex-col mx-auto bg-card px-4 py-4 rounded-md mb-3 '>
                    <h1 className='text-xl font-semibold text-headline mb-2 '>
                        Information To be Noted For Registeration
                    </h1>
                    <p className='text-paragraph font-semibold ml-6 flex flex-col gap-2'>
                    <p>
                       1. Every student should Register <span>INDIVIDUALLY</span>
                    </p>
                    <p>2. Registeration fees is &#8377; 200.</p>
                    <p>3. Regitration fees will be &#8377; 450 for wokshop.</p>
                    <p>4. Every individual is allowed to participate in max 3 events.</p>
                    <p>5. The 3 events include both Technical and NonTechnical.</p>
                    <p>6. It is adviced to check the event timings to avoid clashes.</p>
                </p>

                </div>
                <div className='flex flex-col lg:flex-row gap-8 justify-between'>
                    <div className='w-full lg:w-1/3'>
                        <h1 className='text-lg lg:text-2xl font-semibold text-headline'>
                            Technical Events
                        </h1>
                        <div className='flex flex-col gap-3 mt-2 ml-8 '>
                            {
                                Technical.map(i => {
                                    return <>
                                        <p className='text-sm lg:text-base text-paragraph font-semibold border-b-2 border-paragraph'>{i.Name}</p>
                                    </>
                                })
                            }

                        </div>


                    </div>
                    <button className='hidden lg:block border-2 h-fit my-auto px-2 py-1 rounded-md border-highlight text-headline bg-highlight hover:text-highlight hover:bg-transparent'>Register Here</button>

                    <div className='w-full lg:w-1/3 '>
                        <h1 className='text-lg lg:text-2xl font-semibold text-headline'>
                            Non Technical Events
                        </h1>
                        <div className='flex flex-col gap-3 mt-2 ml-8 '>
                            {
                                NonTechnical.map(i => {
                                    return <>
                                        <p className='text-sm lg:text-base text-paragraph font-semibold border-b-2 border-paragraph'>{i.Name}</p>
                                    </>
                                })
                            }

                        </div>


                    </div>
                    <button className=' lg:hidden  border-2 h-fit my-auto px-2 py-1 rounded-md mb-3 border-highlight text-headline bg-highlight hover:text-highlight hover:bg-transparent'>Register Here</button>


                </div>
            </div>

        </div>
    )
}

export default Register