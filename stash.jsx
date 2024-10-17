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
    // calculateTotalPrice();
    // calcuateTotalDiscount()
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
  







































  import React, { useEffect, useState } from "react";
  import usePopupStore from "../../../zustand/popupStore";
  
  function Discount() {
    const {
      cards,
      selectedCard,
      SelectedamenitiesList,
      SelectedutilitiesList,
      updateDiscount,
      updateDiscountType,
      setAmenitiesDiscount,
      setGobalDiscount,
      gobalDiscount,
    } = usePopupStore();
  
    const index = cards.findIndex((item) => item.id === selectedCard);
  
    // For amenities
    const selectedAmenitiesids = SelectedamenitiesList[0]?.amenities;
    const fullAmenitiesDetails = cards[index]?.estate?.owner_amenities?.filter(
      (amenity) =>
        selectedAmenitiesids?.some(
          (selectedAmenity) => selectedAmenity?.id === amenity?.id
        )
    );
  
    // For utilities
    const selectedUtilitiesids = SelectedutilitiesList?.[0]?.utilities || [];
    const fullUtilitiesDetails = cards[index]?.estate?.owner_utilities?.filter(
      (utility) =>
        selectedUtilitiesids?.some(
          (selectedUtility) => selectedUtility?.id === utility?.id
        )
    );
  
    const [totalPriceWithOutDiscount, setTotalPriceWithOutDiscount] = useState(0);
    const calculateTotalPrice = () => {
      let total = 0;
      const estatePrice = cards[index]?.estate?.avg_price;
      const amenitiesPrice = fullAmenitiesDetails?.reduce(
        (acc, curr) => acc + curr?.price,
        0
      ) || 0;
      const utilitiesPrice = fullUtilitiesDetails?.reduce(
        (acc, curr) => acc + curr?.price,
        0
      ) || 0;
  
      total = estatePrice + amenitiesPrice + utilitiesPrice;
      setTotalPriceWithOutDiscount(total);
    };
  
    useEffect(() => {
      calculateTotalPrice();
    }, []);
  
    const [discounts, setDiscounts] = useState({
      estateDiscount: { value: "", type: "AED" },
      amenitiesDiscounts: {},
      utilitiesDiscounts: {},
    });
  
    // Effect to set gobalDiscount when it changes, avoiding rerenders
    useEffect(() => {
      if (gobalDiscount && Object.keys(gobalDiscount).length !== 0) {
        setDiscounts(gobalDiscount);
      }
    }, [gobalDiscount]);
  
    // Handle discount input change for estate
    const handleEstateDiscountChange = (e) => {
      setDiscounts((prevState) => ({
        ...prevState,
        estateDiscount: {
          ...prevState.estateDiscount,
          value: e.target.value,
        },
      }));
    };
  
    const handleEstateDiscountTypeChange = (e) => {
      setDiscounts((prevState) => ({
        ...prevState,
        estateDiscount: {
          ...prevState.estateDiscount,
          type: e.target.value,
        },
      }));
    };
  
    // Handle discount input change for amenities
    const handleAmenityDiscountChange = (amenityId, value, type) => {
      setDiscounts((prevState) => ({
        ...prevState,
        amenitiesDiscounts: {
          ...prevState.amenitiesDiscounts,
          [amenityId]: { value, type },
        },
      }));
    };
  
    // Handle discount input change for utilities
    const handleUtilityDiscountChange = (utilityId, value, type) => {
      setDiscounts((prevState) => ({
        ...prevState,
        utilitiesDiscounts: {
          ...prevState.utilitiesDiscounts,
          [utilityId]: { value, type },
        },
      }));
    };
  
    const applyDiscount = () => {
      setGobalDiscount(discounts);
    };
  
    const [finalTotalPrice, setFinalTotalPrice] = useState(0);
  
    return (
      <div className="w-[50%] mr-3 flex flex-col h-full gap-3">
        <div className="w-full bg-[#F8F9FB] h-[calc(100%-40px)] rounded-[4px] p-4 ">
          <p className="text-[14px] font-semibold mb-2">UNIT PRICE DETAIL</p>
  
          <div className="w-full flex flex-col  h-[440px] overflow-y-auto hideScroll ">
            <>
              <p className="w-full text-[14px] text-[#4E5A6B] flex justify-between mb-2">
                {cards[index].estate.name}{" "}
                <span className="font-semibold">
                  ${cards[index].estate.avg_price}
                </span>
              </p>
  
              <div className="w-full  flex items-center justify-between ">
                <p className=" text-[12px] font-thin text-[#98A0AC] ">
                  Discount{" "}
                </p>
                <div className="font-semibold w-[120px] h-[25px] rounded-[4px] flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Eg . 10"
                    value={discounts.estateDiscount.value}
                    onChange={(e) => {
                      updateDiscount(index, e.target.value);
                      handleEstateDiscountChange(e);
                    }}
                    className="w-[50%] pl-2 h-full rounded-l-[4px] border  text-[13px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                  />
                  <select
                    value={discounts.estateDiscount.type}
                    onChange={(e) => {
                      updateDiscountType(index, e.target.value);
                      handleEstateDiscountTypeChange(e);
                    }}
                    className="w-[50%] pl-1 h-full  rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                  >
                    <option value="AED">AED</option>
                    <option value="%">%</option>
                  </select>
                </div>{" "}
              </div>
  
              <div className="divider my-2"></div>
            </>
  
            {fullAmenitiesDetails.map((amenity) => (
              <React.Fragment key={amenity.id}>
                <p className="w-full text-[14px] text-[#4E5A6B] flex justify-between mb-2 ">
                  {amenity.name}{" "}
                  <span className="font-semibold">$ {amenity.price}</span>{" "}
                </p>
  
                <div className="w-full flex items-center justify-between ">
                  <p className="text-[12px] font-thin text-[#98A0AC]">Discount</p>
                  <div className="font-semibold w-[120px] h-[25px] rounded-[4px] flex justify-center items-center">
                    <input
                      type="text"
                      placeholder="Eg . 10"
                      className="w-[50%] pl-2 h-full rounded-l-[4px] border text-[12px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                      value={
                        discounts.amenitiesDiscounts[amenity.id]?.value ||
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)?.discount ||
                        ""
                      }
                      onChange={(e) => {
                        setAmenitiesDiscount(
                          selectedCard,
                          amenity.id,
                          e.target.value, // New discount value
                          SelectedamenitiesList.find(
                            (item) => item.estateId === selectedCard
                          )?.amenities.find((a) => a.id === amenity.id)
                            ?.discountType || ""
                        );
                        handleAmenityDiscountChange(
                          amenity.id,
                          e.target.value,
                          discounts.amenitiesDiscounts[amenity.id]?.type || "AED"
                        );
                      }}
                    />
                    <select
                      className="w-[50%] pl-1 h-full rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                      value={
                        discounts.amenitiesDiscounts[amenity.id]?.type ||
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)
                          ?.discountType || ""
                      }
                      onChange={(e) => {
                        setAmenitiesDiscount(
                          selectedCard,
                          amenity.id,
                          SelectedamenitiesList.find(
                            (item) => item.estateId === selectedCard
                          )?.amenities.find((a) => a.id === amenity.id)
                            ?.discount || 0, // Existing discount value
                          e.target.value // New discount type value
                        );
                        handleAmenityDiscountChange(
                          amenity.id,
                          discounts.amenitiesDiscounts[amenity.id]?.value || "",
                          e.target.value
                        );
                      }}
                    >
                      <option value="AED">AED</option>
                      <option value="%">%</option>
                    </select>
                  </div>
                </div>
              </React.Fragment>
            ))}
  
            <div className="divider my-2"></div>
  
            {fullUtilitiesDetails.map((utility) => (
              <React.Fragment key={utility.id}>
                <p className="w-full text-[14px] text-[#4E5A6B] flex justify-between mb-2 ">
                  {utility.name}{" "}
                  <span className="font-semibold">$ {utility.price}</span>
                </p>
  
                <div className="w-full flex items-center justify-between ">
                  <p className="text-[12px] font-thin text-[#98A0AC]">
                    Discount
                  </p>
                  <div className="font-semibold w-[120px] h-[25px] rounded-[4px] flex justify-center items-center">
                    <input
                      type="text"
                      placeholder="Eg . 10"
                      className="w-[50%] pl-2 h-full rounded-l-[4px] border text-[12px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                      value={
                        discounts.utilitiesDiscounts[utility.id]?.value ||
                        SelectedutilitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.utilities.find((u) => u.id === utility.id)?.discount ||
                        ""
                      }
                      onChange={(e) => {
                        setAmenitiesDiscount(
                          selectedCard,
                          utility.id,
                          e.target.value, // New discount value
                          SelectedutilitiesList.find(
                            (item) => item.estateId === selectedCard
                          )?.utilities.find((u) => u.id === utility.id)
                            ?.discountType || ""
                        );
                        handleUtilityDiscountChange(
                          utility.id,
                          e.target.value,
                          discounts.utilitiesDiscounts[utility.id]?.type || "AED"
                        );
                      }}
                    />
                    <select
                      className="w-[50%] pl-1 h-full rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                      value={
                        discounts.utilitiesDiscounts[utility.id]?.type ||
                        SelectedutilitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.utilities.find((u) => u.id === utility.id)
                          ?.discountType || ""
                      }
                      onChange={(e) => {
                        setAmenitiesDiscount(
                          selectedCard,
                          utility.id,
                          SelectedutilitiesList.find(
                            (item) => item.estateId === selectedCard
                          )?.utilities.find((u) => u.id === utility.id)
                            ?.discount || 0, // Existing discount value
                          e.target.value // New discount type value
                        );
                        handleUtilityDiscountChange(
                          utility.id,
                          discounts.utilitiesDiscounts[utility.id]?.value || "",
                          e.target.value
                        );
                      }}
                    >
                      <option value="AED">AED</option>
                      <option value="%">%</option>
                    </select>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
  
        <div className="w-full bg-[#F8F9FB] h-[40px] flex justify-between items-center px-4 rounded-[4px] ">
          <p className="font-semibold text-[#4E5A6B] ">TOTAL:</p>
          <p className="font-semibold text-[#FF3F00] text-[16px] ">{finalTotalPrice} AED</p>
        </div>
  
        <button
          onClick={applyDiscount}
          className="bg-blue-500 text-white w-full py-2 rounded-lg"
        >
          Apply Discounts
        </button>
      </div>
    );
  }
  
  export default Discount;
  


























  import { create } from "zustand";
import axios from "axios";

const usePopupStore = create((set, get) => ({

//popup options
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),



  // Card options and selected option
  selectedOption: "",  // Default value or dynamic value
  selectedType: "",  // Default value or dynamic value
  selectedCard: null,  //selected card id
  setSelectedType: (type) => set({ selectedType: type }),
  setSelectedOption: (option) => set({ selectedOption: option }),
  setSelectedCard: (card) => set({ selectedCard: card }),

  // user details
  userDetails: [],
  fetchUserDetails: async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user-details/1");
      set({ userDetails: response.data });
    } catch (error) {
      console.log(error.message + " user");
    }
  },

  // Cards rendering
  cards: [],
  fetchCards: async () => {
    console.log("fetching cards");
    
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user-estates/1");
      set({ cards: response.data });
    } catch (error) {
      console.log(error.message + " cards");
    }
  },

  // Utilities rendering
  SelectedamenitiesList: [],
  SelectedutilitiesList: [],

  setAmenitiesDiscount: (estateId, amenityId, discount, discountType) =>
    set((state) => ({
      SelectedamenitiesList: state.SelectedamenitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              amenities: item.amenities.map((amenity) =>
                amenity.id === amenityId
                  ? { ...amenity, discount, discountType }
                  : amenity
              ),
            }
          : item
      ),
    })),

    deleteAmenities: (estateId, amenityId) =>
    set((state) => ({
      SelectedamenitiesList: state.SelectedamenitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              amenities: item.amenities.filter((amenity) => amenity.id !== amenityId),
            }
          : item
      ),
    })),
    deleteUtilities: (estateId, utilityId) =>
    set((state) => ({
      SelectedutilitiesList: state.SelectedutilitiesList.map((item) =>
        item.estateId === estateId
          ? {
              ...item,
              utilities: item.utilities.filter((utility) => utility.id !== utilityId),
            }
          : item
      ),
    })),



  // card discount
  discount_on_cards: [],

  creatediscountarray: () => {
    console.log('creatediscountarray');
    setTimeout(() => {
      const cards = get().cards;
      const updatedCards = cards.map(card => {
        const { estate, ...rest } = card;
        return { ...rest, discounttype: "", discount: 0 };
      });
      set({ discount_on_cards: updatedCards });
      console.log(get().discount_on_cards);
    }, 2000);
  },

  updateDiscount: (index, discount) => set((state) => {
    const updatedCards = [...state.discount_on_cards];
    updatedCards[index].discount = discount;
    return { discount_on_cards: updatedCards };
  }),

  updateDiscountType: (index, discounttype) => set((state) => {
    const updatedCards = [...state.discount_on_cards];
    updatedCards[index].discounttype = discounttype;
    return { discount_on_cards: updatedCards };
  }),










  // Card actions
deleteCard: async (cardId, userId, estateId) => {
  const { discount_on_cards, cards } = get();

  // Update cards and discount_on_cards in the store state
  set({
    cards: cards.filter((card) => card.id !== cardId),
    discount_on_cards: discount_on_cards.filter((card) => card.id !== cardId),
  });

  console.log("discount_on_cards", get().discount_on_cards);

  // Attempt to soft-delete the card
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/user-estates/soft-delete/${userId}/${estateId}`
    );
    console.log(response);
    console.log("Card deleted successfully");
  } catch (error) {
    console.log(error.message);
  }
},



  // isolated estae detail
  individualEstate: null,
  setIndividualEstate: () => {
    const selectedCard = get().selectedCard;
    const estate = get().cards.find((card) => card.id === selectedCard);
    set({ individualEstate: estate });
  },

 






}));

export default usePopupStore;
