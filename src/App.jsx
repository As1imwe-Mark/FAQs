import { desktopBg} from "./assets/images"
import FAQS from "./constants/FAQs"
import Faqs from "./components/Faqs"

const App = () => {
  return (
    <div className="h-screen relative">
    <div className="h-[40%]" style={{ backgroundImage: `url(${desktopBg})` }}>
      </div>
      <Faqs  FAQS={FAQS}/>
      <div className="bg-[#f9f0ff] h-[60%]">
      </div>
    </div>
  )
}

export default App