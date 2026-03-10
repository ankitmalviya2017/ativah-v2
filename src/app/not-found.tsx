import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { ArrowLeft, RefreshCcw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-8xl md:text-9xl font-bold uppercase tracking-tighter text-gray-200 select-none">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-none px-8 w-full md:w-auto uppercase font-bold tracking-widest bg-black text-white hover:bg-gray-800"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none px-8 w-full md:w-auto uppercase font-bold tracking-widest border-black"
          >
            <Link href="/products">Shop New Arrivals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
