'use client'
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { CalendarDays } from "lucide-react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const DesktopCalendar = () => {
  const [date, setDate] = useState(new Date());
  const calendarRef = useRef(null);
  const dragInstance = useRef(null);

  useEffect(() => {
    const i = setInterval(() => setDate(new Date()), 60 * 1000);
    return () => clearInterval(i);
  }, []);

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
    })[0];

    dragInstance.current = instance;

    return () => instance.kill();
  }, []);

  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const dayNum = date.getDate();

  return (
    <div
      ref={calendarRef}
      className="relative w-32 rounded-xl bg-white shadow-2xl overflow-hidden select-none cursor-grab"
    >
      {/* RED WIRES */}
      <div className="absolute -top-3 left-6 w-2 h-6 bg-red-500 rounded-full" />
      <div className="absolute -top-3 right-6 w-2 h-6 bg-red-500 rounded-full" />

      {/* HEADER */}
      <div className="bg-red-500 text-white flex items-center justify-center gap-2 py-2">
        <CalendarDays size={16} />
        <span className="text-sm font-semibold uppercase">{month}</span>
      </div>

      {/* BODY */}
      <div className="flex flex-col items-center justify-center py-5">
        <span className="text-4xl font-bold text-zinc-900 leading-none">
          {dayNum}
        </span>
        <span className="mt-1 text-sm font-bold text-red-700 uppercase">
          {day}
        </span>
      </div>
    </div>
  );
};

export default DesktopCalendar;
