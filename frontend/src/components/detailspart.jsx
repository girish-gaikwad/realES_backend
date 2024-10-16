import React from 'react'
import { Bath, Bed, BookText, BrickWall, House } from "lucide-react";
import usePopupStore from '../zustand/popupStore';

function Detailpart() {

  const {individualEstate} = usePopupStore();
  return (
    <div className="w-[50%]  px-2 pr-4">
        <div className="h-[170px] w-full flex gap-1.5">


          <div className="w-[50%] h-full bg-green-200 rounded-[8px]">
            <img src="/images/interior.png" className="h-full rounded-[8px] w-full object-cover" alt="" />
          </div>


          <div className="w-[50%] h-full gap-1.5 flex flex-col">
            <div className="w-full h-[50%]  flex gap-1.5">
              <div className="h-full w-[50%] bg-green-200 rounded-[8px]">
              <img src="/images/interior2.png" className="h-full rounded-[8px] w-full object-cover" alt="" />


              </div>
              <div className="h-full w-[50%] bg-gray-200 rounded-[8px]">
            <img src="/images/interior3.png" className="h-full rounded-[8px] w-full object-cover" alt="" />

              </div>
            </div>
            <div className="w-full h-[50%]  flex gap-1.5">
              <div className="h-full w-[50%] bg-gray-200 rounded-[8px]">
            <img src="/images/interior4.png" className="h-full rounded-[8px] w-full object-cover" alt="" />

              </div>
              <div className="h-full w-[50%] bg-gray-200 rounded-[8px] relative">
            <img src="/images/interior5.png" className="h-full rounded-[8px] w-full object-cover" alt="" />
            <div className="absolute right-0 top-0 bg-[rgba(0,0,0,0.5)] rounded-[8px]  h-full w-full flex justify-center items-center">
              <p className="font-bold text-[18px] text-[#ffffff]">+5</p>
            </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-nunito font-bold text-[18px] mt-4 flex items-center gap-2 text-black">
          {individualEstate?.estate.name}{" "}
          <div className="h-[19px] w-[52px] bg-[#F5F7FA] rounded-[4px] text-[10px] text-[#98A0AC] flex justify-center items-center font-bold">
            UNIT-1234
          </div>{" "}
        </p>

        <p className="text-[14px] mt-2 text-[#4E5A6B]">
         {individualEstate?.estate.address}
        </p>

        <div className="flex justify-between mt-2 w-[80%] text-[#98A0AC] text-[14px]">
          <span className="flex justify-center items-center gap-1">
            <Bed size={16} /> <span className="text-black">{individualEstate?.estate.bed}</span>
          </span>
          &#x2022;
          <span className="flex justify-center items-center gap-1">
            <Bath size={16} /> <span className="text-black">{individualEstate?.estate.bathtub}</span>
          </span>
          &#x2022;
          <span className="flex justify-center items-center gap-1">
            <House size={16} /> <span className="text-black">{individualEstate?.estate.bhk} BHK</span>
          </span>
          &#x2022;
          <span className="flex justify-center items-center gap-1">
            <BrickWall size={16} />
            <span className="text-black">{individualEstate?.estate.sqft} </span>
             <span className="text-[12px] text-[#98A0AC]">Sq.Ft</span>
          </span>
        </div>

        <div className="divider "></div>

        <div className="w-full mt-2 text-[14px] flex justify-between">
          <p className="flex gap-1 justify-center items-center">
            <BookText className=" size-4 " />
            Handbook
          </p>

          <p className="text-[#5078E1]">View / Download</p>
        </div>
      </div>
  )
}

export default Detailpart