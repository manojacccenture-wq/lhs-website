"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";


const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries we serve", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Career", href: "/careers" },
  { name: "Contact us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full flex justify-center py-4 bg-white   fixed top-0 left-0 z-50">
      <div className="w-full max-w-7xl ">

        <div className="navbar flex items-center justify-between px-6 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 nav-logo">
            <span style={{ color: "var(--color-brand)" }}>●●●</span>
            Logo
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Button */}
          <Button variant="primary" size="sm">
            Log In
          </Button>

        </div>
      </div>
    </header>
  );
}