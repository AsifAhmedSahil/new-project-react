import useWallpaperStore from "#store/wallpaper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

// Hover effect: font-weight + scale + tilt + stagger + dynamic color + glow
const setupTextHover = (container, type, textColor, accentColor) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHT[type];

  const animateLetter = (letter, weight, delay = 0) => {
    gsap.to(letter, {
      duration: 0.3,
      delay,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      scale: 1.05,
      rotation: gsap.utils.random(-3, 3),
      y: -2,
      color: accentColor,
      textShadow: `0px 0px 6px ${accentColor}80`, // subtle glow
    });
  };

  const resetLetter = (letter, delay = 0) => {
    gsap.to(letter, {
      duration: 0.3,
      delay,
      fontVariationSettings: `'wght' ${base}`,
      scale: 1,
      rotation: 0,
      y: 0,
      color: textColor, // reset to original textColor
      textShadow: "0px 0px 0px transparent",
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter, i) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 15000);

      animateLetter(letter, min + (max - min) * intensity, i * 0.02);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter, i) => resetLetter(letter, i * 0.02));
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const { current: wallpaper } = useWallpaperStore();

  const darkWallpapers = [
    "wallpaper-1",
    "wallpaper-2",
    "wallpaper-4",
    "wallpaper-6",
    "wallpaper-3",
    "wallpaper-8",
  ];
  const isDarkWallpaper = darkWallpapers.some((wp) => wallpaper.includes(wp));
  const textColor = isDarkWallpaper ? "white" : "black";

  // Dynamic hover accent color
  const accentColor = isDarkWallpaper ? "#00ffff" : "#ff6600";

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title", textColor, accentColor);
    const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle", textColor, accentColor);
     const taglineCleanup = setupTextHover(taglineRef.current, "subtitle", textColor, accentColor);

    return () => {
      subtitleCleanup();
      titleCleanup();
      taglineCleanup()
    };
  }, [textColor, accentColor]);

  const renderText = (text, className, baseWeight = 400) =>
    [...text].map((char, i) => (
      <span
        key={i}
        className={className}
        style={{
          fontVariationSettings: `'wght' ${baseWeight}`,
          color: textColor,
          display: "inline-block",
          cursor: "default",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Sahil! ", "text-4xl font-georama", 100)}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Software Engineer", "text-8xl font-georama italic", 400)}
      </h1>

      <p ref={taglineRef} className="text-4xl font-georama mt-2  italic">
        {renderText(
          "Turning Ideas into Code & Building Full-Stack Web Apps That Inspire",
          "text-3xl  font-bold",
          100
        )}
      </p>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
