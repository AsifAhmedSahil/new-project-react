import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

const Resume = ({ dockRefs }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {/* Header */}
      <div
        id="window-header"
        className="flex items-center justify-between px-4 py-2 border-b shrink-0"
      >
        <WindowControls target="resume" dockRefs={dockRefs} />
        <h2 className="text-sm font-medium">Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          title="Download resume"
          className="cursor-pointer"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* PDF Body */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide bg-gray-100">
        <div className="mx-auto w-full max-w-[38rem] px-2">
          <Document file="files/resume.pdf">
            <Page
              pageNumber={1}
              className="!w-full !max-w-full !h-auto"
              renderTextLayer
              renderAnnotationLayer
            />
          </Document>
        </div>
      </div>
    </div>
  );
};


const ResumeWindow = WindowWrapper(Resume, "resume", {
  width: "38rem",
  height: "52rem",
});

export default ResumeWindow;
