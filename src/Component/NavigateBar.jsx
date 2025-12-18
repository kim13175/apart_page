import { APARTMENT_TITLE } from "../Constant/constant"

const NavigateBar = ({ navItems }) => {

    const handleItemClick = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" })    
    }

    const responsiveTextStyle = "text-sm sm:text-md md:text-lg"
    const elementTextStyle = "hover-effect text-xs md:text-base cursor-pointer"

    return (
        <nav className="flex flex-row justify-between p-4 py-6 bg border-b shadow-md">
            <p className={`text-red-900 ${responsiveTextStyle} whitespace-nowrap`}>{APARTMENT_TITLE}</p>
            <ul className="flex justify-center items-center gap-2 sm:gap-6 md:gap-8">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className={elementTextStyle}
                        onClick={() => handleItemClick(item.ref)}
                    >
                        {item.label}
                    </li> 
                ))}
            </ul>
        </nav>
    )
}

export default NavigateBar