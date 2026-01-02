'use client'

import { WindowControls } from "#components";
import { photosLinks, galleryByTab } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";
import React, { useState } from "react";

const Photos = ({ dockRefs }) => {
  const { openWindow } = useWindowStore();
  const [currentTab, setCurrentTab] = useState(1); // default Library

  return (
    <div className="flex h-full w-full flex-col overflow-hidden max-h-screen">
      {/* Header */}
      <div id="window-header" className="flex items-center justify-between h-10 px-4 py-2 border-b shrink-0">
        <WindowControls target="photos" dockRefs={dockRefs} />
        <div className="flex items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 w-full overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-1/4 flex-none bg-gray-50 border-r border-gray-200 flex flex-col p-5">
          <h2 className="text-xs font-medium text-gray-400 mb-1">Photos</h2>

          <ul className="flex flex-col gap-2">
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setCurrentTab(id)}
                className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors ${
                  currentTab === id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100"
                }`}
              >
                <img src={icon} alt={title} className="w-5" />
                <p className="text-sm font-medium">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        <div className="gallery w-3/4 p-5 overflow-y-auto scrollbar-hide">
          <div className="columns-3 gap-4">
            {galleryByTab[currentTab]?.map(({ id, img, name }) => (
              <div key={id} className="mb-4 break-inside-avoid rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  className="w-full object-cover rounded-lg cursor-pointer"
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name,
                      icon: "/images/image.png",
                      kind: "file",
                      fileType: "img",
                      imageUrl: img,
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Responsive wrapper height
const PhotoWrapper = (() => {
  const getHeight = () => {
    if (typeof window !== "undefined") {
      return window.innerHeight < 800 ? `${window.innerHeight * 0.8}px` : "48rem";
    }
    return "48rem";
  };

  return WindowWrapper(Photos, "photos", {
    width: "50rem",
    height: getHeight(),
  });
})();

export default PhotoWrapper;
