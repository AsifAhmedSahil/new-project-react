import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = ({dockRefs}) => {
  const { windows } = useWindowStore();

  const data = windows.imgfile?.data;
  if (!data) return null;

  

  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header" className="flex items-center justify-between">
        <WindowControls target="imgfile" dockRefs={dockRefs} />
        <h2 className="text-gray-700 text-sm font-medium">{name}</h2>
      </div>

      <div className="p-5 bg-white">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile",{ width : "50rem", height : "45rem" });

export default ImageWindow;
