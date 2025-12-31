import AnalogClock from "#components/AnalogClock";
import CalendarSquare from "#components/CalendarSquare";

const DesktopWidgets = () => {
  return (
    <>
      {/* Clock – top left */}
      <div className="absolute top-5 right-5">
        <AnalogClock />
      </div>

      {/* Calendar – below clock */}
      <div className="absolute top-[320px] right-20">
        <CalendarSquare />
      </div>
    </>
  );
};

export default DesktopWidgets;
