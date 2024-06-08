import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 h-full ">
      <h1 className="">העמוד לא נמצא</h1>
      <p>
        חזור לעמוד
        <span>
          {" "}
          <Link href={"/"}>הבית</Link>
        </span>
      </p>
    </div>
  );
}
