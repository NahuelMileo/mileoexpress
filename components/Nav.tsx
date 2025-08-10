"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#flota", label: "Nuestra Flota" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <p className="text-lg font-semibold text-red-800">Mileo Express</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-gray-700 transition-colors hover:text-red-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop WhatsApp Button */}
        <div className="hidden md:block">
          <Button className="bg-green-600 text-white hover:bg-green-700">
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex h-full flex-col">
                {/* Header del Sheet */}
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                  <p className="font-semibold text-red-800">Mileo Express</p>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full bg-gray-100 p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                    aria-label="Cerrar menú"
                  >
                    {/* <X className="h-6 w-6" /> */}
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-700 transition-colors hover:bg-red-50 hover:text-red-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Footer del Sheet */}
                <div className="space-y-4 border-t border-gray-200 px-4 pt-6">
                  <Button
                    className="w-full bg-green-600 text-white hover:bg-green-700"
                    size="lg"
                    onClick={handleNavClick}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contactar por WhatsApp
                  </Button>

                  <div className="space-y-2 text-center"></div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
