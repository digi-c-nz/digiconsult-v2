"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { navItems, startItem } from "@/lib/nav";

function normalise(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function Header() {
  const pathname = normalise(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          DigiConsult
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-controls={menuId}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id={menuId} className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={startItem.href}
            className="nav-start"
            aria-current={pathname === startItem.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {startItem.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
