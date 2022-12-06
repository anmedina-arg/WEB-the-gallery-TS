import "./App.css";

import React, { createRef, useRef, useState, useEffect } from "react";

import { Home } from "./pages/01-Home";
import { Expert } from "./pages/02-Expert";
import { TheApp } from "./pages/03-TheApp";
import { PathOfArt } from "./pages/04-PathOfArt";
import { Reward } from "./pages/05-Rewar";
import { Gallery } from "./pages/06-Gallery";
import { ThePad } from "./pages/07-ThePad";
import { Tr01 } from "./pages/01-Home";

export default function App() {
  const [active, setActive] = useState(0);
  const scrollRefs = useRef<any[]>([]);
  const navRefs = useRef<any[]>([]);

  const list = [
    { name: "Home", component: <Home /> },
    { name: "", component: <Tr01 /> },
    { name: "Experts", component: <Expert /> },
    { name: "The App", component: <TheApp /> },
    { name: "Path of art", component: <PathOfArt /> },
    { name: "Reward Claim", component: <Reward /> },
    { name: "My gallery", component: <Gallery /> },
    { name: "The pad", component: <ThePad /> },
  ];

  scrollRefs.current = [...Array.from(Array(list.length).keys())].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  console.log(scrollRefs);

  navRefs.current = [...Array.from(Array(list.length).keys())].map(
    (_, i) => navRefs.current[i] ?? createRef()
  );

  console.log(navRefs);

  const scrollTo = (index: number) => {
    scrollRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    setActive(index);
    navRefs.current[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  useEffect(() => {
    const scrollContainer = document.querySelector("nav");
    console.log(scrollContainer);
    if (scrollContainer === null) return;
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <div className="main">
      <div className="header">
        <div className="myMenu">
          {list.map((item, i) => (
            <span className="nav-item " key={i} ref={navRefs.current[i]}>
              <a
                href={`#s-${i}`}
                className={`nav-link ${active === i ? "text-danger" : ""}`}
                onClick={(e) => {
                  scrollTo(i);
                }}
              >
                {item.name}
              </a>
            </span>
          ))}
        </div>
      </div>
      <nav id="gallery" className="contenido">
        {list.map((item, i) => (
          <div id={`s-${i}`} ref={scrollRefs.current[i]} className="py-100">
            {item.component}
          </div>
        ))}
      </nav>
    </div>
  );
}
