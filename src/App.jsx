import ImageSlider from "./Component/ImageSlider"
import Layout from "./Component/Layout"
import Notifications from "./Component/Notifications"
import Poster from "./Component/Poster"
import { CENTER } from "./Constant/center"
import { PREMIUM } from "./Constant/premium"
import { OPTION } from "./Constant/constant"
import ApartGallery from "./Component/ApartGallery"
import { useRef } from "react"
import TelAdd from "./Component/TelAdd"

function App() {
  const introRef = useRef(null)
  const envRef = useRef(null)
  const infoRef = useRef(null)
  const resevationRef = useRef(null)

  const navItems = [
    { label: "소개", ref: introRef },
    { label: "입지환경", ref: envRef },
    { label: "단지정보", ref: infoRef },
    { label: "방문예약", ref: resevationRef },
  ];

  return (
    <>
      <Layout navItems={navItems}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full gap-4" ref={introRef}>
            <h1 className="text-lg md:text-xl text-amber-700 font-bold">
              김해 구산 롯데 캐슬 시그니처 총 714세대의 프리미엄 랜드마크 단지
            </h1>
            <ApartGallery />
            <TelAdd />
          </div>
          <div ref={envRef}>
            <Poster postArray={PREMIUM} />
            <Poster postArray={CENTER} />
          </div>
          <div className="flex flex-col justify-center items-center mt-4" ref={infoRef}>
            <h2 className="font-bold text-xl">단지 정보 <span className="text-sm">(옆으로 넘기시면 단지 옵션들을 볼 수 있습니다.)</span></h2>
            <ImageSlider imageArray={OPTION} autoPlay={true} />
          </div>
          <TelAdd />
          <img src="/Image/insentive.png" />
          <div ref={resevationRef}>
            <Notifications />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default App
