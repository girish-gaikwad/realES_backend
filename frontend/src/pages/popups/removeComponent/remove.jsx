import React from "react";
import usePopupStore from "../../../zustand/popupStore";

function Remove() {
  const {
    cards,
    selectedCard,
    SelectedamenitiesList,
    SelectedutilitiesList,
    updateDiscount,
    updateDiscountType,
    setAmenitiesDiscount,
    deleteAmenities,
    deleteUtilities,
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
          {fullAmenitiesDetails.map((amenity) => (
            <>
              <React.Fragment key={amenity.id}>
                <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between  ">
                  {amenity.name}{" "}
                  <span className="font-semibold flex gap-7 items-center">
                    $ {amenity.price}{" "}
                    <div
                      onClick={() => {
                        deleteAmenities(selectedCard, amenity.id);
                      }}
                      className="w-[26px] h-[26px] bg-[#ffecec] rounded-[4px] flex justify-center items-center"
                    >
                      {" "}
                      <img src="/images/trash.svg" alt="" />{" "}
                    </div>{" "}
                  </span>{" "}
                </p>

                <div className="divider my-2"></div>
              </React.Fragment>
            </>
          ))}

          {fullUtilitiesDetails.map((utility) => (
            <>
              <React.Fragment key={utility.id}>
                <p className="w-full  text-[14px] text-[#4E5A6B] flex justify-between  ">
                  {utility.name}{" "}
                  <span className="font-semibold flex gap-7 items-center">
                    $ {utility.price}{" "}
                    <div
                      onClick={() => {
                        deleteUtilities(selectedCard, utility.id);
                      }}
                      className="w-[26px] h-[26px] bg-[#ffecec] rounded-[4px] flex justify-center items-center"
                    >
                      {" "}
                      <img src="/images/trash.svg" alt="" />{" "}
                    </div>{" "}
                  </span>{" "}
                </p>
                <div className="divider my-2"></div>
              </React.Fragment>
            </>
          ))}
        </div>

        <div className=" flex">
          <div className="w-full bg-[#e4e8ee] py-1 rounded-[4px] px-2">
            <p className="w-full  text-[14px] text-black flex justify-between  ">
              Final Total <span className="font-semibold">$2,000</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <button className="w-full h-[40px] bg-[#5078E1] rounded-[4px] text-[14px] text-white font-bold ">
        {" "}
        Update & Save
      </button>
    </div>
  );
}

export default Remove;
