import { Tabs } from 'antd';
import React from 'react'
import ProductDevelopment from './tabs/ProductDevelopment';
import ItSystems from './tabs/ItSystems';
import TeamAugmentation from './tabs/TeamAugmentation';
import './engagementModels.css'

const EngagementModels = () => {
    return (
        <div>
            <div className='section'>
                {/* heading */}
                <div className="heading flex flex-col items-center gap-4 text-center">
                    <h1 className='h2'>Engagement <span className='text-acolor'>Models</span></h1>
                    <p className='paragraphP2 text-pcolor max-w-[668px]'>Choose from flexible engagement models tailored to your needs, ensuring seamless collaboration with time & material or dedicated teams.</p>
                </div>

                {/* body */}
                <div className='mt-10 bg-bcolor border border-borderColor rounded-3xl p-10'>
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        animated
                        items={[
                            {
                                label: `Product Development`,
                                key: '1',
                                children: <ProductDevelopment/>
                            },
                            {
                                label: `Managed IT Systems`,
                                key: '2',
                                children: <ItSystems/>
                            },
                            {
                                label: `Team Augmentation`,
                                key: '3',
                                children: <TeamAugmentation/>
                            },
                        ]}

                      
                    />
                </div>

            </div>
        </div>
    )
}

export default EngagementModels