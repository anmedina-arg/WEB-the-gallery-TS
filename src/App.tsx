import "./App.css";

import React, { createRef, useRef, useState, useEffect } from "react";
import { Home, Home1 } from "./home/01-Home";

var scrolling = false;

export default function App() {
  const scrollRefs = useRef([]);
  const navRefs = useRef([]);

  const [active, setActive] = useState(0);

  const list = [
    { name: "Home1", component: <Home /> },
    { name: "Home2", component: <Home /> },
    { name: "Home3", component: <Home /> },
    { name: "Home4", component: <Home /> },
    { name: "Home5", component: <Home /> },
    { name: "Home6", component: <Home /> },
    { name: "Home7", component: <Home /> },
    { name: "Home8", component: <Home /> },
    { name: "Home9", component: <Home /> },
    { name: "Home10", component: <Home1 /> },
  ];

  scrollRefs.current = [...Array(list.length).keys()].map(
    (_, i) => scrollRefs.current[i] ?? createRef()
  );

  console.log(scrollRefs);

  navRefs.current = [...Array(list.length).keys()].map(
    (_, i) => navRefs.current[i] ?? createRef()
  );

  console.log(navRefs);

  const scrollTo = (index) => {
    console.log("setting scrolling" + scrolling);

    scrolling = true;

    scrollRefs.current[index].current.scrollIntoView({ behavior: "smooth" });

    setActive(index);

    setTimeout(() => {
      scrolling = false;
      navRefs.current[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }, 1000);
  };

  // const scrollHandler = (e) => {
  //   if (e.target !== document) return;

  //   if (scrolling === true) return;

  //   const scrollRefsElements = scrollRefs.current;

  //   scrollRefsElements.forEach((el, i) => {
  //     const rect = el.current.getBoundingClientRect();
  //     const elemTop = rect.top;
  //     const elemBottom = rect.bottom;
  //     const isVisible =
  //       elemTop < window.innerHeight / 2 && elemBottom > window.innerHeight / 2;

  //     if (isVisible) {
  //       navRefs.current[i].current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //         inline: "center",
  //       });
  //       setActive(i);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true);
  //   };
  // }, []);

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
        <ul className="myMenu">
          {list.map((item, i) => (
            <li className="nav-item " key={i} ref={navRefs.current[i]}>
              <a
                href={`#s-${i}`}
                className={`nav-link ${active === i ? "text-danger" : ""}`}
                onClick={(e) => {
                  scrollTo(i);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
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
