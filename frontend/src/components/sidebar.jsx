import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import dashboard from "/images/dashboard.svg";
import lead from "/images/Leads.svg";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative w-[72.5px]">
      <div
        className={`bg-[#333333]  p-3 text-black absolute top-0 bottom-0 left-0 transition-all  duration-300 flex flex-col  gap-4 ${
          isExpanded ? "w-[272px] " : "w-[72.5px] items-center "
        }`}
      >
        <div className=" w-full flex flex-col justify-center px-3 items-center hover:cursor-pointer mt-2">
          {isExpanded ? (
            <p
              onClick={toggleSidebar}
              className="text-white text-[12px] t flex  justify-between items-center w-full"
            >
              Property Manager For Start up{" "}
              <div className="w-[24px] h-[24px] bg-[#5078E1] flex justify-center items-center rounded-full ">
                <ChevronLeft className="text-white size-5" />
              </div>
            </p>
          ) : (
            <div
              onClick={toggleSidebar}
              className="w-[24px] h-[24px] bg-[#5078E1] flex justify-center items-center rounded-full "
            >
              <ChevronRight className="text-white size-5" />
            </div>
          )}
          <div className="divider mt-3 mb-0"></div>
        </div>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src={dashboard} alt="Dashboard Icon" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  Dashboard
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/Components"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/customer.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  Components
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/Owner"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/Icon.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  Owner
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/Owner"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src={lead} alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  Owner
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/tag"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/tag.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  tag
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/setting.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  setting
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/cloude"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/cloude.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  cloude
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/report"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img
                  src="/images/report.png"
                  alt=""
                  className="w-[20px] h-[20px] filter invert"
                />{" "}
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  report
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/folder"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/folder.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  folder
                </p>
              )}{" "}
            </>
          )}
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) =>
            `flex items-center gap-3 ${isExpanded ? "  px-2" : ""} `
          }
        >
          {({ isActive }) => (
            <>
              <div
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${
                  isActive ? "bg-[#5078E1]" : ""
                }`}
              >
                <img src="/images/message.svg" alt="" />
              </div>
              {/* Render the text only if the sidebar is expanded */}
              {isExpanded && (
                <p
                  className={`font-nunito text-[14px] ${
                    isActive ? "text-[#FFFFFF] font-semibold" : "text-[#C1C5CB]"
                  }`}
                >
                  message
                </p>
              )}{" "}
            </>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
