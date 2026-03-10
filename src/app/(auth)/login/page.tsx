import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold uppercase tracking-widest">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Log in to your account
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                className="text-xs font-semibold uppercase tracking-wider block mb-2"
                htmlFor="email"
              >
                Email Address Let's Go
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@doe.com"
                className="h-12 rounded-none focus-visible:ring-black"
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  className="text-xs font-semibold uppercase tracking-wider block"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-muted-foreground underline hover:text-black"
                >
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 rounded-none focus-visible:ring-black"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 uppercase font-bold tracking-widest rounded-none bg-black hover:bg-gray-900 text-white"
          >
            Log In
          </Button>
        </form>

        <div className="text-center text-sm pt-4 border-t">
          <span className="text-muted-foreground mr-2">
            Don't have an account?
          </span>
          <Link
            href="/register"
            className="font-bold uppercase tracking-wider hover:underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
