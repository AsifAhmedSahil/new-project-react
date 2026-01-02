'use client'

import React, { useEffect, useRef, useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = ({ dockRefs }) => {
  const [scale, setScale] = useState(1);
  const scrollRef = useRef(null);

  const zoomIn = () => setScale((s) => Math.min(s + 0.1, 2));
  const zoomOut = () => setScale((s) => Math.max(s - 0.1, 0.6));

  const allowXScroll = scale > 1;

  // Center PDF horizontally on zoom
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const centerX = (el.scrollWidth - el.clientWidth) / 2;
    el.scrollTo({ left: centerX });
  }, [scale]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden max-h-screen lg:max-h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b shrink-0 h-10">
        <div className="flex items-center gap-2">
          <WindowControls target="resume" dockRefs={dockRefs} />
          <h2 className="text-sm font-medium">Resume.pdf</h2>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={zoomOut} className="p-1 rounded hover:bg-gray-200" title="Zoom out">
            −
          </button>
          <button onClick={zoomIn} className="p-1 rounded hover:bg-gray-200" title="Zoom in">
            +
          </button>

          <a href="files/resume.pdf" download title="Download resume" className="p-1 rounded hover:bg-gray-200">
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* PDF Body */}
      <div
        ref={scrollRef}
        className={`
          flex-1
          max-h-[calc(100vh-2.5rem)]
          overflow-y-auto
          ${allowXScroll ? "overflow-x-auto" : "overflow-x-hidden"}
          scrollbar-hide
          bg-gray-100
          flex
          justify-center
        `}
      >
        <div className="px-4 py-4 w-fit">
          <Document file="files/resume.pdf">
            <Page
              pageNumber={1}
              scale={scale}
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        </div>
      </div>
    </div>
  );
};

// 👇 Responsive WindowWrapper height
const ResumeWindow = (() => {
  // Calculate responsive height
  const getWrapperHeight = () => {
    if (typeof window !== "undefined") {
      // small screens < 800px height → 80% viewport
      return window.innerHeight < 800 ? `${window.innerHeight * 0.9}px` : "52rem";
    }
    return "52rem"; // SSR fallback
  };

  return WindowWrapper(Resume, "resume", {
    width: "38rem",
    height: getWrapperHeight(),
  });
})();

export default ResumeWindow;
