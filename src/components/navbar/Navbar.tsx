import React from "react";
import logo from "../../assets/logo.svg";
// import { useState } from "react";
import menuicon from "../../assets/menu_icon.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const functionScroll = (id: string) => {
    const secaoSeguinte = document.getElementById(id);
    secaoSeguinte?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKlick = (id: string) => {
    setOpen(false);

    setTimeout(() => {
      functionScroll(id);
    }, 300);
  };
  return (
    <nav className="flex items-center justify-between mx-auto px-10 py-15 text-white">
      <img src={logo} className="cursor-pointer select-none" />
      <ul className="hidden lg:flex gap-10 text-[20px]">
        <li>
          <Link to="/" onClick={() => functionScroll("home")}>
            Home
          </Link>
        </li>
        <li>
          <a href="#" onClick={() => functionScroll("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#" onClick={() => functionScroll("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#" onClick={() => functionScroll("Testimonials")}>
            Testimonials
          </a>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Button
        className="hidden lg:flex text-[19px] border-2 rounded-full py-2 px-6 cursor-pointer"
        variant="ghost"
        size="lg"
      >
        Sign in
      </Button>
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button className="bg-transparent shadow-none hover:bg-transparent">
              <img src={menuicon} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle />
              <SheetDescription>
                <ul className="flex flex-col gap-10 text-[20px] text-black">
                  <li>
                    <Link to="/" onClick={() => handleKlick("home")}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleKlick("about")}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleKlick("projects")}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleKlick("Testimonials")}>
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
