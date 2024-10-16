import { Info } from "lucide-react";
import React from "react";
import usePopupStore from "../../../../zustand/popupStore";

function Primary() {
  const { selectedType } = usePopupStore(); // Fetching the value from Zustand store

  return (
    <div className="w-full h-full  flex flex-col justify-between">
      <div className="w-full flex flex-col justify-center items-center px-1 ">
        <div
          className={`w-[480px] h-[50px] rounded-[6px] flex justify-between items-center p-4
    ${
      selectedType === "primary"
        ? "bg-[#FEEAEA80] text-[#B3776D]"
        : selectedType === "secondary"
        ? "bg-[#EDE4FE80] text-[#896DB3]"
        : selectedType === "One Time Charges"
        ? "bg-[#DBF0F180] text-[#6DAFB3]"
        : selectedType === "Refundables"
        ? "bg-[#E4EDFF80] text-[#6D80B3]"
        : selectedType === "Inventory Item"
        ? "bg-[#FFFAD880] text-[#B3A16D]"
        : selectedType === "Parking Slot"
        ? "bg-[#E4FFEA80] text-[#6DB37D]" 
        : ""
    }`}
        >
          {selectedType.replace(/ /g, " ")} Pricing Component
          <div className="flex gap-3 justify-center items-center">
            <Info className="text-[#CED3DD] size-5" />
          </div>
        </div>

        <div className="w-full mt-5   flex">


          
          <div
            className={`w-[${selectedType === "primary" ? "50%" : "70%"}]`}
          >
            <p className="text-[12px] text-[#98A0AC] mb-2">Revenue Type</p>

            <div className="w-full flex gap-2">
              <label className="w-[61px] h-[40px] text-[14px] text-[#4E5A6B] rounded-[4px] border flex items-center justify-center">
                <input
                  type="radio"
                  name="revenue-type"
                  value="lease"
                  className="hidden"
                />
                <span className="block">Lease</span>
              </label>

              <label className="w-[58px] h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                <input
                  type="radio"
                  name="revenue-type"
                  value="sales"
                  className="hidden"
                />
                <span className="block">Sales</span>
              </label>

              <label className="w-[75px] h-[40px] text-[14px] border text-[#4E5A6B] rounded-[4px] flex items-center justify-center">
                <input
                  type="radio"
                  name="revenue-type"
                  value="manage"
                  className="hidden"
                />
                <span className="block">Manage</span>
              </label>


              {
                selectedType!="primary" &&
                <label className="w-[58px] h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                <input
                  type="radio"
                  name="revenue-type"
                  value="sales"
                  className="hidden"
                />
                <span className="block">Stay</span>
              </label>
              }
            </div>
          </div>


          <div className={`${selectedType === "primary" ? "w-[50%]" : "hidden"}`}
          >
              <p className="text-[12px] mb-2 text-[#98A0AC] ">
              Pricing Component
            </p>

            <input
              type="text"
              placeholder="Type here"
              className=" h-[40px] border bg-transparent px-2 text-[#000000] placeholder-[#98A0AC] rounded-[4px] border-[#E4E8EE]  w-full"
            />
          </div>
        </div>

        <div className="w-full mt-5   flex">
          <div className="w-[50%]">

            {selectedType !== "primary"? (
              <div className="w-[90%]" 
              >
                  <p className="text-[12px] mb-2 text-[#98A0AC] ">
                  Pricing Component
                </p>
    
                <input
                  type="text"
                  placeholder="Type here"
                  className=" h-[40px] border bg-transparent px-2 text-[#000000] placeholder-[#98A0AC] rounded-[4px] border-[#E4E8EE]  w-full"
                />
              </div>
            ):  
            (<>
              <p className="text-[12px] text-[#98A0AC] mb-2">
              Tax Group For Pricing Component
            </p>

            <select className=" h-[40px] border bg-transparent px-2 w-[210px] text-[#000000] rounded-[4px] border-[#E4E8EE]  ">
              <option value="">Select one</option>
              <option value="flat">Flat</option>
              <option value="percentage">Percentage</option>
              <option value="tiered">Tiered</option>
            </select>
            </>
            )}
            
          </div>

          <div className="w-[50%]">


            {
              selectedType !== "primary"? (
                <>
                <p className="text-[12px] text-[#98A0AC] mb-2">
                Tax Group For Pricing Component
              </p>
  
              <select className=" h-[40px] border w-full bg-transparent px-2 text-[#000000] rounded-[4px] border-[#E4E8EE]  ">
                <option value="">Select one</option>
                <option value="flat">Flat</option>
                <option value="percentage">Percentage</option>
                <option value="tiered">Tiered</option>
              </select>
                </>
              ):
              (
                <>
                <p className="text-[12px] text-[#98A0AC] mb-2">
                Component Based On
              </p>
  
              <div className="w-full flex gap-2">
                <label className="w-[75px] h-[40px] text-[14px] text-[#4E5A6B] rounded-[4px] border flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="lease"
                    className="hidden"
                  />
                  <span className="block">Amount</span>
                </label>
  
                <label className="w-[58px] h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="sales"
                    className="hidden"
                  />
                  <span className="block">UOM</span>
                </label>
              </div>
                    </>
              )
            }
           
          </div>
        </div>

        {
  (selectedType !== "primary") &&
  <>

<div className="w-full mt-5 flex">


<div className={`${(selectedType === "Refundables" || selectedType === "Inventory Item") ? "hidden" : " w-[50%]"}`}>


<p className="text-[12px] text-[#98A0AC] mb-2">
                Chargeble
              </p>
  
              <div className="w-full flex gap-2">
                <label className="w-[50px] h-[40px] text-[14px] text-[#4E5A6B] rounded-[4px] border flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="lease"
                    className="hidden"
                    />
                  <span className="block">Yes</span>
                </label>
  
                <label className="w-[40px] h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="sales"
                    className="hidden"
                    />
                  <span className="block">No</span>
                </label>
              </div>
                    </div>

<div className="w-[50%] ">


  {
    selectedType ==="Inventory Item"?
    <>
     <p className="text-[12px] text-[#98A0AC] mb-2">
                Pricing Based on
              </p>
  
              <div className="w-full flex gap-2">
                <label className="w-[75px] h-[40px] text-[14px] text-[#4E5A6B] rounded-[4px] border flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="lease"
                    className="hidden"
                    />

<span className="block">Monthly</span>
                    
                </label>
  
                <label className="px-2 h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="sales"
                    className="hidden"
                    />

{selectedType === "Refundables"?<span className="block">Rental Value</span>:
                  <span className="block">Total</span>
                    }
                </label>
               
              </div>
    
    </>:
    <>
    <p className="text-[12px] text-[#98A0AC] mb-2">
                Component Based On
              </p>
  
              <div className="w-full flex gap-2">
                <label className="w-[75px] h-[40px] text-[14px] text-[#4E5A6B] rounded-[4px] border flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="lease"
                    className="hidden"
                    />

<span className="block">Amount</span>
                    
                </label>
  
                <label className="px-2 h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="sales"
                    className="hidden"
                    />

{selectedType === "Refundables"?<span className="block">Rental Value</span>:
                  <span className="block">UOM</span>
                    }
                </label>
                <label className="w-[40px] h-[40px] text-[14px] border text-[#4E5A6B]  rounded-[4px] flex items-center justify-center">
                  <input
                    type="radio"
                    name="revenue-type"
                    value="sales"
                    className="hidden"
                    />
                  <span className="block">%</span>
                </label>
              </div></>
  }

  
                    </div>
                    </div>

                    
  </>
}





{
  selectedType === "Inventory Item"?
  <div className="w-full">
  
  <div className="w-full mt-5   flex">
          <div className="w-[50%]">



              <div className="w-[90%]" 
              >
                  <p className="text-[12px] mb-2  text-[#98A0AC] ">
                  Item Unit Price
                </p>
    
                <div className="input  flex items-center gap-1 rounded-[4px] border border-[#E4E8EE] bg-transparent px-2 text-[#000000]">
            <input
              type="text"
              className="w-full h-full  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
              />

           
              <p className="w-6 text-gray text-[12px]">$</p>
              
            
          </div>
              </div>
            
          
            
          </div>

          <div className="w-[50%]">


          
                <p className="text-[12px] text-[#98A0AC] mb-2">
                Tax Group For Pricing Component
              </p>
  
              <div className="input  flex items-center gap-1 rounded-[4px] border border-[#E4E8EE] bg-transparent px-2 text-[#000000]">
            <input
              type="text"
              className="w-full h-full  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
              />

           
              <p className="w-10 text-gray text-[12px]">Qty</p>
              
            
          </div>
           
          </div>
        </div>


  </div>:

        <div className="w-full mt-5   flex flex-col">
          <p className="text-[12px] text-[#98A0AC] mb-2">UOM Value</p>

          <div className="input  flex items-center gap-1 rounded-[4px] border border-[#E4E8EE] bg-transparent px-2 text-[#000000]">
            <input
              type="text"
              className="w-full h-[40px]  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
              />

            {
              selectedType === "primary" ?
              <p className="w-24">SAR/ Total</p>:
              
              <p className="w-24">$ / Montly</p>
            }
          </div>
        </div>

            }





{
  selectedType === "primary"&& 

        <div className="w-full mt-5 h-24  flex gap-2"> 
          <div className="w-[33.33%] h-full">
            <p className="text-[12px] text-[#98A0AC] mb-1">Maximum</p>
            <progress
              className="progress progress-error w-full mb-1"
              value={10}
              max="100"
            ></progress>
            <input
              type="text"
              className="w-full h-[40px] border rounded-[4px]  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
            />
          </div>


          <div className="w-[33.33%] h-full">
            <p className="text-[12px] text-[#98A0AC] mb-1">Recommended</p>
            <progress
              className="progress progress-success w-full mb-1"
              value={10}
              max="100"
            ></progress>
            <input
              type="text"
              className="w-full h-[40px] border rounded-[4px]  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
            />
          </div>
          <div className="w-[33.33%] h-full">
            <p className="text-[12px] text-[#98A0AC] mb-1">Mininum</p>
            <progress
              className="progress progress-warning w-full mb-1"
              value={10}
              max="100"
            ></progress>
            <input
              type="text"
              className="w-full h-[40px] border rounded-[4px]  bg-transparent px-2 text-[#000000]"
              placeholder="Search"
            />
          </div>
        </div>}
      </div>

      <div className="w-full flex justify-between items-center px-2">
        {" "}
        <button className="border h-[42px] w-[80px] rounded-[4px]">
          Back
        </button>{" "}
        <button className="text-white font-semibold h-[42px] w-[215px] rounded-[4px] bg-[#5078E1]">
          Create Pricing Component
        </button>
      </div>
    </div>
  );
}

export default Primary;
