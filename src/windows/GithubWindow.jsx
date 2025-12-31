'use client'

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
// import useWindowStore from "#store/window";
import { Home, ChevronLeft, ChevronRight } from "lucide-react"; // icons

const GitHubWindow = ({ dockRefs }) => {
//   const { closeWindow } = useWindowStore();
  

  const githubUrl = "https://github.com/AsifAhmedSahil";

  return (
    <>
      <div id="window-header">
        <WindowControls target="github" dockRefs={dockRefs} />
        <h2 className="text-sm font-semibold">GitHub Profile</h2>
      </div>

      <div
        className="relative p-4 bg-white h-full flex justify-center items-center"
     
      >
  <div className="w-[85%] h-full overflow-hidden rounded">
  <img src="/images/github-snapshot.png" className="w-full h-full object-contain" />
</div>



        {/* Mini Browser Overlay */}
      
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[95%] text-black rounded flex items-center justify-between gap-2 px-2 py-1 shadow-md bg-white/80">
            <div className="flex gap-4">
              <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <ChevronRight className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <Home className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            </div>

            <div className="flex items-center bg-black w-[50%] text-white text-xs px-2 py-0.5 rounded">
              <span className="mr-1 text-[10px]">🌐</span>
              <input
                type="text"
                value={githubUrl}
                readOnly
                className="bg-transparent flex-1 text-white text-xs focus:outline-none"
              />
            </div>

            <button
              onClick={() => window.open(githubUrl, "_blank")}
              className="bg-blue-600 text-white text-xs px-3 py-0.5 rounded hover:bg-blue-700 transition"
            >
              Open
            </button>
          </div>
  
      </div>
    </>
  );
};

const GitHubWindowWrapper = WindowWrapper(GitHubWindow, "github", {
  width: "50rem",
  height: "40rem",
});

export default GitHubWindowWrapper;
