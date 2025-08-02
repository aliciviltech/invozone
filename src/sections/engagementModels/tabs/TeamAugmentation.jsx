import React from 'react'
import PrimaryBulletPoints from '../../../components/bulletPoints/PrimaryBulletPoints'
import PrimaryButton from '../../../components/buttons/PrimaryButton'

const TeamAugmentation = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center gap-6 justify-between mt-10'>
        <div className="leftCol flex flex-col gap-6">
            <h1 className='h5'>Team Augmentation</h1>
            <p>Transforming your ideas into ready-to-launch products.</p>
            <ul className='space-y-2'>
                <li className='flex gap-2'><PrimaryBulletPoints/> Early Growth Stage or Stealth Startup</li>
                <li className='flex gap-2'><PrimaryBulletPoints/>Product Development Roadmap</li>
                <li className='flex gap-2'><PrimaryBulletPoints/>MVP Development</li>
                <li className='flex gap-2'><PrimaryBulletPoints/>Prototypes / POC</li>
            </ul>
            <PrimaryButton text={'View Details'}/>
        </div>
        <div className="rightCol">
            <video
                className=""
                src="https://invozone-backend.s3.us-east-1.amazonaws.com/Infographic_1_adaa63c04a.webm"
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    </div>
  )
}

export default TeamAugmentation