import React, { useEffect, useState } from 'react'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import ServiceCard from './ServiceCard'
import { Link } from 'react-router'
import PrimaryBulletPoints from '../../components/bulletPoints/PrimaryBulletPoints'

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const serviceCards = [
        {
            title: 'Product Engineering',
            imagePath: '/service-icons/service1.svg',
        },
        {
            title: 'Data and Artificial Intelligence',
            imagePath: '/service-icons/service2.svg',
        },
        {
            title: 'Hire Dev',
            imagePath: '/service-icons/service3.svg',
        },
        {
            title: 'DevOps & CloudOps',
            imagePath: '/service-icons/service4.svg',
        },
        {
            title: 'Emerging Technologies',
            imagePath: '/service-icons/service5.svg',
        },
        {
            title: 'Block Chain & Web 3.0',
            imagePath: '/service-icons/service6.svg',
        },
    ]

    const serviceDetails = [
        {
            title: 'Product Engineering',
            desc: 'Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.',
            bullets: [
                'Discovery Workshop',
                'Custom Software Development',
                'Web App Development',
                'Mobile App Development'
            ]
        },
        {
            title: 'Data & Artificial Intelligence',
            desc: "We drive your business forward by crafting tomorrow's AI solutions today, ensuring they are futuristic enough to align with your unique goals and challenges.",
            bullets: [
                'AI Strategy And Consulting',
                'ML Model Deployment & Training ',
                'Natural Language Processing',
                'Custom Computer Vision Solutions'
            ]
        },
        {
            title: 'Hire Dev',
            desc: 'Invozone helps you hire, acquire and retain top development talent. Boost your in-house team or build your own dev center.',
            bullets: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ]
        },
        {
            title: 'DevOps & CloudOps',
            desc: 'We optimize operations with advanced DevOps and CloudOps strategies while boosting agility & scalability in technology deployments.',
            bullets: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ]
        },
        {
            title: 'Engineering Technologies',
            desc: "We are dedicated to the latest IT trends, integrating immersive experiences, augmented reality, and virtual reality to provide you with reliable and innovative solutions.",
            bullets: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ]
        },
        {
            title: 'Blockchain & Web 3.0',
            desc: 'We provide innovative solutions in blockchain technology, developing secure and decentralized applications, enhancing digital trust, and improving operational efficiency.',
            bullets: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
            ]
        },
    ];

    const handleActiveIndex = (index) => {
        setActiveIndex(index)
    }

    const activeService = serviceDetails.find((service, index) => index == activeIndex)


    return (
        <div className='Services section'>
            <div className="heading flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
                <h1 className='h2 max-w-[558px]'>
                    {"Software Development Services "}
                    <span className='text-acolor'>Forward Planners</span>
                </h1>

                <PrimaryButton text={'View All'} />

            </div>


            <div className="details 
            mt-10 flex flex-col items-center
            lg:flex-row lg:justify-between
            ">
                <div className="leftCol lg:w-[48%] flex flex-wrap gap-2 justify-center">
                    {
                        serviceCards.map((card, index) =>
                            <div key={index} onClick={() => handleActiveIndex(index)}>
                                <ServiceCard title={card.title} imagePath={card.imagePath} isActive={activeIndex === index} />
                            </div>
                        )
                    }
                </div>

                {/* ==================== right col ================== */}
                <div className="rightCol mt-10 lg:mt-unset lg:w-[48%] flex flex-col gap-6">
                    <h1 className='h3'>{activeService.title}</h1>
                    <p className='paragraphP3'>{activeService.desc}</p>
                    <div className='flex flex-wrap w-[90%] gap-4'>
                        {
                            activeService.bullets.map((bullet, index) =>
                                <Link key={index} className='paragraphP1 flex items-center gap-2' to={'/'} > <PrimaryBulletPoints />{bullet}</Link>
                            )
                        }
                    </div>
                    <PrimaryButton text={'View More'} />
                </div>




            </div>
        </div>
    )
}

export default Services