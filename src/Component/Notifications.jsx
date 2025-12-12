import { MoveRight } from "lucide-react"

const Notifications = () => {
    return (
       <div className="flex flex-row w-full bg-gray-600 justify-between items-center border-4">
            <div className="flex flex-col h-full w-full bg-orange-800 stroke-orange-800 items-center justify-center gap-4 p-4">
                <p className="text-3xl font-bold text-white">방문예약 신청</p>
                <p className="text-lg font-bold text-white">김해 구산 롯데 캐슬 모델 하우스</p>
                <div className="flex flex-row gap-2 rounded-lg bg-gray-700 text-white font-bold p-2">
                    <MoveRight /> 방문예약 신청하기
                </div>
            </div>
            <img src="/Image/apart_image.png" className="h-40 w-120"/>
       </div> 
    )
}

export default Notifications