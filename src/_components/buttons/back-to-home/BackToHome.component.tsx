import Link from "next/link";
import { Button } from "@/_components/ui/button";

export default function BackToHome() {
  return (
    <Link href="/">
      <Button variant="link" className="underline uppercase tracking-wider">
        Back to Home
      </Button>
    </Link>
  );
}
