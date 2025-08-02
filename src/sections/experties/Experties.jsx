import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PrimaryButton from '../../components/buttons/PrimaryButton'


const carouselSettings = {
  dots: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true
      },
    },
  ],
};

const Experties = () => {
    const carouselRef = useRef(null);
    return (
        <div className='bg-bcolor'>
            <div className='section'>

                <div className="heading flex justify-between flex-col items-center gap-4 lg:flex-row mb-10">
                    <h1 className='h2'>Expertise in software development accross multiple <span className='text-acolor'>Industires</span></h1>
                    <div className='btns flex gap-2 '>
                        <div className={`group icon p-4 rounded-full border border-borderColor cursor-pointer bg-transparent hover:bg-acolor transition-all w-fit h-fit`} onClick={() => carouselRef.current.prev()}>
                            <ArrowLeft size={16} className='group-hover:text-white' />
                        </div>
                        <div className={`group icon p-4 rounded-full border border-borderColor cursor-pointer bg-transparent hover:bg-acolor transition-all w-fit h-fit`} onClick={() => carouselRef.current.next()}>
                            <ArrowRight size={16} className='group-hover:text-white' />
                        </div>
                    </div>
                </div>

                <div className='w-3/4 mx-auto lg:w-full'>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {/* slide-1 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-dcolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">E-commerce</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/ecommerce_a8c373431e.webp')" }}
                        ></div>
                    </div>

                    {/* slide-2 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-ecolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">Education</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/education_592ecc3d5c.webp')" }}
                        ></div>
                    </div>

                    {/* slide-3 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-dcolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">Travel & Tourism</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/travel_5213ff55c0.webp')" }}
                        ></div>
                    </div>

                    {/* slide-4 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-ecolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">Real Estate</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/realestate_544e623be9.webp')" }}
                        ></div>
                    </div>

                    {/* slide-5 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-dcolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">PropTech</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007680_1_19d09f6f39.webp')" }}
                        ></div>
                    </div>

                    {/* slide-6 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-ecolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">On Demand</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007681_1_f617eaaae0.webp')" }}
                        ></div>
                    </div>

                    {/* slide-7 */}
                    <div className="group w-80 h-[600px] p-6 rounded-lg bg-dcolor relative overflow-hidden cursor-pointer">
                        <div className="z-10 relative group-hover:animate-blur-card flex flex-col gap-10 justify-end h-full group-hover:text-white">
                            <h2 className="h3 font-bold">Health Care</h2>
                            <ul className='list-disc pl-5 paragraphP4 group-hover:text-white text-pcolor space-y-2'>
                                <li>Social Commerce</li>
                                <li>Subscription based e-commerce</li>
                                <li>Marketplace platform</li>
                                <li>Digital goods e-commerce</li>
                            </ul>
                            <PrimaryButton text={'Explore More'} className='group-hover:border-white group-hover:text-white' />
                        </div>
                        <div
                            className="absolute inset-0 bg-cover  bg-center opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-none group-hover:animate-blur-card transition-all duration-500"
                            style={{ backgroundImage: "url('https://invozone-backend.s3.us-east-1.amazonaws.com/healthcare_b27e93b03c.webp')" }}
                        ></div>
                    </div>
                </Carousel>
                </div>

            </div>





        </div>
    )
}

export default Experties