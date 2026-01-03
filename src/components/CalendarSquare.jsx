'use client';

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { CalendarDays } from "lucide-react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function DesktopCalendar3D() {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null);

  // Update date every minute
  useEffect(() => {
    const i = setInterval(() => setDate(new Date()), 60 * 1000);
    return () => clearInterval(i);
  }, []);

  // GSAP Draggable + 3D tilt effect
  useLayoutEffect(() => {
    const el = calendarRef.current;
    if (!el) return;

    const instance = Draggable.create(el, {
      type: "x,y",
      edgeResistance: 0.65,
      inertia: true,
      bounds: "body",
      cursor: "grab",
      activeCursor: "grabbing",
      onPress() {
        gsap.to(el, { scale: 1.05 });
      },
      onRelease() {
        gsap.to(el, { scale: 1 });
      },
      onDrag() {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = window.event.clientX;
        const mouseY = window.event.clientY;

        const rotateY = ((mouseX - centerX) / rect.width) * 20; // tilt X
        const rotateX = ((centerY - mouseY) / rect.height) * 20; // tilt Y

        gsap.to(el, { rotationY: rotateY, rotationX: rotateX, transformPerspective: 800, transformOrigin: "center" });
      },
    })[0];

    return () => instance.kill();
  }, []);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const dayNum = date.getDate();

  return (
    <div
      ref={calendarRef}
      className="relative w-36 rounded-3xl overflow-hidden select-none cursor-grab"
      style={{
        perspective: 1000,
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 15px 40px rgba(255,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)",
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* RED WIRES */}
      <div
        className="absolute -top-3 left-6 w-2 h-6 rounded-full"
        style={{
          background: "linear-gradient(to bottom, #ff6b6b, #c90000)",
          boxShadow: "inset 0 2px 2px rgba(0,0,0,0.2)",
        }}
      />
      <div
        className="absolute -top-3 right-6 w-2 h-6 rounded-full"
        style={{
          background: "linear-gradient(to bottom, #ff6b6b, #c90000)",
          boxShadow: "inset 0 2px 2px rgba(0,0,0,0.2)",
        }}
      />

      {/* HEADER */}
      <div
        className="flex items-center justify-center gap-2 py-2 text-white rounded-t-2xl"
        style={{
          background: "linear-gradient(145deg, #ff4d4d, #ff1a1a)",
          boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.2)",
        }}
      >
        <CalendarDays size={16} />
        <span className="text-sm font-semibold uppercase">{month}</span>
      </div>

      {/* BODY */}
      <div className="flex flex-col items-center justify-center py-5">
        {/* Floating glass number */}
        <span
          className="text-5xl font-bold leading-none"
          style={{
            textShadow:
              "0 4px 8px rgba(0,0,0,0.3), 0 0 10px rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.2)",
            padding: "0.5rem 1.2rem",
            borderRadius: "1.2rem",
            backdropFilter: "blur(6px)",
            color: "white",
            transform: "translateZ(20px)",
          }}
        >
          {dayNum}
        </span>
        <span
          className="mt-1 text-sm font-bold uppercase"
          style={{
            color: "#ff9999",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            transform: "translateZ(10px)",
          }}
        >
          {day}
        </span>
      </div>
    </div>
  );
}
