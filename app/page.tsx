import {
  Faq,
  Features,
  Hero,
  Partner,
  Pricing,
  WhatOurClientsSay,
} from "@/components";

export default function Home() {
  return (
    <main role="main">
      <Hero />
      <Features />
      <Partner />
      <Pricing />
      <Faq />
      <WhatOurClientsSay />
    </main>
  );
}
