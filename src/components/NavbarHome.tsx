'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cover from "../../public/images/cover-nl.webp";
import Dropdown11 from './Dropdown11';

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

const NavbarHome: React.FC = () => {
  const navLinks: NavLink[] = [
    { href: "/", label: "Welkom" },
    { href: "/Diensten", label: "Diensten" },
    { href: "/Perspectieven", label: "Perspectieven" },
    { href: "/OverMij", label: "Over Mij" },
    { href: "/Clienten", label: "Clienten" },
    { href: "/DrieDCollectie", label: "DrieDCollectie" },
    { href: "/Certificaten", label: "Certificaten" },
    { href: "CurriculumVitae", label: "Mijn CV", target: "_blank" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" aria-label="Home">
        <Image
          className="logo"
          src={cover}
          alt="Logo van mijn bedrijf"
          width={80}
          height={80}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </Link>
      <Dropdown11 links={navLinks} />
    </nav>
  );
};

export default NavbarHome;

