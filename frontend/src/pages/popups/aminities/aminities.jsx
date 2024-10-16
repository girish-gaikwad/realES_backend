import { Info } from "lucide-react";
import React, { useEffect, useState } from "react";
import usePopupStore from "../../../zustand/popupStore";

const Aminities = () => {
  const { cards, selectedCard, SelectedamenitiesList, setIsModalOpen } =
    usePopupStore();

  // Find the index of the selected card
  const index = cards.findIndex((item) => item.id === selectedCard);
  const amenitiesList = cards[index]?.estate?.owner_amenities || [];

  // State to hold selected amenities and their "Free applicability" status
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  useEffect(() => {
    const existingAmenities = SelectedamenitiesList.find(
      (item) => item.estateId === selectedCard
    );
    if (existingAmenities) {
      setSelectedAmenities(existingAmenities.amenities);
    }
  }, []);

  const handleToggle = (amenityId) => {
    setSelectedAmenities((prevSelectedAmenities) => {
      const amenityIndex = prevSelectedAmenities.findIndex(
        (item) => item.id === amenityId
      );

      if (amenityIndex !== -1) {
        // If already selected, remove it
        return prevSelectedAmenities.filter((item) => item.id !== amenityId);
      } else {
        // Otherwise, add it to the selected amenities with "freeApplicability" set to false by default
        return [
          ...prevSelectedAmenities,
          { id: amenityId, freeApplicability: false,discounttype: "", discount: 0 },
        ];
      }
    });
  };

  const handleFreeApplicabilityToggle = (amenityId) => {
    setSelectedAmenities((prevSelectedAmenities) =>
      prevSelectedAmenities.map((amenity) =>
        amenity.id === amenityId
          ? { ...amenity, freeApplicability: !amenity.freeApplicability }
          : amenity
      )
    );
  };

  const totalSelected = selectedAmenities.length;
  const totalPrice = selectedAmenities.reduce((sum, item) => {
    const amenity = amenitiesList.find((amenity) => amenity.id === item.id);
    return amenity ? sum + amenity.price : sum;
  }, 0);

  const createObject = () => {
    const index = SelectedamenitiesList.findIndex(
      (item) => item.estateId === selectedCard
    );

    if (index !== -1) {
      // Update the existing object
      SelectedamenitiesList[index] = {
        estateId: selectedCard,
        amenities: selectedAmenities,
      };
    } else {
      // Add a new object to the array
      SelectedamenitiesList.push({
        estateId: selectedCard,
        amenities: selectedAmenities,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <div className="w-[432px] h-[580px]">
      <div
        className="w-full h-[60px] rounded-[6px] flex justify-between items-center p-4
              bg-[#FEEAEA80] text-[#B3776D]"
      >
        <div className="flex gap-3 items-center">
          <img
            src="/images/pool.png"
            className="w-[30px] h-[28px] filter"
            style={{
              filter: "invert(32%) sepia(25%) saturate(556%) hue-rotate(6deg)",
            }}
            alt=""
          />
          {totalSelected} Total Amenities
        </div>
        <div className="flex gap-3 font-semibold justify-center items-center">
          <p>${totalPrice}.00</p>
        </div>
      </div>

      <p className="text-[14px] my-2 text-[#98A0AC]">Available Amenities</p>

      <div className="flex gap-3 flex-col h-[425px] overflow-y-auto hideScroll">
        {amenitiesList.length === 0 ? (
          <p className="text-center text-[#B3776D]">
            No amenities are allocated.
          </p>
        ) : (
          amenitiesList.map((amenity) => {
            const isSelected = selectedAmenities.some(
              (item) => item.id === amenity.id
            );
            const isFreeApplicable = selectedAmenities.find(
              (item) => item.id === amenity.id
            )?.freeApplicability;

            return (
              <div key={amenity.id}>
                <div
                  className={`flex justify-between border px-2 rounded-[6px] py-2 items-center ${
                    isSelected ? "rounded-b-none" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <img
                      src={`https://via.placeholder.com/100?text=${amenity.name}`} // Placeholder for images
                      alt={amenity.name}
                      className="w-[44px] h-[44px] object-cover mr-3 rounded-[4px]"
                    />
                    <div>
                      <p className="font-semibold text-[16px]">
                        {amenity.name}
                      </p>
                      <p className="text-[12px] text-[#4E5A6B]">
                        ${amenity.price}.00 &#x2022; Valid {amenity.valid}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="flex bg-[#F5F5F5] items-center">
                      <input
                        type="checkbox"
                        className={`toggle rounded-full bg-[#98A0AC] hover:bg-[#8b9199] ${
                          isSelected
                            ? "bg-green-500 [--tglbg:#EEF9EE]"
                            : "bg-[#98A0AC] [--tglbg:#E4E8EE]"
                        }`}
                        checked={isSelected}
                        onChange={() => handleToggle(amenity.id)}
                      />
                    </label>
                  </div>
                </div>

                {/* Conditional rendering of the "Free applicability" checkbox */}
                {isSelected && (
                  <div className="p-2 px-3 border-l border-b border-r rounded-b-[6px]">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="checkbox rounded-full h-5 w-5 border-[#98A0AC] [--chkbg:theme(colors.indigo.500)] [--chkfg:white] checked:border-indigo-500"
                        checked={isFreeApplicable}
                        onChange={() =>
                          handleFreeApplicabilityToggle(amenity.id)
                        }
                      />
                      <span className="ml-2 text-[12px]">
                        Free applicability
                      </span>
                    </label>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <button
        onClick={createObject}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded mt-4"
      >
        Update & Save
      </button>
    </div>
  );
};

export default Aminities;
