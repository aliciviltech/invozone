import { ArrowRight } from 'lucide-react'
import React from 'react'

const PrimaryButton = ({ text, className = '', circleColor = '--acolor' }) => {
    return (
        <button className={`relative group overflow-hidden h-fit w-fit flex items-center gap-2 border ${className} rounded-full cursor-pointer p-1`}>

            <div
                className="absolute inset-0 right-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{
                    backgroundColor: `var(${circleColor})`,
                    zIndex: 0,
                }}
            ></div>

            <span className="relative z-10  ml-4 group-hover:text-white transition-colors duration-300">
                {text}
            </span>

            {/* <span className='ml-4'>{text}</span> */}

            <div className={`icon p-4 rounded-full relative z-10 `} style={{ backgroundColor: `var(${circleColor})` }}>
                <ArrowRight color='white' size={16} />
            </div>

        </button>
    )
}

export default PrimaryButton