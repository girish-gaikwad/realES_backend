import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";

import { Bath, Bed, House, Plus, X } from "lucide-react";
import React, { useState } from "react";
import PricingComponent from "../pages/popups/pricing/pricing";
import Aminities from "../pages/popups/aminities/aminities";
import Utilities from "../pages/popups/utlities/utilities";
import Details from "../pages/popups/details/details";
import usePopupStore from "../zustand/popupStore";
// Sample components for modal content

function Card({ card, key }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedCard,individualEstate,setIndividualEstate,isModalOpen,setIsModalOpen,selectedOption, setSelectedCard, setSelectedOption, deleteCard } =
  usePopupStore();


  const handleDropdownClick = (option,id) => {
    setSelectedCard(id);
    setIndividualEstate();
    
    setSelectedOption(option); // Set the clicked option
    setIsOpen(false); // Close the dropdown
    setIsModalOpen(true); // Open the modal
  };
  // console.log(individualEstate);
  
  const handleClick = () => (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen((prev) => !prev);
  };


  const deletecard = (userId, estateId) => {
    // Call the deleteCard function from the store
    deleteCard(card.id,userId, estateId); // Remove the card from the Zustand state
  };

  // Function to render the correct component based on selected option
  const renderModalContent = () => {
    switch (selectedOption) {
      case "details":
      case "Discount":
      case "Remove Component":
        return <Details />;
      case "Pricing Component":
        return <PricingComponent />;
      case "Amenities":
        return <Aminities />;
      case "Utilities":
        return <Utilities />;
      default:
        return null;
    }
  };

  return (
    <div className="card  p-3 shadow-md border">
      <div className="w-full h-[50%] relative">
        <img
          onClick={() => handleDropdownClick("details",card.id)}
          src="/images/interior.png"
          className="object-cover rounded-md"
          alt=""
        />
        <div           onClick={() => deletecard(card.user_id, card.estate_id)} className="w-[26px] h-[26px] rounded-full bg-[#F5F7FA] absolute top-2 right-2 flex justify-center items-center">
          <img src="/images/trash.svg" alt="" />
        </div>
      </div>
      <div className="w-full h-[50%]">
        <p className="text-[14px] font-semibold text-black flex justify-between mt-2">
          {card.estate.name}
          <span>$ {card.estate.avg_price}</span>
        </p>

        <p className="text-[12px] text-[#98A0AC] flex justify-between mt-2">
          {card.estate.address} &#x2022; {card.estate.sqft} Sq.Ft
        </p>

        <div className="flex justify-between mt-2 text-[#98A0AC] text-[14px]">
          <span className="flex justify-center items-center gap-1">
            <Bed size={16} />
            {card.estate.bed}
          </span>
          &#x2022;
          <span className="flex justify-center items-center gap-1">
            <Bath size={16} /> {card.estate.bathtub}
          </span>
          &#x2022;
          <span className="flex justify-center items-center gap-1">
            <House size={16} />
            {card.estate.bhk} BHK
          </span>
        </div>

        <div className=" flex justify-center ">
          <div>
            <Popper
              sx={{ zIndex: 1200 }}
              open={isOpen}
              anchorEl={anchorEl}
              placement="right"
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <ul
                      tabIndex={0}
                      className={` rounded-[4px]  bg-white z-50 font-medium w-44 p-2 pt-2 shadow text-[12px] text-[#4E5A6B] `}
                    >
                      <p
                        className="text-start hover:bg-gray-200 py-1 px-3 rounded-md"
                        onClick={() => handleDropdownClick("Pricing Component",card.id)}
                      >
                        Add Pricing Component
                      </p>
                      <div className="divider m-0"></div>
                      <p
                        className="text-start hover:bg-gray-200 py-1 px-3 rounded-md"
                        onClick={() => handleDropdownClick("Amenities",card.id)}
                      >
                        Add Amenities
                      </p>
                      <div className="divider m-0"></div>
                      <p
                        className="text-start hover:bg-gray-200 py-1 px-3 rounded-md"
                        onClick={() => handleDropdownClick("Utilities",card.id)}
                      >
                        Add Utilities
                      </p>
                      <div className="divider m-0"></div>
                      <p
                        className="text-start hover:bg-gray-200 py-1 px-3 rounded-md"
                        onClick={() => handleDropdownClick("Discount",card.id)}
                      >
                        Add Discount
                      </p>
                      <div className="divider m-0"></div>
                      <p
                        className="text-start hover:bg-gray-200 py-1 px-3 rounded-md"
                        onClick={() => handleDropdownClick("Remove Component",card.id)}
                      >
                        Remove Component
                      </p>
                    </ul>
                  </Paper>
                </Fade>
              )}
            </Popper>

            <div className=" flex justify-center items-center gap-1 pt-1" item>
              <Plus size={16} color="#5078E1" className=" size-5" />
              <button
                className="text-[#5078E1] font-nunito  text-[14px] "
                onClick={handleClick()}
              >
                Custom
              </button>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0  text-black flex items-center justify-center z-50">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-[#686767] opacity-50"
                onClick={() => setIsModalOpen(false)}
              ></div>

              {/* Modal Content */}
              <div className="relative bg-white rounded-[4px] z-10">
                <div className="modal-header flex justify-between items-center p-4  border-b ">
                  {selectedOption === "Pricing Component" ? (
                    <h1 className="font-bold text-[16px] text-black">
                      Pricing Table{" "}
                    </h1>
                  ) : (
                    <h1 className=" font-bold text-[16px] text-black">
                      Add {selectedOption}
                    </h1>
                  )}
                  <button
                    className="text-gray-500"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X className="font-thin text-[#7C8594]" />
                  </button>
                </div>

                <div className="modal-body m-3 mt-4">
                  {renderModalContent()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
