import { Carousel } from 'antd'
import React from 'react'


const carouselSettings = {
  dots: false,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  
  responsive: [
    
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Products = () => {
    return (
        <div className='ClientLogos section'>
            <p class="ClientLogos text-center">
                <span className='text-acolor'> 400+ </span>
                Products Developed For
                <span className='text-acolor'> 300+ </span>
                Customers Across
                <span className='text-acolor'>120+ </span>
                Countries.
            </p>
            <div className="hidden logos my-20 lg:flex flex-wrap items-center justify-center gap-x-24 gap-y-10">
                {
                    Array.from({length:10}).map((_,i)=>{
                        return (
                        <img src={`/clients-logos/client${i+1}.png`} alt="clients logo" />
                        )
                    })
                }
            </div>
             <div className='lg:hidden my-20 '>
                <Carousel  {...carouselSettings}>
                {
                    Array.from({length:10}).map((_,i)=>{
                        return (
                        <img src={`/clients-logos/client${i+1}.png`} alt="clients logo" className='px-10 max-w-[280px]' />
                        )
                    })
                }
                </Carousel>
            </div>
        </div>
    )
}

export default Products