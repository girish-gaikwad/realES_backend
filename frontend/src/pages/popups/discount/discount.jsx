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
    setIsModalOpen  
  } = usePopupStore();
  
  const index = cards.findIndex((item) => item.id === selectedCard);

  //for amenities
  const selectedAmenitiesids = SelectedamenitiesList[0]?.amenities;
  const fullAmenitiesDetails = cards[index]?.estate?.owner_amenities?.filter(
    (amenity) =>
      selectedAmenitiesids?.some(
        (selectedAmenity) => selectedAmenity?.id === amenity?.id
      )
  );

  //for utilities
  const selectedUtilitiesids = SelectedutilitiesList?.[0]?.utilities || [];
  const fullUtilitiesDetails = cards[index]?.estate?.owner_utilities?.filter(
    (utility) =>
      selectedUtilitiesids?.some(
        (selectedUtility) => selectedUtility?.id === utility?.id
      )
  );


  const [totalPriceWithOutDiscount, setTotalPriceWithOutDiscount] = useState(0)
  const calculateTotalPrice = () => {
    let total = 0;
    const estatePrice = cards[index]?.estate?.avg_price
    const amenitiesPrice = fullAmenitiesDetails?.reduce((acc, curr) => acc + curr?.price, 0) || 0
    const utilitiesPrice = fullUtilitiesDetails?.reduce((acc, curr) => acc + curr?.price, 0) || 0

    total = estatePrice + amenitiesPrice + utilitiesPrice
    setTotalPriceWithOutDiscount(total)
  }

  useEffect(() => {
    calculateTotalPrice()
  }, [])


  const [discounts, setDiscounts] = useState({
    estateDiscount: { value: "", type: "AED" },
    amenitiesDiscounts: {},
    utilitiesDiscounts: {},
  });

  const[totalDiscount, setTotalDiscount] = useState(0)

  const calcuateTotalDiscount = () => {
    let total = 0;
    Object.values(discounts.amenitiesDiscounts).forEach(({value}) => {
      total += Number(value);
    });
    Object.values(discounts.utilitiesDiscounts).forEach(({value}) => {
      total += Number(value);
    })
    total += Number(discounts.estateDiscount.value);
    setTotalDiscount(total);
  }

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
    calcuateTotalDiscount()
    
  };
  
  const handleEstateDiscountTypeChange = (e) => {
    setDiscounts((prevState) => ({
      ...prevState,
      estateDiscount: {
        ...prevState.estateDiscount,
        type: e.target.value,
      },
    }));
    calcuateTotalDiscount()
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
    calcuateTotalDiscount()
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
    calcuateTotalDiscount()
  };

  console.log(discounts);
  

  const applyDiscount = () => {
    setGobalDiscount(discounts)
    setIsModalOpen(false)
  }



  const[finaltotalprice,setfinaltotalprice] = useState(0);

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
                  onChange={(e) => {updateDiscount(index, e.target.value)
                    handleEstateDiscountChange(e)
                  }}
                  className="w-[50%] pl-2 h-full rounded-l-[4px] border  text-[13px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                />
                <select
                  name=""
                  id=""
                  value={discounts.estateDiscount.type}

                  onChange={(e) => {updateDiscountType(index, e.target.value)
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

                      discounts.amenitiesDiscounts[amenity.id]?.value 
                      ||
                      SelectedamenitiesList.find(
                        (item) => item.estateId === selectedCard
                      )?.amenities.find((a) => a.id === amenity.id)?.discount ||
                      ""
                    }
                    onChange={(e) =>{
                      setAmenitiesDiscount(
                        selectedCard,
                        amenity.id,
                        e.target.value, // New discount value
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)
                          ?.discountType || ""
                      )
                      handleAmenityDiscountChange(
                        amenity.id,
                        e.target.value,
                        discounts.amenitiesDiscounts[amenity.id]?.type || "AED"
                      )
                    }
                    }
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
                    onChange={(e) =>{
                      setAmenitiesDiscount(
                        selectedCard,
                        amenity.id,
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)
                          ?.discount || 0, // Existing discount value
                        e.target.value // New discount type value
                      )
                      handleAmenityDiscountChange(
                        amenity.id,
                        discounts.amenitiesDiscounts[amenity.id]?.value || "",
                        e.target.value
                      )


                    }
                    }
                  >
                    <option value="AED">AED</option>
                    <option value="%">%</option>
                  </select>
                </div>
              </div>

              <div className="divider my-2"></div>
            </React.Fragment>
          ))}

          {fullUtilitiesDetails.map((utility) => (
            <>
              <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between mb-2 ">
                {utility.name}{" "}
                <span className="font-semibold">$ {utility.price}</span>{" "}
              </p>

              <div className="w-full  flex items-center justify-between ">
                <p className=" text-[12px] font-thin text-[#98A0AC] ">
                  Discount{" "}
                </p>
                <div className="font-semibold w-[120px] h-[20px] rounded-[4px] flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Eg . 10"
                    value={discounts.utilitiesDiscounts[utility.id]?.value || ""}
                    onChange={(e) =>
                      handleUtilityDiscountChange(
                        utility.id,
                        e.target.value,
                        discounts.utilitiesDiscounts[utility.id]?.type || "AED"
                      )
                    }
                    className="w-[55%] h-full rounded-l-[4px] border  text-[12px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                  />
                  <select
                    name=""
                    id=""
                    value={discounts.utilitiesDiscounts[utility.id]?.type || ""}
                    onChange={(e) =>
                      handleUtilityDiscountChange(
                        utility.id,
                        discounts.utilitiesDiscounts[utility.id]?.value || "",
                        e.target.value
                      )
                    }
                    className="w-[45%] h-full  rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                  >
                    <option value="">AED</option>
                    <option value="">%</option>
                  </select>
                </div>{" "}
              </div>

              <div className="divider my-2"></div>
            </>
          ))}
        </div>

        <div className=" flex">
          <div className="w-full bg-[#e4e8ee] py-1 rounded-[4px] px-2">
            <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between  ">
              Final Total <span className="font-semibold">${totalPriceWithOutDiscount-totalDiscount}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <button onClick={applyDiscount} className="w-full h-[40px] bg-[#5078E1] rounded-[4px] text-[14px] text-white font-bold ">
        {" "}
        Apply Discount
      </button>
    </div>
  );
}

export default Discount;
