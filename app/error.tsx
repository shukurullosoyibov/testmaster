"use client";
import { Button } from "@/components/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <section className="max-w-screen flex h-full min-h-screen w-full flex-col items-center justify-center bg-white">
      <h1 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-5xl">
        500! Something went wrong!
      </h1>
      <Button
        type="button"
        onClick={() => reset()}
        text="Try Again"
        className="btn-primary"
      />
    </section>
  );
}
