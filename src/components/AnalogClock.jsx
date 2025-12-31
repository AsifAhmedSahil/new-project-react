'use client'
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const AnalogClock = ({
  bgImage = "/images/clock-bg.png",
}) => {
  const [time, setTime] = useState(new Date());
  const clockRef = useRef(null);

  /* ---- Time ---- */
  useEffect(() => {
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  /* ---- Draggable ---- */
  useEffect(() => {
    if (!clockRef.current) return;

    const [instance] = Draggable.create(clockRef.current, {
      type: "x,y",
      bounds: window, // screen er baire jabe na
      inertia: true,
      cursor: "grab",
      activeCursor: "grabbing",
    });

    return () => instance.kill();
  }, []);

  const s = time.getSeconds();
  const m = time.getMinutes();
  const h = time.getHours();

  const secondDeg = s * 6;
  const minuteDeg = m * 6 + s * 0.1;
  const hourDeg = (h % 12) * 30 + m * 0.5;

  return (
    <div
      ref={clockRef}
      className="absolute top-20 right-10 w-48 h-48 rounded-full bg-zinc-900 shadow-2xl flex items-center justify-center select-none"
    >
      {/* OUTER BEZEL */}
      <div className="absolute inset-1 rounded-full bg-black/70" />

      {/* INNER FACE */}
      <div className="relative w-44 h-44 rounded-full overflow-hidden">
        {/* BG IMAGE */}
        <img
          src={bgImage}
          alt="clock bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* NUMBER RING */}
        <div className="absolute inset-5 top-[-10px] rounded-full pointer-events-none">
          {[...Array(12)].map((_, i) => {
            const angle = (i + 1) * 30;
            return (
              <span
                key={i}
                style={{
                  transform: `rotate(${angle}deg) translateY(-60px) rotate(-${angle}deg)`,
                }}
                className="absolute left-1/2 top-1/2 text-white text-xs font-semibold"
              >
                {i + 1}
              </span>
            );
          })}
        </div>

        {/* HOUR HAND */}
        <div
          style={{ transform: `rotate(${hourDeg}deg)` }}
          className="absolute w-1.5 h-8 bg-white rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2"
        />

        {/* MINUTE HAND */}
        <div
          style={{ transform: `rotate(${minuteDeg}deg)` }}
          className="absolute w-1 h-11 bg-white/90 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2"
        />

        {/* SECOND HAND */}
        <div
          style={{ transform: `rotate(${secondDeg}deg)` }}
          className="absolute w-[1px] h-14 bg-red-500 origin-bottom bottom-1/2 left-1/2 -translate-x-1/2"
        />

        {/* CENTER DOT */}
        <div className="absolute w-2.5 h-2.5 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default AnalogClock;
