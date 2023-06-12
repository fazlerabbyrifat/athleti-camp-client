import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "@use-gesture/react";

const ImageCard = ({ imageURL }) => {
  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, scale }, api] = useSpring(() => ({
    rotateX: 360,
    rotateY: 360,
    rotateZ: 0,
    scale: 1,
    zoom: 0,
    x: 0,
    y: 0,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const calcX = (py, y) => {
    return -(py - window.innerHeight / 2 - y) / 20;
  };

  const calcY = (px, x) => {
    return (px - window.innerWidth / 2 - x) / 20;
  };

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 360, rotateY: 360, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
    },
    { target: domTarget }
  );

  return (
    <animated.div
      ref={domTarget}
      className="rounded p-5 overflow-hidden shadow-lg"
      style={{
        transform: "perspective(600px)",
        x,
        y,
        scale,
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <animated.div>
        <div
          className="bg-cover h-64"
          style={{ backgroundImage: `url(${imageURL})` }}
        />
      </animated.div>
    </animated.div>
  );
};

export default ImageCard;
