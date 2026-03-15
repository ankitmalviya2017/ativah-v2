import Image from "next/image";

export default function ForgotPasswordImage() {
  return (
    <Image
      src="/images/auth/login_auth_bg.png"
      alt="Forgot Password Background"
      fill
      className="object-cover"
      priority
    />
  );
}
