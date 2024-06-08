"use client";

import Link from "next/link";

import { Button } from "./ui/button";

export default function Navbar() {
  const navigationLinks = [
    {
      label: "מעקב מזון",
      href: "/food-tracking",
    },
    {
      label: "מעקב ספורט",
      href: "/sport-tracking",
    },
    {
      label: "מתכונים",
      href: "/recipes",
    },
  ];
  return (
    <nav className="flex">
      <ul className="flex gap-4">
        {navigationLinks.map(({ label, href }) => (
          <Button variant={"link"} key={href} asChild>
            <Link href={href}>{label}</Link>
          </Button>
        ))}
      </ul>
    </nav>
  );
}
