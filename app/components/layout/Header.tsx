"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import clsx from "clsx";
import "@/app/styles/components/dropdown.css";

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries we serve", href: "/industries" },
  { name: "Career", href: "/career" },
  { name: "Contact us", href: "/contact" },
];

const resourcesDropdown = [
  { name: "Case studies", href: "/resources/case-studies" },
  { name: "Blogs", href: "/resources/blogs" },
  { name: "Videos", href: "/resources/videos" },
];

export default function Header() {
  const pathname = usePathname();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="header header-bordered">
      <div className="nav-container">
        <div className="navbar">

          {/* Logo */}
          <Link href="/" className="nav-logo flex items-center">
            <Image
              src="/logo.svg"
              alt="LHS Logo"
              width={80}
              height={40}
              priority
              className="object-none"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <React.Fragment key={item.name}>
                  {/* Normal Nav Item */}
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "nav-link",
                      isActive && "nav-link-active"
                    )}
                  >
                    {item.name}
                  </Link>

                  {/* 👉 Inject Resources AFTER Industries */}
                  {item.name === "Industries we serve" && (
                    <div
                      key="resources"
                      className="relative group"
                    >
                      <button
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                        className={clsx(
                          "nav-link flex items-center gap-1",
                          (pathname?.includes("/resources") || isResourcesOpen) &&
                          "text-primary-1"
                        )}
                      >
                        Resources
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className={clsx(
                          "dropdown-menu",
                          isResourcesOpen ? "dropdown-open" : ""
                        )}
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                      >
                        {resourcesDropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                              "dropdown-item",
                              pathname === item.href && "dropdown-item-active"
                            )}
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* CTA */}
          <Button variant="primary" size="sm">
            Log In
          </Button>

        </div>
      </div>
    </header>
  );
}