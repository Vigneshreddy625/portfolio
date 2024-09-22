"use client";
import React, { useState } from "react";
import { Menu } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./DarkMode/togglemode";
import Link from "next/link";



export function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-sm lg:max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <div className="absolute bottom-4 right-2 md:right-10">
        <ModeToggle/>
        </div>
      </Menu>
      
    </div>)
  );
}
