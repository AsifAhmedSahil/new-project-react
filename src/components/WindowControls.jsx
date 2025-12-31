import useWindowStore from "#store/window";
import gsap from "gsap";
import {  Maximize2, Minus, MinusCircle, X } from "lucide-react";

const WindowControls = ({ target, dockRefs }) => {
  const { closeWindow, maximizeWindow } = useWindowStore();

  const handleMinimize = () => {
    const winEl = document.getElementById(target);
    const iconEl = dockRefs.current[target]; // dock icon reference
    if (!winEl || !iconEl) return;

    const winRect = winEl.getBoundingClientRect();
    const dockRect = iconEl.getBoundingClientRect();

    const dx = dockRect.left + dockRect.width / 2 - (winRect.left + winRect.width / 2);
    const dy = dockRect.top + dockRect.height / 2 - (winRect.top + winRect.height / 2);

    gsap.to(winEl, {
      duration: 0.5,
      scale: 0.2,
      x: dx,
      y: dy,
      ease: "power2.inOut",
      onComplete: () => {
        useWindowStore.getState().minimizeWindowStateOnly(target);
        gsap.set(winEl, { scale: 1, x: 0, y: 0 }); // reset next open
      }
    });
  };

  return (
    <div id="window-controls" className="flex gap-2">
      {/* Close */}
      <div className="relative w-3.5 h-3.5 rounded-full bg-[#ff6157] cursor-pointer group" onClick={() => closeWindow(target)}>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-black text-xs font-bold">
          <X size={12}/>
        </span>
      </div>

      {/* Minimize */}
      <div className="relative w-3.5 h-3.5 rounded-full bg-[#ffc030] cursor-pointer group" onClick={handleMinimize}>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-black text-xs font-bold">
          <Minus />
        </span>
      </div>

      {/* Maximize */}
      <div className="relative w-3.5 h-3.5 rounded-full bg-[#2acb42] cursor-pointer group" onClick={() => maximizeWindow(target)}>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-black text-xs font-bold">
          <Maximize2 size={12} />
        </span>
      </div>
    </div>
  );
};

export default WindowControls;
