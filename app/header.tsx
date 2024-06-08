import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { link } from "fs";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex gap-4 p-8 justify-between items-center h-16 text-primary-100 bg-primary-900">
      <div className="flex justify-center items-center gap-4">
        <Link href="/" className="text-lg">
          אכילה בקליק
        </Link>
        <Navbar />
      </div>
      {/* User sign-in/out */}
    </div>
  );
}
