import { MoveRight } from "lucide-react"
import { APARTMENT_TITLE } from "../Constant/constant"

const Notifications = () => {

    const handlebuttonClick = () => {
        window.location.href = "https://form.naver.com/response/VtbSXdjA_EZsK8yeaP0AwA"
    }

    return (
       <div className="flex flex-row w-full bg-gray-600 justify-between items-center border-4">
            <div className="flex flex-col h-full w-full bg-orange-800 stroke-orange-800 items-center justify-center gap-4 p-4">
                <p className="text-lg sm:text-xl md:text-3xl font-bold text-white">방문예약 신청</p>
                <p className="text-xs sm:text-md md:text-lg font-bold text-white">김해 구산 롯데 캐슬 모델 하우스</p>
                <div 
                    className="flex flex-row gap-2 rounded-lg bg-gray-700 text-white font-bold p-2 hover-effect"
                    onClick={handlebuttonClick}
                >
                    <MoveRight /> 방문예약 신청하기
                </div>
            </div>
            <div>
                <img src="/Image/apart_image.png" alt={`${APARTMENT_TITLE} 이미지`} className="w-full h-full"/>
            </div>
       </div> 
    )
}

export default Notifications