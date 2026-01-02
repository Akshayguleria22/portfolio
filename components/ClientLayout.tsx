"use client";

import dynamic from "next/dynamic";

// Lazy load heavy client-side components
const StarryBackground = dynamic(
  () => import("@/components/StarryBackground"),
  {
    ssr: false,
  }
);

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const Interactive3DPhoto = dynamic(
  () => import("@/components/Interactive3DPhoto"),
  {
    ssr: false,
  }
);

export default function ClientLayout() {
  return (
    <>
      <StarryBackground />
      <CustomCursor />
      <Interactive3DPhoto />
    </>
  );
}
