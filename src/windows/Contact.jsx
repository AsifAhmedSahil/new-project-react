import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = ({dockRefs}) => {
  return (
    <>
      <div id="window-header" className="flex items-center justify-between p-2 border-b border-gray-300">
        <WindowControls target="contact" dockRefs={dockRefs} />
        <h2 className="text-sm font-semibold text-gray-800">Contact Me</h2>
      </div>

      <div className="p-5 flex flex-col items-center space-y-4">

        {/* Profile */}
        <img src="/images/sahil.jpg" alt="Sahil" className="w-24 h-24 object-contain rounded-full shadow-lg" />
        <h3 className="text-lg font-semibold text-gray-700">Let's Connect</h3>
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Got an idea, a challenge, or some code to improve? I'm in.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2 text-gray-700 text-sm">
          <p><span className="font-semibold">Email:</span> asifahmedsahil.007@gmail.com</p>
          <p><span className="font-semibold">Phone:</span> +880 <span className="font-bold">1577179858</span></p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-3 mt-4">
          {socials.map(({id,bg,link,icon,text}) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform"
              style={{backgroundColor: bg}}
              title={text}
            >
              <img src={icon} alt={text} className="w-5 h-5" />
              <span className="text-white text-xs font-medium">{text}</span>
            </a>
          ))}
        </div>
        <div className="w-full max-w-md flex flex-col gap-2 mt-4">
  <label className="text-sm font-medium text-gray-700">Tell me something...</label>
  <textarea
    rows={3}
    placeholder="Type your message here..."
    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button className="self-end bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition cursor-pointer">
    Send 
  </button>
</div>

      </div>
    </>
  );
};

const ContactWrapper = WindowWrapper(Contact, "contact", { width: "36rem", height: "38rem" });

export default ContactWrapper;
