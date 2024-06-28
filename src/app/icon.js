import { ImageResponse } from "next/og";
import { Inter } from "next/font/google";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const inter = Inter({
  subsets: ["latin"],
  weight: "900",
});

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 14,
          background: "#c47820",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000000",
          borderRadius: "100%",
          fontFamily: "Inter, sans-serif",
          fontFamily: `${inter.style.fontFamily}`,
          fontWeight: 900
        }}
      >
        MS
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
