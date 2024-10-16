import {
 
  ChevronDown,
  ChevronLeft,
 
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import usePopupStore from "../../zustand/popupStore";

function Cotation() {
  const{discount_on_cards,creatediscountarray,cards,fetchCards,userDetails,fetchUserDetails,selectedCard,SelectedamenitiesList,SelectedutilitiesList} = usePopupStore();


  useEffect(() => {
  fetchUserDetails();
  fetchCards();  
  creatediscountarray();
  calculateTotalPrice();
  calcuateTotalDiscount()
  }, [cards]);

function formatDate(dateString) {
  const date = new Date(dateString);  
  const day = date.getDate(); // Get day of the month (1-31)
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase(); // Get month name (JAN, FEB...)
  const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

  return `${day} ${month} ${year}`;
}


const [totalPrice, setTotalPrice] = useState(0);
const [totalDiscount, setTotalDiscount] = useState(0);

const selectedAmenitiesids = SelectedamenitiesList[0]?.amenities;
const selectedUtilitiesids = SelectedutilitiesList?.[0]?.utilities ;

// console.log("discount_on_cards",discount_on_cards);

const calculateTotalPrice = () => {
  let total = 0;
  // Add average price of all estates
  cards.forEach((card) => {
    total += card?.estate?.avg_price;
  });

  // Get selected amenities details
  const fullAmenitiesDetails = cards.flatMap((card) =>
    card.estate?.owner_amenities?.filter((amenity) =>
      selectedAmenitiesids?.some((selectedAmenity) => selectedAmenity?.id === amenity?.id)
    )
  );

  // Add prices of selected amenities
  fullAmenitiesDetails.forEach((amenity) => {
    total += amenity?.price;
  });


  // Get selected utilities details
  const fullUtilitiesDetails = cards.flatMap((card) =>
    card.estate?.owner_utilities?.filter((utility) =>
      selectedUtilitiesids?.some((selectedUtility) => selectedUtility?.id === utility?.id)
    )
  );

  // Add prices of selected utilities
  fullUtilitiesDetails.forEach((utility) => {
    total += utility?.price;
  });

  // Set total price
  setTotalPrice(total);
};

const calcuateTotalDiscount = () => {
  let total = 0;

  discount_on_cards.forEach((card) => {
    total += card.discount;
  });
  setTotalDiscount(total);
  }


  return (
    <div className="w-full h-full bg-teal-400">
      <div className="w-full h-[8%] bg-[#FFFFFF] px-5 flex items-center font-nunito justify-between">
        <div className="flex gap-2">
          <div className="w-[24px] h-[24px] bg-[#E4E8EE] flex justify-center items-center rounded-full ">
            <ChevronLeft className="text-[#091B29] size-5" />
          </div>
          <p className="text-[#071741] font-semibold">
            Create Quotation to Existing Lead
          </p>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="border bg-[#F5F7FA]  border-[#E4E8EE] flex items-center justify-between px-3 text-[#091B29] rounded-md w-[166px] h-[32px]"
          >
            Casagrand <ChevronDown className="text-[#071741] size-5" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu  rounded-box bg-[#F5F7FA] z-[1] w-[166px] p-2 shadow"
          >
            <li>
              <a>Casagrand</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-[92%]  px-5 py-4  bg-[#f4f6f9]">
        <div className="w-full shadow-md h-full bg-white font-medium  font-nunito rounded-[14px] flex flex-col justify-between">
          {/* bread crumbs */}
          <div className="h-12 w-full border-b-2  border-[#f3f5f7] flex items-center justify-start px-4">
            <nav
              class="flex text-[14px] font-nunito font-semibold text-[#5078E1]"
              aria-label="Breadcrumb"
            >
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="inline-flex items-center text-sm    hover:text-gray-700 "
                  >
                    Add Contact
                  </a>
                </li>

                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="#5078E1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>

                    <a href="#" class="ms-1   hover:text-gray-700 md:ms-2 ">
                      Lead Details
                    </a>
                  </div>
                </li>

                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="#5078E1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>

                    <a href="#" class="ms-1   hover:text-gray-700 md:ms-2 ">
                      Preview and Create Lead
                    </a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="#5078E1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>

                    <a href="#" class="ms-1   hover:text-gray-700 md:ms-2 ">
                      Quotation Details
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg
                      class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="#5078E1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="ms-1   hover:text-gray-700 md:ms-2 flex justify-center items-center gap-2 ">
                      <span className="w-[24px] h-[24px] rounded-full text-white border border-[#CBD7F6] flex justify-center items-center">
                        <span className="w-[16px] h-[16px] rounded-full  bg-[#5078e1] flex justify-center items-center text-xs ">
                          4
                        </span>
                      </span>
                      Preview and Create
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* 3 divs */}
          <div className=" flex  h-full ">
            <div className="h-full w-[33.33%]  pl-4 pr-3">
              <p className="text-[15px] font-nunito text-[#4E5A6B] my-2 font-bold">
                Lead Details
              </p>

              <div className="w-full h-16 p-3 flex items-center  border rounded-[4px] border-[#E4E8EE]">
                <div className="w-[45px] h-[45px] rounded-[4px]">
                  <img
                    src="/images/tom.png"
                    className="rounded-[4px] object-cover"
                    alt=""
                  />
                </div>

                <div className=" flex flex-col justify-center  ms-3 gap-1 ">
                  <p className="font-nunito font-bold text-[14px] flex items-center gap-2 text-black">
                    {userDetails.username}{" "}
                    <div className="h-[19px] w-[52px] bg-[#5078E11E] rounded-[4px] text-[10px] text-black flex justify-center items-center font-bold">
                      {userDetails.role}
                    </div>{" "}
                  </p>
                  <p className="font-nunito  p-0 m-0 text-[12px] text-[#4E5A6B] flex items-center gap-3">
                   {userDetails?.contry_code} {userDetails.phoneno} <p className="">&#x2022;</p>{" "}
                    {userDetails.email}
                  </p>
                </div>
              </div>
              <div className="divider my-3"></div>

              <p className="text-[14px] text-[#091B29] font-semibold mb-2  ">
                Quotation Details
              </p>

              <div className="flex w-full  mb-3 ">
                <div className="mr-[15%]">
                  <p className="text-[9px] text-[#98A0AC] mb-1">
                    LEASE START DATE
                  </p>
                  <p className="text-[12px] text-[#091B29] font-semibold">
                    {formatDate(userDetails.lease_start_date)}
                  </p>
                </div>
                <div className="mr-[15%]">
                  <p className="text-[9px] text-[#98A0AC] mb-1">
                    LEASE END DATE
                  </p>
                  <p className="text-[12px] text-[#091B29] font-semibold">
                    {formatDate(userDetails.lease_end_date)}

                  </p>
                </div>
                <div className="mr-[5%]">
                  <p className="text-[9px] text-[#98A0AC] mb-1">
                    RENT START DATE
                  </p>
                  <p className="text-[12px] text-[#091B29] font-semibold">
                    {formatDate(userDetails.rent_start_date)}
                  </p>
                </div>
              </div>

              <div className="mr-[15%]">
                <p className="text-[9px] text-[#98A0AC] mb-1">GRACE PERIOD</p>
                <p className="text-[12px] text-[#091B29] font-semibold">
                  {userDetails.grace_period} Days{" "}
                  <span className="text-[#98A0AC] text-[10px] font-normal">
                    (Beginning)
                  </span>
                </p>
              </div>
            </div>

            <div className="h-full w-[33.33%] bg-[#F5F7FAE6] px-4 flex flex-col ">
              <p className="text-[15px] h-[20px]  mb-3 font-nunito text-[#4E5A6B] my-2 font-bold">
                Unit Details
              </p>
              <div className="card-container  py-2">
{
  cards.map((card) => (
    <Card key={card.id} card={card} /> 
  ))
}
               
      {/* <Card/> */}
                
              </div>
            </div>

            <div className="h-full w-[33.33%] bg-white px-4">
              <p className="text-[15px] h-[20px]  mb-3 font-nunito text-[#4E5A6B] my-2 font-bold">
                Quatation Summary
              </p>

              <div className="w-full h-[calc(100%-40px)] flex flex-col justify-between rounded-[4px] bg-[#F5F7FA]">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th className="border-[#e4e8ee] border-b text-[10px]">
                          DESCRIPTION
                        </th>
                        <th className="border-[#e4e8ee] border-b text-[10px]">
                          QTY
                        </th>
                        <th className="border-[#e4e8ee] border-b text-end text-[10px]">
                          AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {/* <tr> */}
                      <td className="text-[14px] text-[#4E5A6B]">
                        Total Amount
                      </td>
                      <td className="text-[#4E5A6B] text-[14px] ">{cards.length}</td>
                      <td className="text-[#091B29] font-semibold text-end text-[14px]">
                        $ {totalPrice}
                      </td>
                      {/* </tr> */}
                      {/* row 2 */}
                      <tr>
                        <td className="border-[#e4e8ee] border-b  text-[14px] text-[#4E5A6B]">
                          Total Discount
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#4E5A6B] text-[14px] ">
                          {totalDiscount}
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#091B29] font-semibold text-end text-[14px]">
                          -$100.00
                        </td>
                      </tr>

                      {/* row 3 */}
                      <tr>
                        <td className=" border-[#e4e8ee] border-b text-[14px] mt-2 text-[#4E5A6B]">
                          Total Refundable{" "}
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#4E5A6B] text-[14px] ">
                          0%
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#091B29] font-semibold text-end text-[14px]">
                          $0
                        </td>
                      </tr>

                      <tr>
                        <td className=" border-[#e4e8ee] border-b text-[14px] mt-2 text-[#4E5A6B]">
                          Total Tax{" "}
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#4E5A6B] text-[14px] ">
                          18%
                        </td>
                        <td className="border-[#e4e8ee] border-b  text-[#091B29] font-semibold text-end text-[14px]">
                          $684.00
                        </td>
                      </tr>

                      <tr className="border-[#e4e8ee] border-b "></tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <div className="w-full flex justify-center m-0  ">
                    <div className="divider w-[95%]  m-0"></div>
                  </div>

                  <table className="table">
                    {/* head */}
                    <thead>
                      {/* <tr> */}
                      <th className="text-[14px] text-[#091B29] font-semibold">
                        Quatation Amount
                      </th>
                      <th></th>
                      <th className=" text-[14px] text-[#091B29] font-semibold text-end">
                        $4,148.00
                      </th>
                      {/* </tr> */}
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* footer  */}
          <div className="w-full h-16 rounded-b-[14px] bg-white pt-2">
            <div className="flex  justify-between px-4 ">
              <button className="w-[88px] h-[40px] border-[1.2px] text-[#091B29] border-[#E4E8EE] rounded-[8px]">
                Previous
              </button>

              <div className="flex gap-2">
                <button className="w-[75px] h-[40px]  text-[#091B29] border-[1.2px] border-[#E4E8EE] rounded-[8px] ">
                  {" "}
                  Cancel
                </button>
                <button className="w-[143px] h-[40px] rounded-[8px] bg-[#5078E1] text-white">
                  {" "}
                  Create Quatation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cotation;

