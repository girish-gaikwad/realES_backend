import React from 'react'
import { ChevronRight, Info } from "lucide-react";
import usePopupStore from "../../../../zustand/popupStore";


function Types() {
    const {selectedType,setSelectedType} = usePopupStore();
  return (
    <>
    <div onClick={() => setSelectedType("primary")} className="w-[440px] h-[70px] rounded-[6px] bg-[#FEEAEA80] flex  justify-between items-center p-4">
        <div className="text-[#B3776D] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#B3776D] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            01
          </div>
          Primary
        </div>

        <div className="flex gap-3 justify-center items-center">
          <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>
          <ChevronRight className="text-[#B3776D]" />
        </div>
      </div>

      <div onClick={() => setSelectedType("secondary")} className="w-[440px] h-[70px] rounded-[6px] bg-[#EDE4FE80] flex  justify-between items-center p-4">
        <div className="text-[#896DB3] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#896DB3] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            02
          </div>
          Secondary
        </div>

        <div className="flex gap-3 justify-center items-center">
        <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>          <ChevronRight className="text-[#896DB3]" />
        </div>
      </div>

      <div onClick={() => setSelectedType("One Time Charges")} className="w-[440px] h-[70px] rounded-[6px] bg-[#DBF0F180] flex  justify-between items-center p-4">
        <div className="text-[#6DAFB3] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#6DAFB3] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            03
          </div>
          One Time Charges
        </div>

        <div className="flex gap-3 justify-center items-center">
        <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>          <ChevronRight className="text-[#6DAFB3]" />
        </div>
      </div>

      <div onClick={() => setSelectedType("Refundables")} className="w-[440px] h-[70px] rounded-[6px] bg-[#E4EDFF80] flex  justify-between items-center p-4">
        <div className="text-[#6D80B3] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#6D80B3] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            04
          </div>
          Refundables
        </div>

        <div className="flex gap-3 justify-center items-center">
        <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>          <ChevronRight className="text-[#6D80B3]" />
        </div>
      </div>

      <div onClick={() => setSelectedType("Inventory Item")} className="w-[440px] h-[70px] rounded-[6px] bg-[#FFFAD880] flex  justify-between items-center p-4">
        <div className="text-[#B3A16D] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#B3A16D] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            05
          </div>
          Inventory Item
        </div>

        <div className="flex gap-3 justify-center items-center">
        <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>          <ChevronRight className="text-[#B3A16D]" />
        </div>
      </div>

      <div onClick={() => setSelectedType("Parking Slot")} className="w-[440px] h-[70px] rounded-[6px] bg-[#FEEAEA80] flex  justify-between items-center p-4">
        <div className="text-[#B3776D] flex gap-3">
          <div className="w-[22px] h-[22px] bg-[#B3776D] rounded-full text-[10px] font-bold text-white flex justify-center items-center">
            06
          </div>
          Parking Slot         </div>

        <div className="flex gap-3 justify-center items-center">
        <div className="tooltip" data-tip="Base rent or montly rental amount, you can have only one primary pricing component per property ">
            <Info className="text-[#CED3DD] size-5 hover:cursor-pointer" />
          </div>          <ChevronRight className="text-[#B3A16D]" />
        </div>
      </div>
    </>
  )
}

export default Types