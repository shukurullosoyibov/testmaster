"use client";
declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export default function Analytics() {
  const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  if (!token) {
    return null;
  }
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <script
        src="https://beamanalytics.b-cdn.net/beam.min.js"
        data-token={token}
        async
      />
    </>
  );
}
