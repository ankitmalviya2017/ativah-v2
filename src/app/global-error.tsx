"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { CopyX } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log error to a reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="container mx-auto px-4 py-24 min-h-screen flex justify-center flex-col items-center">
          <div className="text-center space-y-8 max-w-lg">
            <CopyX className="w-24 h-24 mx-auto text-red-500 mb-6" />

            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter select-none">
              Something went wrong!
            </h1>

            <p className="text-muted-foreground uppercase tracking-wider text-sm mt-4">
              We've experienced an unexpected server error. Our team has been
              notified and is working on it.
            </p>

            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => reset()}
                size="lg"
                className="rounded-none px-8 w-full md:w-auto uppercase font-bold tracking-widest bg-black text-white hover:bg-gray-800"
              >
                Try Again
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-none px-8 w-full md:w-auto uppercase font-bold tracking-widest border-black"
              >
                <Link href="/">Back Options</Link>
              </Button>
            </div>

            <p className="text-[10px] text-gray-400 mt-12 font-mono">
              Error Reference: {error.digest || "ERR-500"}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
