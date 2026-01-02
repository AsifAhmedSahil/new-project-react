'use client'

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

const LinkedInWindow = ({ dockRefs }) => {
  const linkedInUrl = "https://www.linkedin.com/in/asif-ahmed-sahil";

  return (
    <div className="flex h-full w-full flex-col overflow-hidden max-h-screen lg:max-h-full">
      {/* Header */}
      <div id="window-header" className="flex items-center justify-between px-4 py-2 border-b h-10 shrink-0">
        <WindowControls target="linkedin" dockRefs={dockRefs} />
        <h2 className="text-sm font-semibold">LinkedIn Profile</h2>
      </div>

      {/* Body */}
      <div className="relative flex-1 p-4 bg-white flex justify-center items-center overflow-hidden">
        <div className="w-full  h-full max-h-[85%]  overflow-hidden rounded">
          <img
            src="/images/linkedin-snapshot.png"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Mini Browser Overlay */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[95%] text-black rounded flex items-center justify-between gap-2 px-2 py-1 shadow-md bg-white/80">
          <div className="flex gap-4">
            <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            <ChevronRight className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            <Home className="w-4 h-4 cursor-pointer hover:text-gray-300" />
          </div>

          <div className="flex items-center bg-black w-[50%] text-white text-xs px-2 py-0.5 rounded">
            <span className="mr-1 text-[10px]">🌐</span>
            <input
              type="text"
              value={linkedInUrl}
              readOnly
              className="bg-transparent flex-1 text-white text-xs focus:outline-none"
            />
          </div>

          <button
            onClick={() => window.open(linkedInUrl, "_blank")}
            className="bg-blue-600 text-white text-xs px-3 py-0.5 rounded hover:bg-blue-700 transition"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

// Responsive wrapper height
const LinkedInWindowWrapper = (() => {
  const getHeight = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight < 800 ? `${window.innerHeight * 0.8}px` : "44rem";
    }
    return "44rem";
  };

  return WindowWrapper(LinkedInWindow, "linkedin", {
    width: "50rem",
    height: getHeight(),
  });
})();

export default LinkedInWindowWrapper;
