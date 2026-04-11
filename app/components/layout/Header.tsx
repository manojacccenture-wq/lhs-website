"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import clsx from "clsx";

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
    <header className="header header-bordered">
      <div className="nav-container">
        <div className="navbar">

          {/* Logo */}
          <Link href="/" className="nav-logo">
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
                  className={clsx(
                    "nav-link",
                    isActive && "nav-link-active"
                  )}
                >
                  {item.name}
                </Link>
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