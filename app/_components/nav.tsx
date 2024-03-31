"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <Link href="/">
        <p className={path === "/" ? "active" : ""}>Home</p>
      </Link>
      <Link href="/about">
        <p className={path === "/about" ? "active" : ""}>about</p>
      </Link>
    </nav>
  );
}
