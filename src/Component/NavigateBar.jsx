import { APARTMENT_TITLE } from "../Constant/constant"

const NavigateBar = () => {
    const responsiveTextStyle = "text-sm sm:text-md md:text-lg"
    const elementTextStyle = "hover-effect text-xs md:text-base"

    return (
        <nav className="flex flex-row justify-between p-4 py-6 bg border-b shadow-md">
            <p className={`text-red-900 ${responsiveTextStyle} whitespace-nowrap`}>{APARTMENT_TITLE}</p>
            <ul className="flex justify-center items-center gap-2 sm:gap-6 md:gap-8">
                <li className={`${elementTextStyle}`}>소개</li>
                <li className={`${elementTextStyle}`}>입지환경</li>
                <li className={`${elementTextStyle}`}>단지정보</li>
                <li className={`${elementTextStyle}`}>세대안내</li>
                <li className={`${elementTextStyle}`}>방문예약</li>
            </ul>
        </nav>
    )
}

export default NavigateBar