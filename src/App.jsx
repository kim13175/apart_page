import ImageSlider from "./Component/ImageSlider"
import Layout from "./Component/Layout"
import Notifications from "./Component/Notifications"
import Poster from "./Component/Poster"
import { CENTER } from "./Constant/center"
import { PREMIUM } from "./Constant/premium"
import { OPTION } from "./Constant/constant"
import ApartGallery from "./Component/ApartGallery"

function App() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col w-full gap-4">
            <h1 className="text-2xl text-amber-700 font-bold">
              김해 구산 롯데 캐슬 시그니처 총 714세대의 프리미엄 랜드마크 단지
            </h1>
            <ApartGallery />
          </div>
          <Poster postArray={PREMIUM} />
          <Poster postArray={CENTER} />
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="font-bold text-xl">단지 정보 <span className="text-sm">(옆으로 넘기시면 단지 옵션들을 볼 수 있습니다.)</span></h2>
            <ImageSlider imageArray={OPTION} autoPlay={true} />
          </div>
          <img src="/Image/insentive.png" />
          <Notifications />
        </div>
      </Layout>
    </>
  )
}

export default App
