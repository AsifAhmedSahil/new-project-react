import { create } from "zustand";

const wallpapers = [
  "/images/wallpaper-1.png",
  "/images/wallpaper-2.png",
  "/images/wallpaper-3.jpg",
  "/images/wallpaper-4.jpg",
  "/images/wallpaper-5.jpg",
  "/images/wallpaper-6.jpg",
  "/images/wallpaper-8.jpg",
  "/images/wallpaper-9.jpg",
  "/images/wallpaper-10.jpg",
  
];

const defaultWallpaper = wallpapers[0];

const useWallpaperStore = create((set) => ({
  current: localStorage.getItem("wallpaper") || defaultWallpaper,
  wallpapers,
  setWallpaper: (wallpaper) => {
    document.documentElement.style.setProperty("--wallpaper", `url(${wallpaper})`);
    localStorage.setItem("wallpaper", wallpaper);
    set({ current: wallpaper });
  },
}));

// Initial apply
document.documentElement.style.setProperty(
  "--wallpaper",
  `url(${localStorage.getItem("wallpaper") || defaultWallpaper})`
);

export default useWallpaperStore;
