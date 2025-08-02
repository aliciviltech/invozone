import { Instagram, Linkedin, Mail, Phone, Star, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import SecondaryButton from '../../components/buttons/SecondaryButton'

const Footer = () => {
    return (
        <div className='bg-footerBg pt-[350px] font-product'>
            <div className='section px-10'>
                {/* ======================== main footer ======================== */}
                <div className="mainFooter flex flex-col xl:flex-row justify-between gap-4 text-white">

                    {/* ------------------------ left-col ------------------------ */}
                    <div className='max-w-[400px] mx-auto xl:w-[25%] p-8 border border-gray-700 rounded-4xl flex flex-col gap-8'>
                        {/* contact */}
                        <div className="contact flex flex-col gap-6">
                            <div className='number flex gap-4 items-center'>
                                <div className={`icon p-4 rounded-full bg-acolor`}>
                                    <Phone color='white' size={16} />
                                </div>
                                <div>
                                    <p className='text-sm'>Direct Call</p>
                                    <p>+1756753432</p>
                                </div>
                            </div>
                            <div className='email flex gap-4 items-center'>
                                <div className={`icon p-4 rounded-full bg-acolor`}>
                                    <Mail color='white' size={16} />
                                </div>
                                <div>
                                    <p className='text-sm'>Email Us</p>
                                    <p>sales@invozone.com</p>
                                </div>
                            </div>
                        </div>

                        {/* divider */}
                        <div className='h-[1px] w-[90%] mx-auto bg-gray-700'></div>
                        {/* reviews */}
                        <div>
                            <p className='mb-6 ml-6 flex gap-2'> <Star fill='gold' color='transparent'/> 5 star reviews</p>
                            <div className='flex gap-4 justify-center'>
                                <img width={50} src='https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005708_c162021cee.svg' />
                                <img width={50} src='https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005711_d7a4bce3b5.svg' />
                                <img width={50} src='https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005710_930415671c.svg    ' />
                                <img width={50} src='https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000005709_6f4a5abefb.svg' /> 
                            </div>
                        </div>
                        {/* divider */}
                        <div className='h-[1px] w-[90%] mx-auto bg-gray-700'></div>
                        {/* social */}
                        <div>
                            <p className='mb-6 ml-6'>Our Socials</p>
                            <div className='flex gap-4 justify-center'>
                                <SecondaryButton icon={<Linkedin size={16} />} />
                                <SecondaryButton icon={<Twitter size={16} />} />
                                <SecondaryButton icon={<Instagram size={16} />} />
                                <SecondaryButton icon={<Youtube size={16} />} />
                            </div>
                        </div>
                    </div>



                    {/* ------------------------ right-col ------------------------ */}
                    <div className='xl:w-[65%] flex flex-col gap-10 mt-10 xl:mt-unset'>
                        <div className="row1 hidden xl:flex gap-4 justify-between flex-wrap ">
                            <div className='flex flex-col gap-4'>
                                <h1 className='paragraphP1'>Services</h1>
                                <p>Web App Development</p>
                                <p>Mobile App Development</p>
                                <p>Enterprise App Development</p>
                                <p>AI development service</p>
                                <p>DevOps service</p>
                                <p>Software Quality service</p>
                                <p>UI/UX Design service</p>
                                <p>Product Development service</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='paragraphP1'>Hire Developer</h1>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dfr</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='paragraphP1'>Industry</h1>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dfr</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h1 className='paragraphP1'>Company</h1>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum dfr</p>
                                <p>Lorem ipsum dolor</p>
                                <p>Lorem ipsum </p>
                            </div>
                        </div>
                         {/* divider */}
                        <div className='h-[1px] w-[90%] mx-auto bg-gray-700'></div>

                        {/* Countries */}
                        <div className="row2 flex flex-col items-center xl:flex-row justify-betweeen gap-4">
                            <div className='flex gap-2 items-center'>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/USA_a4cd0947fc.svg" alt="" />
                                <div>
                                    <p className='text-sm'>130 NW 77th Ave Pembeoke Pines, Florida</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/canada_861bcce43c.svg" alt="" />
                                <div>
                                    <p className='text-sm'>130 NW 77th Ave Pembeoke Pines, Florida</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/malasiya_f922b0b1ac.svg" alt="" />
                                <div>
                                    <p className='text-sm'>130 NW 77th Ave Pembeoke Pines, Florida</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* ======================== bottom line ======================== */}
                <div className='bottomLine'></div>
            </div>
        </div>
    )
}

export default Footer