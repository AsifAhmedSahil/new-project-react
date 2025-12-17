import React from "react";
import { useRef } from "react";

const renderText = (text,className,baseWeight=400) =>{
    return [...text].map((char,i)=>(
        <span key={i} className={className} style={{fontVariationSettings: `"whgt ${baseWeight}`}}>
            {
                char === " "? '\u00A0' :char
            }

        </span>
    ))

}

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  return (
    <section id="welcome">
      <p ref={subtitleRef}>Hey, I'm Sahil! Welcome to my</p>
      <h1 ref={titleRef}>portfolio</h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tabled screens only.</p>
      </div> 
    </section>
  );
};

export default Welcome;
