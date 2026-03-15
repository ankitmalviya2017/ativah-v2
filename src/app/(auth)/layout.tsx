import React from "react";

export default function AuthLayout({
  children,
  authImage,
}: {
  children: React.ReactNode;
  authImage: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left side image slot */}
      <div className="relative hidden lg:flex w-1/2 bg-gray-200 items-center justify-center overflow-hidden">
        {authImage}
        <div className="absolute inset-0 bg-black/10 transition-colors pointer-events-none" />
      </div>

      {/* Right side form slot */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}
