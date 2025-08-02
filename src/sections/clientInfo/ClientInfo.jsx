import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { Carousel } from 'antd'

const ClientInfo = () => {
    return (
        <div className='mb-[-450px]'>
            <div className='section'>
                <div className='sm:w-[80%] lg:w-[1000px]  relative bg-white z-10 mx-auto p-4 lg:p-10 border border-acolor rounded-3xl flex flex-col items-center lg:flex-row gap-10 justify-between '>

                    {/* ================= left col ================ */}
                    <div className="form lg:w-[55%] flex flex-col gap-6">
                        <h1 className='h2'>Your Vision, Our Expertise</h1>
                        <p>Submit your information to drive success forward.</p>
                        <form action="" className='flex flex-wrap gap-4'>

                            {/* radio buttons */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="serviceType" value="staff" className="accent-blue-600" />
                                    <span>Staff Augmentation</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="serviceType" value="dedicated" className="accent-blue-600" />
                                    <span>Dedicated Teams</span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="serviceType" value="fixed" className="accent-blue-600" />
                                    <span>Fixed Gigs</span>
                                </label>
                            </div>
                            <input type="text" placeholder='Full name*' className='px-2 py-1 border border-borderColor rounded-sm w-full' />
                            <input type="text" placeholder='Email*' className='px-2 py-1 border border-borderColor rounded-sm w-full' />
                            <input type="text" placeholder='Enter your preferred stack...' className='px-2 py-1 border border-borderColor rounded-sm w-full' />
                            <textarea placeholder='Tell us how we can help*' className='px-2 py-1 border border-borderColor rounded-sm w-full h-32 resize-none'></textarea>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" id='nda' />
                                <label htmlFor="nda">Get NDA</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" id='tc' />
                                <label htmlFor="tc">I agree with T&C</label>
                            </div>
                            <PrimaryButton text={'Send Message'} />
                        </form>
                    </div>

                    {/* ================= right col ================ */}
                    <div className='w-full lg:w-[45%] bg-bcolor rounded-lg p-4 lg:p-10 flex flex-col gap-10'>
                        <h1 className='h5'>Company's Stats</h1>
                        <div className="stats flex flex-wrap gap-4 justify-between items-center justify-center">
                            <div>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/projects_completed_d436823a8f.svg" alt="" />
                                <h1 className='h2'>300+</h1>
                                <p className='text-pcolor text-sm'>Successful Projects</p>
                            </div>
                            <div>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/success_rate_5a49ae2e35.svg" alt="" />
                                <h1 className='h2'>97%</h1>
                                <p className='text-pcolor text-sm'>Success Rate</p>
                            </div>
                            <div>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/devops_and_engineers_de792d4b84.svg" alt="" />
                                <h1 className='h2'>500+</h1>
                                <p className='text-pcolor text-sm'>Dev & Engineers</p>
                            </div>
                            <div>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/experience_330e93719a.svg" alt="" />
                                <h1 className='h2'>10+</h1>
                                <p className='text-pcolor text-sm'>Years Experience</p>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='h-[2px] bg-borderColor w-3/4 mx-auto'></div>


                        {/* carousel */}
                        <Carousel slidesToShow={3} autoplay>
                            <img src="https://invozone.com/static/design_rush_best_ar_vr_agency-9dafbc7d12a5020f1e21c448e6dc75fe.svg" alt="" />                            
                            <img src="	https://invozone.com/static/featured_on_upcity-4f67e820876fba8ecad1a7712b52782f.svg" alt="" />                            
                            <img src="https://invozone.com/static/top_firms_top_software_development_companies-a83da71d8cdc0867a3a1cd5a4aafb926.svg" alt="" />                            
                            <img src="	https://invozone.com/static/superb_company_in_2023-46c0b277a82d8f2079ec135b287577c7.svg" alt="" />                            
                            <img src="https://invozone.com/static/tech_reviewer_top_software_developers_2020-562eec793e356113a009f4aed5e48ded.svg" alt="" />                           
                        </Carousel>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ClientInfo