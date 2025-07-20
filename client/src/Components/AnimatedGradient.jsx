import React from "react";

export default function AnimatedGradient() {
  return (
    <div className="w-full h-screen 
                    bg-gradient-to-tr 
                    from-[rgba(0,123,255,0.5)] 
                 via-[rgba(128,0,128,0.5)] 
                 to-[rgba(255,64,129,0.5)] 
                    bg-[length:200%] 
                    animate-gradient 
                    flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">
        Animated Gradient Background
      </h1>
    </div>
  );
}