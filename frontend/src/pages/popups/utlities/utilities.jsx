import { Info } from "lucide-react";
import React, { useEffect, useState } from "react";
import usePopupStore from "../../../zustand/popupStore";

const Utilities = () => {
  const { cards, selectedCard, SelectedutilitiesList } = usePopupStore();

  // Find the index of the selected card
  const index = cards.findIndex((item) => item.id === selectedCard);
  const utilitiesList = cards[index]?.estate?.owner_utilities || [];

  // State to hold selected utility IDs
  const [selectedUtilityIds, setSelectedUtilityIds] = useState([]);

  useEffect(() => {
    const existingUtilities = SelectedutilitiesList.find(
      (item) => item.estateId === selectedCard
    );
    if (existingUtilities) {
      setSelectedUtilityIds(existingUtilities.utilities.map(u => u.id)); // Only store the IDs for toggle purposes
    }
  }, [selectedCard, SelectedutilitiesList]);

  const handleToggle = (utilityId) => {
    setSelectedUtilityIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(utilityId)) {
        // If already selected, remove it
        return prevSelectedIds.filter((id) => id !== utilityId);
      } else {
        // Otherwise, add it to the selected IDs
        return [...prevSelectedIds, utilityId];
      }
    });
  };

  const totalSelected = selectedUtilityIds.length;
  const totalPrice = selectedUtilityIds.reduce((sum, id) => {
    const utility = utilitiesList.find((item) => item.id === id);
    return utility ? sum + utility.price : sum;
  }, 0);

  const createObject = () => {
    const index = SelectedutilitiesList.findIndex(
      (item) => item.estateId === selectedCard
    );

    // Create the utilities with additional info (discounttype, discount) if needed
    const utilitiesWithDetails = selectedUtilityIds.map((id) => ({
      id,
      discounttype: "", // Default values for now
      discount: 0,
    }));

    if (index !== -1) {
      // Update the existing object
      SelectedutilitiesList[index] = {
        estateId: selectedCard,
        utilities: utilitiesWithDetails,
      };
    } else {
      // Add a new object to the array
      SelectedutilitiesList.push({
        estateId: selectedCard,
        utilities: utilitiesWithDetails,
      });
    }

    console.log("SelectedutilitiesList", SelectedutilitiesList);
  };

  return (
    <div className="w-[432px] h-[580px]">
      <div className="w-full h-[60px] rounded-[6px] flex justify-between items-center p-4 bg-[#DBF0F180] text-[#6DAFB3]">
        <div className="flex gap-3 items-center">
          <img
            src="/images/utilities.png"
            className="w-[30px] h-[28px] filter"
            style={{
              filter: "invert(41%) sepia(46%) saturate(177%) hue-rotate(135deg)",
            }}
            alt="Utilities Icon"
          />
          {totalSelected} Total Utilities
        </div>
        <div className="flex gap-3 font-semibold justify-center items-center">
          <p>${totalPrice}.00</p>
        </div>
      </div>

      <p className="text-[14px] my-2 text-[#98A0AC]">Available Utilities</p>

      <div className="flex gap-3 flex-col h-[425px] overflow-y-auto hideScroll">
        {utilitiesList.length === 0 ? (
          <p className="text-center text-[#6DAFB3]">No Utilities are allocated.</p>
        ) : (
          utilitiesList.map((utility) => (
            <div key={utility.id}>
              <div
                className={`flex justify-between border px-2 rounded-[6px] py-2 items-center ${
                  selectedUtilityIds.includes(utility.id) ? "rounded-b-none" : ""
                }`}
              >
                <div className="flex items-center ">
                  <img
                    src={`https://via.placeholder.com/100?text=${utility.name}`} // Placeholder for images
                    alt={utility.name}
                    className="w-[44px] h-[44px] object-cover mr-3 rounded-[4px]"
                  />
                  <div>
                    <p className="font-semibold text-[16px]">{utility.name}</p>
                    <p className="text-[12px] text-[#4E5A6B]">
                      ${utility.price}.00 &#x2022; Valid {utility.valid}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="flex bg-[#F5F5F5] items-center">
                    <input
                      type="checkbox"
                      className={`toggle rounded-full bg-[#98A0AC] hover:bg-[#8b9199] ${
                        selectedUtilityIds.includes(utility.id)
                          ? "bg-green-500 [--tglbg:#EEF9EE]"
                          : "bg-[#98A0AC] [--tglbg:#E4E8EE]"
                      }`}
                      checked={selectedUtilityIds.includes(utility.id)}
                      onChange={() => handleToggle(utility.id)}
                    />
                  </label>
                </div>
              </div>
            </div>
          ))
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

export default Utilities;
