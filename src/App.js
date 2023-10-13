import "./App.css";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { imgArray, domain, format } from "./data/imgArray";

export default function App() {
  const [CARDS, setCARDS] = useState([]);
  const [WRAPPERS, setWRAPPERS] = useState([]);
  const imgWidth = 20;

  useEffect(() => {
    setCARDS(gsap.utils.toArray(".card"));
    setWRAPPERS(gsap.utils.toArray(".img-wrap"));
  }, []);

  useEffect(() => {
    const THROW = gsap.timeline({});
    //animate cards
    CARDS.forEach((CARD, index) => {
      const THROW_SINGLE = gsap
        .timeline({ defaults: { ease: "power4.in", duration: 2 } })
        .to(
          CARD,
          {
            top: "100vh",
            left: 0,
          },
          0
        )
        .reverse()
        .to(
          CARD,
          {
            transform: `rotate(${((CARDS.length - index) * -10) / 2}deg)`,
          },
          0
        );
      THROW.add(THROW_SINGLE, 0);
    });
    //animate wrappers
    WRAPPERS.forEach((WRAPPER, index) => {
      const SLIDE_SINGLE = gsap
        .timeline({ defaults: { ease: "power4.out", duration: 2 } })
        .to(
          WRAPPER,
          {
            // the lower the index, the higher the degree of rotation
            transform: `rotate(${((CARDS.length - index) * 10) / 2}deg)`,
          },
          0
        );
      THROW.add(SLIDE_SINGLE, 0);
    });
  }, [CARDS, WRAPPERS]);

  //calculate max and min coordinates
  const cards = imgArray.map((img, index) => {
    //y
    const Ymax = (index + 1) * 10 - 1; //9
    const Ymin = index * 10; //0
    const Yrand = Math.floor(Math.random() * (Ymax - Ymin + 1)) + Ymin;
    //x
    const Xmin = 20;
    const Xmax = 0;
    const Xrand = Math.random() * (100 - Xmax - Xmin) + Xmin;

    return (
      <div className="img-wrap">
        <img
          src={domain + img + format}
          alt={img}
          key={img}
          className="card"
          id={img}
          style={{
            width: `${imgWidth}vmax`,
            top: `${Yrand}vh`,
            left: `${Xrand}%`,
            zIndex: `${imgArray.length - index}`,
          }}
        />
      </div>
    );
  });

  return (
    <div className="App">
      <main>
        <div id="gallery" >
          {cards}
        </div>
      </main>
    </div>
  );
}