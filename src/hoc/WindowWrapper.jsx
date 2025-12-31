import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

/**
 * WindowWrapper: Wraps a component into draggable, maximizable, focusable window.
 * @param {React.Component} Component 
 * @param {string} windowKey 
 * @param {Object} options - default width/height
 */
const WindowWrapper = (Component, windowKey, options = {}) => {
  const { width = "50rem", height = "40rem" } = options;

  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const {
      isOpen,
      isMinimized,
      isMaximized,
      zIndex,
    } = windows[windowKey] || {};

    const ref = useRef(null);
    const dragInstance = useRef(null);

    /* ---------- GSAP Open Animation ---------- */
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    /* ---------- Draggable ---------- */
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
        ignore: "input, textarea, button, select",
      });

      dragInstance.current = instance;

      return () => instance.kill();
    }, []);

    /* ---------- Display ---------- */
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized]);

    /* ---------- Size Handling ---------- */
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      if (isMaximized) {
        el.style.top = "0";
        el.style.left = "0";
        el.style.width = "100vw";
        el.style.height = "100vh";

        dragInstance.current?.disable();
      } else {
        el.style.width = width;
        el.style.height = height;

        dragInstance.current?.enable();
      }
    }, [isMaximized, width, height]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `windowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
