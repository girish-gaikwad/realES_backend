import { Bell, BellDot, ChevronDown, LogOut } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1C1C1C] text-white   flex items-center justify-between px-4 py-2 h-[54px] shadow-lg ">
      <div className="flex h-full justify-center max-w-[450px] items-center  ">
        <img src="images/logo2.png" className="w-40" alt="" />

        <div className="w-[10px] ml-3 h-[50%] border-l border-[#5D5D5D]"></div>

        <p className="font-nunito text-[10px]">PROPERTY MANAGEMENT SOLUTIONS</p>
      </div>

      <div>
        <label className="input bg-[#5D5D5D] text-white w-[350px] text-[14px] h-[32px] p-2 rounded font-nunito flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5  opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      <div className="flex h-full w-[350px] justify-end items-center  ">
        <div className="relative">
          <span className="w-2 h-2 rounded-full left-2  bg-[#5078e1] absolute"></span>
          {/* <Bell className="size-5" /> */}
    <img src="/images/bell.svg" className="w-[15px] h-[20px]" alt="" />
        </div>

        <div className="w-[10px] ml-3 h-[50%] border-l border-[#ffffff]"></div>

        <div className="relative flex gap-2 group">
  <div className="w-[32px] h-[32px] rounded-full">
    <img
      src="/images/man.png"
      className="w-full h-full rounded-full object-cover"
      alt="Profile"
    />
  </div>

  <div className="flex flex-col">
    <p className="font-nunito font-semibold text-white text-[12px]">
      Bala Ganesh
    </p>
    <p className="font-nunito font-semibold text-white text-[10px]">
      Super Admin
    </p>
  </div>

  <div className="flex justify-center items-center transition-transform duration-300 group-hover:rotate-180">
    <ChevronDown className="size-5" />

  </div>

  {/* Hidden div that appears on hover */}
  <div className="absolute top-12 right-1 bg-white p-2  z-1  rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<div className="flex justify-around items-center mb-3 ">

  <div className="w-14 h-14 me-3 rounded-full">
    <img
      src="/images/man.png"
      className="w-full h-full rounded-full object-cover"
      alt="Profile"
      />
  </div>

    <div className="flex flex-col">

    <p className="text-black text-sm font-semibold font-nunito" >Bala Ganesh</p>
    <p className="text-black text-xs font-nunito ">balaganesh@gmail.com</p>
    </div>
  


      </div>
  <button className="btn btn-error btn-outline p-0 m-0 w-full "><LogOut />Logout</button>

  </div>
</div>





        
      </div>
    </nav>
  );
};

export default Navbar;


{/* h-[calc(100%-40px)] */}


  {/* <div className="modal-footer  flex justify-end">
                  <button
                    
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X/>
                  </button>
                </div> */}