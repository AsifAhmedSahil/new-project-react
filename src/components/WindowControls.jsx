import useWindowStore from "#store/window";
import gsap from "gsap";

const WindowControls = ({ target ,dockRefs }) => {
  const { closeWindow, maximizeWindow } = useWindowStore();
  console.log(target,dockRefs)
  console.log(closeWindow)

  const handleMinimize = () => {
    
    const winEl = document.getElementById(target);
    const iconEl = dockRefs.current[target]; // dock icon reference
    if (!winEl || !iconEl) return;

    const winRect = winEl.getBoundingClientRect();
    const dockRect = iconEl.getBoundingClientRect();

    const dx = dockRect.left + dockRect.width/2 - (winRect.left + winRect.width/2);
    const dy = dockRect.top + dockRect.height/2 - (winRect.top + winRect.height/2);

    gsap.to(winEl, {
      duration: 0.5,
      scale: 0.2,
      x: dx,
      y: dy,
      ease: "power2.inOut",
      onComplete: () => {
        // animation শেষে state update
        useWindowStore.getState().minimizeWindowStateOnly(target);
        gsap.set(winEl, { scale: 1, x: 0, y: 0 }); // reset next open
      }
    });
  };
  return (
    <div id="window-controls">
      <div className="close" onClick={()=>closeWindow(target)} />
      <div className="minimize" onClick={handleMinimize} />
      <div className="maximize" onClick={()=>maximizeWindow(target)} />
    </div>
  );
};

export default WindowControls;
