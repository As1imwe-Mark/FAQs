/* eslint-disable react/prop-types */
import { useState } from "react"
import { iconMinus, iconPlus, star } from "../assets/images"

const Faqs = ({FAQS}) => {
  
  const [ID, setID]=useState(null)

  const openAns = (Id)=>{
    setID(Id === ID ? null: Id)
  }
  return (
    <div className="sm:w-[40%] sm:m-auto mx-5 rounded-2xl bg-white sm:p-10 px-6 sm:shadow-2xl shadow-lg z-50 absolute sm:left-[29%] top-[15%]">
    <div className="flex items-center sm:mb-5 gap-5 mt-3">
      <span><img src={star} /></span>
      <h1 className="sm:text-5xl text-2xl font-bold text-[#2f1533]"> FAQS</h1>
    </div>
      <div>
      {
        FAQS.map((faq)=>
          <div key={faq.id}>
          <div onClick={()=>{openAns(faq.id)}} className="flex items-center justify-between border-t-2 border-[#8c69910a] py-4 ">
          <h2 className="text-[#2f1533] text-base font-bold cursor-pointer active:text-[#8829d69c]">{faq.qn}</h2>
          <span className="ml-8">
            <img src={ID === faq.id ? `${iconMinus}`:`${iconPlus}`} alt="icons" className="inline-block"/>
          </span>
          </div>
          <div>
          {
            ID === faq.id && (
              <p className="text-[#8c6991] font-semibold sm:p-5 p-2">{faq.ans}</p>
            )
          }
          </div>
         
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Faqs