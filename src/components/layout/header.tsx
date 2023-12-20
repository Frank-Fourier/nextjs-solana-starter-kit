import { Menu } from "@components/layout/menu";
import { ThemeToggle } from "@components/layout/theme-toggle";
import React from "react";
import Image from 'next/image';

export function Header() {
  return (
    <div className="navbar mb-6 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="navbar-start">
          <Image
            src="/text.png" // Replace with your image path
            alt="Logo"
            width={300} // Set the width as needed
            height={500} // Set the height as needed
            layout="fixed"
          />
      </div>

      <div className="navbar-end">
        <div className="hidden lg:block">
          <Menu
            className="menu-horizontal px-1"
          />
        </div>
        <ThemeToggle />
        <div className="lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
