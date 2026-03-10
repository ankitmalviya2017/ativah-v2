import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold uppercase tracking-widest">
            Create Account
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Join SNITCH community
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="text-xs font-semibold uppercase tracking-wider block mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="h-12 rounded-none focus-visible:ring-black"
                  required
                />
              </div>
              <div>
                <label
                  className="text-xs font-semibold uppercase tracking-wider block mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="h-12 rounded-none focus-visible:ring-black"
                  required
                />
              </div>
            </div>

            <div>
              <label
                className="text-xs font-semibold uppercase tracking-wider block mb-2"
                htmlFor="email"
              >
                Email Address
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
              <label
                className="text-xs font-semibold uppercase tracking-wider block mb-2"
                htmlFor="password"
              >
                Password
              </label>
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
            Sign Up
          </Button>
        </form>

        <div className="text-center text-sm pt-4 border-t">
          <span className="text-muted-foreground mr-2">
            Already have an account?
          </span>
          <Link
            href="/login"
            className="font-bold uppercase tracking-wider hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
