import React from 'react'

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Overlay Content */}
            <div className="relative p-4 pb-10 sm:p-10 flex flex-col gap-6 items-start justify-end h-full text-white ">
                <p className='bg-white/20 px-4 py-1 rounded-full border border-white'>Software Development Consulting</p>
                <h1 className="h1 text-left">Future-Driven <br /> Innovations.</h1>
                <p className="paragraphP1 mt-4">Fostering Growth For Startups, Enterprises, And Innovators.</p>
            </div>

        </div>
    )
}

export default Hero