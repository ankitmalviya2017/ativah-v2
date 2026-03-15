import Image from "next/image";

export default function LoginImage() {
  return (
    <Image
      src="/images/auth/login_auth_bg.png"
      alt="Login Background"
      fill
      className="object-cover"
      priority
    />
  );
}
