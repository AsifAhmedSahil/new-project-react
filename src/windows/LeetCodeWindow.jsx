'use client'

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";

import { Home, ChevronLeft, ChevronRight } from "lucide-react"; // icons

const LeetCodeWindow = ({ dockRefs }) => {

  

  const leetCodeUrl = "https://leetcode.com/u/asif_ahmed007";

  return (
    <>
      <div id="window-header">
        <WindowControls target="leetcode" dockRefs={dockRefs} />
        <h2 className="text-sm font-semibold">LeetCode Profile</h2>
      </div>

      <div
        className="relative p-4 bg-white h-full flex justify-center items-center"
    
      >
        {/* Snapshot */}
        <img
          src={"/images/leetcode-snapshot.png"}
          alt="LeetCode snapshot"
          className="max-w-full  rounded shadow-lg"
        />

        {/* Mini Browser Overlay */}
        {/* {hover && ( */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[95%]   text-black rounded flex items-center justify-between gap-2 px-2 py-1 shadow-md">
            
            {/* Navigation Arrows */}
            <div className="flex gap-4">

            <div className="flex gap-4">
            <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            <ChevronRight className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            </div>
                

            {/* Home Icon */}
            <div>

            <Home className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            </div>
            </div>

            {/* URL Bar */}
            <div className="flex items-center bg-black w-[50%] text-white text-xs px-2 py-0.5 rounded ">
  {/* Internet Icon */}
  <span className="mr-1 text-[10px]">🌐</span>
  
  {/* URL */}
  <input
    type="text"
    value={leetCodeUrl}
    readOnly
    className="bg-transparent flex-1 text-white text-xs focus:outline-none"
  />
</div>


            {/* Open Button */}
            <button
              onClick={() => window.open(leetCodeUrl, "_blank")}
              className="bg-blue-600 text-white text-xs px-3 py-0.5 rounded hover:bg-blue-700 transition"
            >
              Open
            </button>
          </div>
        {/* )} */}
      </div>
    </>
  );
};

// Window wrapper
const LeetCodeWindowWrapper = WindowWrapper(LeetCodeWindow, "leetcode", {
  width: "50rem",
  height: "36rem",
});

export default LeetCodeWindowWrapper;
