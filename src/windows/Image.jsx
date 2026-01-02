'use client'

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = ({ dockRefs }) => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;
  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden max-h-screen">
      {/* Header */}
      <div id="window-header" className="flex items-center justify-between h-10 px-4 py-2 border-b shrink-0">
        <WindowControls target="imgfile" dockRefs={dockRefs} />
        <h2 className="text-gray-700 text-sm font-medium">{name}</h2>
      </div>

      {/* Image Body */}
      <div className="flex-1 flex justify-center items-center p-5 overflow-y-auto scrollbar-hide bg-white">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        )}
      </div>
    </div>
  );
};

// Responsive wrapper height
const ImageWindow = (() => {
  const getHeight = () => {
    if (typeof window !== "undefined") {
      // small screens → 80% viewport, large screens → auto up to 80vh
      return window.innerHeight < 800 ? `${window.innerHeight * 0.85}px` : "auto";
    }
    return "45rem"; // SSR fallback
  };

  return WindowWrapper(Image, "imgfile", {
    width: "50rem",
    height: getHeight(),
  });
})();

export default ImageWindow;
