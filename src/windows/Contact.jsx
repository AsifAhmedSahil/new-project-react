import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = ({dockRefs}) => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" dockRefs={dockRefs} />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">

        <img src="/images/sahil.jpg" alt="sahi" className="w-20 rounded-full" />

        <h3>Let's Connect</h3>
        <p>Got an idea, a challenge, or some code to improve?. I'm in.</p>
        <p>Contact: asifahmedsahil.007@gmail.com</p>
        <p>Phone: +880 <span className="font-bold">1577179858</span></p>

        <ul>
            {
                socials.map(({id,bg,link,icon,text})=>(
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>

                    </li>

                ))
            }
        </ul>

      </div>
    </>
  );
};

const ContactWrapper = WindowWrapper(Contact, "contact");

export default ContactWrapper;
