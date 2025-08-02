
const ServiceCard = ({ title, imagePath, isActive }) => {
    return (
        <div className={`h-[187px] w-[169px] paragraphP1 flex flex-col items-center justify-center text-center rounded-lg border ${isActive? 'border-acolor': 'bg-bcolor border-none'}  p-4 cursor-pointer`}>
            <img src={imagePath} alt="service icon" />
            {title}
        </div>
    )
}

export default ServiceCard