import React, { useState } from "react";
import Types from "./sildes/types";
import usePopupStore from "../../../zustand/popupStore";
import { Info } from "lucide-react";
import Primary from "./sildes/primary";

function PricingComponent() {
  const { selectedType } = usePopupStore(); // Fetching the value from Zustand store
  const [revenueType, setRevenueType] = useState("lease");

  return (
    <div className="w-[484px] h-[515px] flex flex-col items-center gap-4">
      {selectedType !== "" ? (
        


         <Primary/>


        
      ) : (
        <Types />
      )}
    </div>
  );
}

export default PricingComponent;
