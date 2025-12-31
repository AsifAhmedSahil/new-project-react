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
    <>
      <div id="window-header">
        <WindowControls target="photos" dockRefs={dockRefs} />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full h-[80vh]">
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
        <div className="gallery w-3/4 p-5 overflow-y-auto">
          <div className="columns-3 gap-4">
            {galleryByTab[currentTab]?.map(({ id, img,name }) => (
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
    </>
  );
};

const PhotoWrapper = WindowWrapper(Photos, "photos",{ width : "50rem", height : "48rem" });

export default PhotoWrapper;
