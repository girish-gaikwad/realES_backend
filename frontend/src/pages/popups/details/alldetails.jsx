import React from 'react'

function Alldetails() {
  return (
    <div className="w-[50%] mr-3 flex flex-col h-full gap-3">
      <div className="w-full bg-[#F8F9FB] h-[calc(100%-10px)] rounded-[4px] p-4 ">
        <p className="text-[14px] font-semibold mb-2">UNIT PRICE DETAIL</p>

        <div className="w-full flex flex-col  h-[480px] overflow-y-auto hideScroll ">
          {Array.from({ length: 5 }).map((_, index) => (
            <>
              <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between mb-2 ">
                Bill Name Here <span className="font-semibold">$2,000</span>{" "}
              </p>

              <div className="w-full  flex items-center text-[#98A0AC] justify-between ">
                <p className=" text-[12px] font-thin ">
                  Discount{" "}
                </p>
                <p className="text-end text-[11px] ">
                 10%
                </p>{" "}
              </div>

              <div className="divider my-2"></div>
            </>
          ))}
        </div>

        <div className=" flex">
          <div className="w-full bg-[#e4e8ee] py-1 rounded-[4px] px-2">
            <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between  ">
              Final Total <span className="font-semibold">$2,000</span>{" "}
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Alldetails