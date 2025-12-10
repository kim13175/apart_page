import { APARTMENT_TITLE } from "../Constant/constant"

const NavigateBar = () => {
    return (
        <nav className="flex flex-row gap-60 p-4 py-6 bg border-b shadow-md">
            <p className="text-red-900 text-lg">{APARTMENT_TITLE}</p>
            <ul className="flex gap-8 justify-center items-center">
                <li className="hover-effect">소개</li>
                <li className="hover-effect">입지환경</li>
                <li className="hover-effect">단지정보</li>
                <li className="hover-effect">세대안내</li>
                <li className="hover-effect">방문예약</li>
            </ul>
        </nav>
    )
}

export default NavigateBar