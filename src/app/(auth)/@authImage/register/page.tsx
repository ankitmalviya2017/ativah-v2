import Image from "next/image";

export default function RegisterImage() {
  return (
    <Image
      src="/images/auth/signup_auth_bg.png"
      alt="Signup Background"
      fill
      className="object-cover"
      priority
    />
  );
}
