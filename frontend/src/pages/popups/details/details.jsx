import React from "react";
import Detailpart from "../../../components/detailspart";
import usePopupStore from "../../../zustand/popupStore"
import Discount from "../discount/discount";
import Remove from "../removeComponent/remove";
import Alldetails from "./alldetails";
function Details() {
  const {  selectedOption} = usePopupStore(); // Fetching the value from Zustand store
  
  return (
    
    <div className="w-[888px] h-[580px] flex ">
      

      <Detailpart/>


{/* <Discount/> */}
      {selectedOption === "Discount" ? <Discount /> : 
      selectedOption === "details" ? <Alldetails/> : 
      selectedOption === "Remove Component" ? <Remove/>: 
      <p>Error while loading details</p>
      }
    </div>
  );
}

export default Details;
