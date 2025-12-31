import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWallpaperStore from "#store/wallpaper";

const WallpaperWindow = ({ dockRefs }) => {
  const { wallpapers, setWallpaper, current } = useWallpaperStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="wallpaper" dockRefs={dockRefs} />
        <p className="font-semibold text-sm">Change Wallpaper</p>
      </div>

      <div className="bg-white p-4">
        {/* grid 3 per row */}
        <div className="grid grid-cols-3 gap-4">
          {wallpapers.map((wp) => (
            <img
              key={wp}
              src={wp}
              onClick={() => setWallpaper(wp)}
              className={`w-full h-24 rounded-lg object-cover cursor-pointer
                ${current === wp ? "ring-2 ring-blue-500" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// Small window size for wallpapers
const WallpaperWindowWrapper = WindowWrapper(WallpaperWindow, "wallpaper", {
  width: "32rem",
  height: "28rem",
});

export default WallpaperWindowWrapper;
