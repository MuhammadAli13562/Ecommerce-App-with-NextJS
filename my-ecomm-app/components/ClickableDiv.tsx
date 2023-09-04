"use client";

export default function ClickableDiv() {
  return (
    <button
      onClick={() => alert("You pressed")}
      className="absolute h-full w-full z-10 "
    ></button>
  );
}
