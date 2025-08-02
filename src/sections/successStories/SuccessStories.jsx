import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
// import 'antd/dist/antd.css';

export default function SuccessStories() {
  const carouselRef = useRef(null);

  return (
    <div className='section'>

      <div className="heading flex justify-between flex-col items-center gap-4 lg:flex-row mb-10">
        <h1 className='h2'>Partner's <span className='text-acolor'>Success</span> Stories</h1>
        <div className='btns flex gap-2 '>
          <div className={`group icon p-4 rounded-full border border-borderColor cursor-pointer bg-transparent hover:bg-acolor transition-all w-fit h-fit`} onClick={() => carouselRef.current.prev()}>
            <ArrowLeft size={16} className='group-hover:text-white' />
          </div>
          <div className={`group icon p-4 rounded-full border border-borderColor cursor-pointer bg-transparent hover:bg-acolor transition-all w-fit h-fit`} onClick={() => carouselRef.current.next()}>
            <ArrowRight size={16} className='group-hover:text-white' />
          </div>
        </div>
      </div>

      <Carousel ref={carouselRef}  dots={false} autoplay>

        {/* ========== Slide-1 ========== */}
        <div className='storyCard min-h-[400px] w-[3/4] !flex flex-wrap gap-10 flex-col items-center lg:flex-row'>
          {/* col1 */}
          <div className="image lg:w-[45%]">
            <img src="/success-stories/story1.png" alt="" />
          </div>

          {/* col2 */}
          <div className="text lg:w-[45%] flex flex-col gap-6">
            <h1 className='h2'>David <span className='text-acolor'>Smith</span></h1>
            <p className='paragraphP1'>CEO & Co-Founder - EasyFill</p>
            <p className='paragraphP4 text-pcolor'>InvoZone has been a game-changer for us, offering fresh ideas and genuine support. This wasn't our first outsourcing experience, but it has definitely been the smoothest.</p>
            <Link to={''} className='text-acolor paragraphP1'>View Case Study</Link>
          </div>
        </div>

        {/* ========== Slide-2 ========== */}
        <div className='storyCard min-h-[400px] w-[3/4] !flex flex-wrap gap-10 flex-col items-center lg:flex-row'>
          {/* col1 */}
          <div className="image lg:w-[45%]">
            <img src="/success-stories/story2.png" alt="" />
          </div>

          {/* col2 */}
          <div className="text lg:w-[45%] flex flex-col gap-6">
            <h1 className='h2'>Oliver <span className='text-acolor'>Wolff</span></h1>
            <p className='paragraphP1'>Kindle Project Manager</p>
            <p className='paragraphP4 text-pcolor'>We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. Overall, InvoZone's clear communication and high-quality delivery made them a standout partner, ensuring smooth collaboration throughout the project.</p>
            <Link to={''} className='text-acolor paragraphP1'>View Case Study</Link>
          </div>
        </div>

        {/* ========== Slide-3 ========== */}
        <div className='storyCard min-h-[400px] w-[3/4] !flex flex-wrap gap-10 flex-col items-center lg:flex-row'>
          {/* col1 */}
          <div className="image lg:w-[45%]">
            <img src="/success-stories/story3.png" alt="" />
          </div>

          {/* col2 */}
          <div className="text lg:w-[45%] flex flex-col gap-6">
            <h1 className='h2'>Ron <span className='text-acolor'>Zabel</span></h1>
            <p className='paragraphP1'>CEO - Cryptool.io</p>
            <p className='paragraphP4 text-pcolor'>We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing. Overall, InvoZone's clear communication and high-quality delivery made them a standout partner, ensuring smooth collaboration throughout the project.</p>
            <Link to={''} className='text-acolor paragraphP1'>View Case Study</Link>
          </div>
        </div>
      </Carousel>


    </div>
  );
}
