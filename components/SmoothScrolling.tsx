"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react"; // Import ReactNode for typing children

interface SmoothScrollingProps {
  children: ReactNode; // Explicitly define the type of 'children'
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
