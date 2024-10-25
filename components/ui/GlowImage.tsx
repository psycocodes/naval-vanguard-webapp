import Image from "next/image";
import React from "react";
const GlowImage = ({ imageName, glowColor = null }: { imageName: string; glowColor?: string | null }) => {
  return (
    <div className="relative">
      <Image
        src={`/images/${imageName}.png`}
        height={999}
        width={999}
        alt="logo"
        className="relative z-10" // Ensures it's on top
      />
      <Image
        src={`/images/${imageName}.png`}
        height={999}
        width={999}
        alt="glowing-logo"
        className={`absolute top-0 left-0 scale-[1.02] filter-custom opacity-100`} // Glow effect
      />
      {glowColor && <div className={`absolute inset-0 ${glowColor} mix-blend-multiply`}></div>}
    </div>
  );
};


export default GlowImage;
