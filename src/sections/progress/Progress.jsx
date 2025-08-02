import React from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'

const Progress = () => {
    return (
        <div className='progress section bg-bcolor'>
            <div className="heading  
            flex flex-col items-center gap-10 text-center
            ">
                <h1 className='h2'>
                    {"Backing Your Up At  "}
                    <span className='text-acolor'>Every Stage Of Your Progress</span>
                </h1>

                <p className='paragraphP2 max-w-[758px] mb-16'>From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.</p>


            </div>

            <div className="cards flex flex-wrap gap-4 justify-center">

                <div className="relative bottom-0 hover:bottom-8 transition-all w-[30%] min-w-[330px] h-[500px] bg-[url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007576_d7d2285dfb.png)] bg-cover rounded-xl text-acolor p-10 flex flex-col">
                    <h2 className="h3">I'm A <br /> <span className='h4'>Startup.</span></h2>
                    <p className="paragraphP2 mt-10 text-black">Remarkable ideas often stall without the right team to bring them to life</p>
                    <div className='absolute bottom-20 left-10'>
                        <PrimaryButton text={'Get Started'} />
                    </div>
                </div>
                <div className="relative bottom-0 hover:bottom-8 transition-all w-[30%] min-w-[330px] h-[500px] bg-[url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007575_932944c09d.png)] bg-cover rounded-xl overflow-hidden text-white p-6">
                    <h2 className="h3">I'm A <br /> <span className='h4'>Startup.</span></h2>
                    <p className="paragraphP2 mt-10 ">Remarkable ideas often stall without the right team to bring them to life</p>
                    <div className='absolute bottom-20 left-10'>
                        <PrimaryButton text={'Explore More'} circleColor='--ccolor' />
                    </div>
                </div>
                <div className="relative bottom-0 w-[30%] min-w-[330px] h-[500px] bg-[url(https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007577_a472bb2ea9.png)] bg-cover rounded-xl text-acolor p-10 flex flex-col hover:bottom-8 transition-all">
                    <h2 className="h3">I'm A <br /> <span className='h4'>Startup.</span></h2>
                    <p className="paragraphP2 mt-10 text-black">Remarkable ideas often stall without the right team to bring them to life</p>
                    <div className='absolute bottom-20 left-10'>
                        <PrimaryButton text={'Get Started'} />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Progress