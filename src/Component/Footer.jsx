import { APARTMENT_TITLE, TELL_NUMBER } from "../Constant/constant"

const Footer = () => {
    const footerSection = `
    본 웹사이트는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있으니 모델하우스 및 사업장을 방문하시어 직접 확인하시기 바랍니다.\n
    홍보물의 CG 및 이미지, 내용, 문구 등은 실제와 다를 수 있으며, 각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으니 참고 바랍니다.\n
    세부 설계 내용은 향후 인허가 과정에서 변동될 수 있습니다.
    `

    return (
        <div className="flex flex-col px-10 py-6 gap-4 bg-gray-700 text-white justify-center items-center">
            <h3 className="font-bold">{APARTMENT_TITLE}</h3>
            <p className="text-gray-400 text-center whitespace-nowrap">{APARTMENT_TITLE} | 경상남도 김해시 구산동 583</p>
            <div className="text-center">
                <p className="whitespace-pre-line text-xs text-gray-400">{footerSection}</p>
            </div>
            <div className="text-center text-sm font-bold">
                <p className="mb-2">시공사: (주)롯데건설</p>
                <p>{TELL_NUMBER}</p>
            </div>
        </div>
    )
}

export default Footer