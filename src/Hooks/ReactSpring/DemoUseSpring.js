import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function DemoUseSpring(props) {
  const [propsAni, api] = useSpring(
    () => ({
      from: { color_text: "red" },
      to: { color_text: "green" },
      config: { duration: 2000 },
    }),
    []
  );
  return (
    <animated.div
      style={{
        color: propsAni.color_text,
      }}
    >
      Hello World
    </animated.div>
  );
}
