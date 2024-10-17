import React, { useEffect, useState } from 'react'
import usePopupStore from '../../../zustand/popupStore'

function Alldetails() {
  const{totalPrice,totalDiscount,
    cards,
    selectedCard,
    SelectedamenitiesList,
    SelectedutilitiesList,
    updateDiscount,
    updateDiscountType,
    setAmenitiesDiscount,
  }=usePopupStore()

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

  return (
    <div className="w-[50%] mr-3 flex flex-col h-full gap-3">
      <div className="w-full bg-[#F8F9FB] h-[calc(100%-10px)] rounded-[4px] p-4 ">
        <p className="text-[14px] font-semibold mb-2">UNIT PRICE DETAIL</p>

        <div className="w-full flex flex-col  h-[480px] overflow-y-auto hideScroll ">
          
        <>
            <p className="w-full text-[14px] text-[#4E5A6B] flex justify-between mb-1">
              {cards[index].estate.name}{" "}
              <span className="font-semibold">
                ${cards[index].estate.avg_price}
              </span>
            </p>

            

            <div className="divider my-1"></div>
          </>


        {fullAmenitiesDetails.map((amenity) => (
            <React.Fragment key={amenity.id}>
 
              <p className="w-full text-[14px] text-[#4E5A6B] flex justify-between mb-1 ">
                {amenity.name}{" "}
                <span className="font-semibold">$ {amenity.price}</span>{" "}
              </p>

              <div className="divider my-1"></div>
            </React.Fragment>
          ))}

          {fullUtilitiesDetails.map((utility) => (
            <>
              <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between mb-1 ">
                {utility.name}{" "}
                <span className="font-semibold">$ {utility.price}</span>{" "}
              </p>

             

              <div className="divider my-1"></div>
            </>
          ))}
        </div>

        <div className=" flex">
          <div className="w-full bg-[#e4e8ee] py-1 rounded-[4px] px-2">
            <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between  ">
              Final Total <span className="font-semibold">$ {totalPriceWithOutDiscount}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Alldetails