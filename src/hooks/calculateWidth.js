import { useState, useEffect } from "react";
function CalculateWidth() {
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.screen.width);
    });
  }, [width]);
  if (width <= 450) {
    var mobile = true;
  } else {
    mobile = false;
  }

  return mobile;
}

export { CalculateWidth };
