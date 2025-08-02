import React from 'react'

const SecondaryButton = ({icon}) => {
    return (
        <div className={`group icon p-4 rounded-full border border-gray-700 cursor-pointer bg-transparent hover:bg-acolor transition-all w-fit h-fit`} onClick={() => carouselRef.current.next()}>
            {icon}
        </div>
    )
}

export default SecondaryButton