import Link from "next/link";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import Image from "next/image";
import BackToHome from "@/_components/buttons/back-to-home/BackToHome.component";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Forgot Password
        </h1>
        <p className="text-muted-foreground text-sm uppercase tracking-wider">
          Recover your account access
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
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
        </div>

        <Button
          type="submit"
          className="w-full h-12 uppercase font-bold tracking-widest rounded-none bg-black hover:bg-gray-900 text-white"
        >
          Send Reset Link
        </Button>
      </form>

      <div className="text-center text-sm pt-4 border-t">
        <span className="text-muted-foreground mr-2">
          Remembered your password?
        </span>
        <Link
          href="/login"
          className="font-bold uppercase tracking-wider hover:underline"
        >
          Log In
        </Link>
      </div>
      
      <div className="flex justify-center">
        <BackToHome />
      </div>
    </div>
  );
}
