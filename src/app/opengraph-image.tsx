import { ImageResponse } from "next/og";

export const alt = "Brefyr — SEC Filing Intelligence for Small-Cap Investors";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0F0A 0%, #0D1A12 50%, #00D26A 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Brefyr
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            SEC Filing Intelligence for Small-Cap Investors
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "16px",
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <span>7,600+ Stocks</span>
            <span>8 Filing Types</span>
            <span>Summaries</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
