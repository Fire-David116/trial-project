"use client"
import { useState } from "react";
import Image from "next/image";
import buttonlog from "../style/buttonlogo.png";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [activeTab, setActiveTab] = useState(""); // Track active tab

    // Function to handle tab click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Set active tab
        setShowNav(false); // Hide the navigation menu after clicking a tab
    };

    return (
        <header className="flex items-center justify-between p-3 flex-wrap text-white bg-custom-color">
            <div className="lg:text-xl inline-flex items-center font-serif font-bold">
                {/* Use the imported logo image */}
                <img src="/images/logo.png" alt="Logo" className="h-42 w-152 ml-0 mr-0 lg:ml-20 lg:mr-0" />
            </div>
            <button
                onClick={() => setShowNav(!showNav)}
                type="button"
                className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
            >
                <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 -53 384 384"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                    <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                </svg>
            </button>

            <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto justify-center cursor-pointer font-[HankenGroteskRegular] mr-36">
                <div
                    className={
                        "lg:inline-flex lg:flex-row flex flex-col " +
                        (showNav ? "" : "hidden text-right")
                    }
                >
                    <a
                        className={
                            "lg:inline-flex lg:w-auto px-3 py-2 rounded font-[HankenGroteskRegular]" +
                            (activeTab === "Swap" ? " border-b-4 border-border-color text-border-color font-[HankenGroteskRegular]" : "") // Add border-bottom if the tab is active
                        }
                        style={{ fontSize: "0.9rem" }}
                        onClick={() => handleTabClick("Swap")} // Handle tab click
                    >
                        Swap
                    </a>
 
                    <a
                        className={
                            "lg:inline-flex lg:w-auto px-3 py-2 rounded font-[HankenGroteskRegular]" +
                            (activeTab === "Bridge" ? " border-b-4 border-border-color text-border-color font-[HankenGroteskRegular]" : "") // Add border-bottom if the tab is active
                        }
                        onClick={() => handleTabClick("Bridge")} // Handle tab click
                        style={{ fontSize: "0.9rem" }}
                    >
                        Bridge
                    </a>
                    <a
                        className={
                            "lg:inline-flex lg:w-auto px-3 py-2 rounded font-[HankenGroteskRegular]" +
                            (activeTab === "Dashboard" ? " border-b-4 border-border-color text-border-color font-[HankenGroteskRegular]" : "") // Add border-bottom if the tab is active
                        }
                        onClick={() => handleTabClick("Dashboard")} // Handle tab click
                        style={{ fontSize: "0.9rem" }}
                    >
                        Dashboard
                    </a>
                    <a
                        className={
                            "lg:inline-flex lg:w-auto px-3 py-2 rounded font-[HankenGroteskRegular]" +
                            (activeTab === "Analytics" ? " border-b-4 border-border-color text-border-color font-[HankenGroteskRegular]" : "") // Add border-bottom if the tab is active
                        }
                        onClick={() => handleTabClick("Analytics")} // Handle tab click
                        style={{ fontSize: "0.9rem" }}
                    >
                        Analytics
                    </a>
                </div>
            </div>
            <div className="sm:flex items-center ml-5" style={{ marginTop: "-3px" }}>
        <button
          className="flex items-center rounded-full py-1 px-1 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:from-orange-500 hover:to-orange-600 hover:bg-gradient-to-tr mt-[-38px] md:mt-[0px] ml-[270px] md:ml-[0px]"
          style={{ maxWidth: "170px" }} // Adjust the max width of the button
        >
          {/* Conditionally render button content based on screen size */}
          <div className="w-6 md:w-16 overflow-hidden border-solid border-dark dark:border-gray ">
            <Image
              style={{ height: "25px", width: "25px" }}
              src={buttonlog}
              alt="CodeBucks logo"
              className="w-full"
              priority
            />
          </div>
          {/* Render button text only on non-mobile devices */}
          <span className="hidden sm:inline ml-2">degentrades.lens</span>
        </button>
      </div>
        </header>
    );
};

export default Navbar;
