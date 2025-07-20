import React, { useState } from "react";

const GlassyCard = () => {
  // State to store the tilt values
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Function to calculate and set tilt on mouse move
  const handleMouseMove = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.target;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    
    const centerX = width / 2;
    const centerY = height / 2;

    const angleX = ((y - centerY) / height) * 20; // Adjust the multiplier for more or less tilt on Y-axis
    const angleY = ((x - centerX) / width) * -20; // Adjust the multiplier for more or less tilt on X-axis

    setTilt({ x: angleX, y: angleY });
  };

  // Reset the tilt when mouse leaves
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-64 h-96 bg-white/10 backdrop-blur-xl rounded-lg shadow-lg p-4 cursor-pointer transition-transform duration-300 ease-in-out"
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col justify-center items-center h-full text-black">
        <h2 className="text-xl font-bold mb-4">Glassy Card</h2>
        <p className="text-sm">Hover over the card to see the tilt effect!</p>
      </div>
    </div>
  );
};

export default GlassyCard;