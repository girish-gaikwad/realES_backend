import React from "react";
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
                  onChange={(e) => updateDiscount(index, e.target.value)}
                  className="w-[50%] pl-2 h-full rounded-l-[4px] border  text-[13px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                />
                <select
                  name=""
                  id=""
                  onChange={(e) => updateDiscountType(index, e.target.value)}
                  className="w-[50%] pl-1 h-full  rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                >
                  <option value="AED">AED</option>
                  <option value="%">%</option>
                </select>
              </div>{" "}
            </div>

            <div className="divider my-2"></div>
          </>

          {/* {fullAmenitiesDetails.map((amenity) => (
            <>
              <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between mb-2 ">
                {amenity.name}{" "}
                <span className="font-semibold">$ {amenity.price}</span>{" "}
              </p>

              <div className="w-full  flex items-center justify-between ">
                <p className=" text-[12px] font-thin text-[#98A0AC] ">
                  Discount{" "}
                </p>
                <div className="font-semibold w-[120px] h-[20px] rounded-[4px] flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Eg . 10"
                    className="w-[55%] h-full rounded-l-[4px] border  text-[12px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                  />
                  <select
                    name=""
                    id=""
                    className="w-[45%] h-full  rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                  >
                    <option value="AED">AED</option>
                    <option value="%">%</option>
                  </select>
                </div>{" "}
              </div>

              <div className="divider my-2"></div>
            </>
          ))} */}

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
                      SelectedamenitiesList.find(
                        (item) => item.estateId === selectedCard
                      )?.amenities.find((a) => a.id === amenity.id)?.discount ||
                      ""
                    }
                    onChange={(e) =>
                      setAmenitiesDiscount(
                        selectedCard,
                        amenity.id,
                        e.target.value, // New discount value
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)
                          ?.discountType || ""
                      )
                    }
                  />
                  <select
                    className="w-[50%] pl-1 h-full rounded-r-[4px] border border-t-[#E4E8EE] border-b-[#E4E8EE] border-l-[#E4E8EE] bg-[#FFFFFF]"
                    value={
                      SelectedamenitiesList.find(
                        (item) => item.estateId === selectedCard
                      )?.amenities.find((a) => a.id === amenity.id)
                        ?.discountType || ""
                    }
                    onChange={(e) =>
                      setAmenitiesDiscount(
                        selectedCard,
                        amenity.id,
                        SelectedamenitiesList.find(
                          (item) => item.estateId === selectedCard
                        )?.amenities.find((a) => a.id === amenity.id)
                          ?.discount || 0, // Existing discount value
                        e.target.value // New discount type value
                      )
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
                    className="w-[55%] h-full rounded-l-[4px] border  text-[12px] text-[#adadae] border-[#E4E8EE] bg-[#FFFFFF] focus:outline-none focus:border-transparent"
                  />
                  <select
                    name=""
                    id=""
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
              Final Total <span className="font-semibold">$2,000</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <button className="w-full h-[40px] bg-[#5078E1] rounded-[4px] text-[14px] text-white font-bold ">
        {" "}
        Apply Discount
      </button>
    </div>
  );
}

export default Discount;
